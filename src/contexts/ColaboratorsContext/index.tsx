import { useContext, createContext } from "react";
import { IColaboratorProviderProps, ICreateColaborator } from "./interface";
import ColaboratorHTTPService from "../../infrastructure/service/colaboratorHTTPService";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../AuthContext";

type ColaboratorContextData = {
  createColaborator(data: ICreateColaborator): Promise<void>;
};

const ColaboratorContext = createContext({} as ColaboratorContextData);

function ColaboratorProvider({ children }: IColaboratorProviderProps) {
  const { setHeadersApi } = useAuth();
  const toast = useToast();

  async function createColaborator(data: ICreateColaborator) {
    try {
      setHeadersApi();

      await ColaboratorHTTPService.createColaborator(data);
      toast({
        title: "Colaborador criado com sucesso!",
        position: "top-right",
        isClosable: false,
        status: "success",
      });
    } catch (error: any) {
      toast({
        title: `Não foi possível criar o colaborador${
          error.response.data.message ? `: ${error.response.data.message}` : "."
        } `,
        position: "top-right",
        isClosable: false,
        status: "error",
      });
    }
  }

  return (
    <ColaboratorContext.Provider value={{ createColaborator }}>
      {children}
    </ColaboratorContext.Provider>
  );
}

function useColaborator() {
  const context = useContext(ColaboratorContext);

  if (!context) {
    throw new Error(
      "useColaborator must be used within an ColaboratorProvider"
    );
  }

  return context;
}

export { ColaboratorProvider, useColaborator };
