import { useContext, createContext, useState } from "react";
import {
  IAllColaboratorsResponse,
  IColaborator,
  IColaboratorProviderProps,
  ICreateColaborator,
  IEditColaborator,
} from "./interface";
import ColaboratorHTTPService, {
  IQueryParams,
} from "../../infrastructure/service/colaboratorHTTPService";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../AuthContext";

type ColaboratorContextData = {
  createColaborator(data: ICreateColaborator): Promise<void>;
  loading: boolean;
  allColaborators: IAllColaboratorsResponse;
  getAllColaborators(
    queryParams?: IQueryParams
  ): Promise<IAllColaboratorsResponse | undefined>;
  findColaboratorById(id: string): Promise<void>;
  colaborator: IColaborator;
  updateColaborator(id: string, data: IEditColaborator): Promise<void>;
};

const ColaboratorContext = createContext({} as ColaboratorContextData);

function ColaboratorProvider({ children }: IColaboratorProviderProps) {
  const { setHeadersApi } = useAuth();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [allColaborators, setAllColaborators] = useState(
    {} as IAllColaboratorsResponse
  );
  const [colaborator, setColaborator] = useState({} as IColaborator);

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

  async function getAllColaborators(queryParams?: IQueryParams) {
    try {
      setLoading(true);
      setHeadersApi();

      const { data } = await ColaboratorHTTPService.getAllColaborators(
        queryParams
      );

      setAllColaborators(data);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function findColaboratorById(id: string) {
    setColaborator({} as IColaborator);

    try {
      setLoading(true);
      setHeadersApi();

      const { data } = await ColaboratorHTTPService.getColaboratorById(id);

      setColaborator(data);
    } catch (error) {
      toast({
        title: "Colaborador não encontrado!",
        position: "top-right",
        isClosable: false,
        status: "warning",
      });
    } finally {
      setLoading(false);
    }
  }

  async function updateColaborator(id: string, data: IEditColaborator) {
    try {
      await ColaboratorHTTPService.updateColaborator(id, data);

      toast({
        title: "Colaborador editado com sucesso!",
        position: "top-right",
        isClosable: false,
        status: "success",
      });

      await findColaboratorById(id);
    } catch (error: any) {
      toast({
        title: `Não foi possível editar o colaborador${
          error.response.data.message ? `: ${error.response.data.message}` : "."
        } `,
        position: "top-right",
        isClosable: false,
        status: "error",
      });
    }
  }

  return (
    <ColaboratorContext.Provider
      value={{
        createColaborator,
        allColaborators,
        getAllColaborators,
        loading,
        colaborator,
        findColaboratorById,
        updateColaborator,
      }}
    >
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
