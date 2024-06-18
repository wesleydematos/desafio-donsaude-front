import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import {
  IAuthCredentials,
  IAuthProviderProps,
  SignInCredentials,
} from "./interfaces";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { api } from "../../infrastructure/api";
import { IColaborator } from "../ColaboratorsContext/interface";
import AuthHTTPService from "../../infrastructure/service/authHTTPService";

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
  authInfo: IAuthCredentials;
  loading: boolean;
  colaborator: IColaborator;
  setColaborator: Dispatch<SetStateAction<IColaborator>>;
  getAuthInfo(): void;
  setHeadersApi(): void;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: IAuthProviderProps) {
  const navigate = useNavigate();
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  const [authInfo, setAuthInfo] = useState({} as IAuthCredentials);
  const [colaborator, setColaborator] = useState({} as IColaborator);

  function setHeadersApi() {
    const acessToken = localStorage.getItem("@Token-DonSaude");

    if (acessToken) {
      api.defaults.headers["Authorization"] = `Bearer ${JSON.parse(
        acessToken
      )}`;
    } else {
      toast({
        title: "Houve um erro com o seu acesso!",
        position: "top-right",
        isClosable: false,
        description: "Faça o login novamente.",
        status: "error",
      });

      signOut();
    }
  }

  function getAuthInfo() {
    const token = localStorage.getItem("@Token-DonSaude");

    if (token) {
      try {
        api.defaults.headers["Authorization"] = `Bearer ${token}`;
        const loggedColaborator = localStorage.getItem("colaborator");

        if (loggedColaborator) {
          const parsedColaborator = JSON.parse(loggedColaborator);

          setColaborator(parsedColaborator.colaborator);
          setAuthInfo(parsedColaborator);
        } else {
          setAuthInfo({} as IAuthCredentials);
        }

        navigate("/colaborators");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      navigate("/");
    }
  }

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await AuthHTTPService.login(email, password);
      const { expiresIn, token, colaborator } = response.data;

      setAuthInfo({
        token,
        expiresIn,
        colaborator,
      });

      localStorage.setItem(
        "colaborator",
        JSON.stringify({
          token,
          expiresIn,
          colaborator,
        })
      );

      localStorage.setItem("@Token-DonSaude", JSON.stringify(token));

      setColaborator(colaborator);

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      navigate(`/colaborators`);

      toast({
        title: "Login efetuado com sucesso!",
        position: "top-right",
        isClosable: false,
        status: "success",
      });
    } catch (error) {
      toast({
        title:
          "Erro ao efetuar login, verifique se as credenciais estão corretas!",
        position: "top-right",
        isClosable: false,
        status: "error",
      });
    }
  }

  async function signOut() {
    api.defaults.headers["Authorization"] = null;

    localStorage.clear();
    setAuthInfo({} as IAuthCredentials);
    navigate("/");
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        getAuthInfo,
        authInfo,
        signOut,
        loading,
        colaborator,
        setColaborator,
        setHeadersApi,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
