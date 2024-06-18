import { AxiosResponse } from "axios";
import { api } from "../api";
import {
  IAllColaboratorsResponse,
  IColaborator,
  ICreateColaborator,
  IEditColaborator,
} from "../../contexts/ColaboratorsContext/interface";

export interface IQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  isAllowed?: boolean;
}

interface IColaboratorHTTPService {
  createColaborator: (
    data: ICreateColaborator
  ) => Promise<AxiosResponse<IColaborator>>;
  getAllColaborators: (
    queryParams?: IQueryParams
  ) => Promise<AxiosResponse<IAllColaboratorsResponse>>;
  getColaboratorById: (id: string) => Promise<AxiosResponse<IColaborator>>;
  updateColaborator: (
    id: string,
    data: IEditColaborator
  ) => Promise<AxiosResponse<IColaborator>>;
}

const urlPath = "/colaborators";

const ColaboratorHTTPService: IColaboratorHTTPService = {
  createColaborator: function (data: ICreateColaborator) {
    return api.post(urlPath, data);
  },

  getAllColaborators: function (
    queryParams?
  ): Promise<AxiosResponse<IAllColaboratorsResponse>> {
    return api.get(urlPath, { params: queryParams });
  },

  getColaboratorById: function (
    id: string
  ): Promise<AxiosResponse<IColaborator>> {
    return api.get(`${urlPath}/${id}`);
  },

  updateColaborator: function (
    id: string,
    data: IEditColaborator
  ): Promise<AxiosResponse<IColaborator>> {
    return api.put(`${urlPath}/${id}`, data);
  },
};

export default ColaboratorHTTPService;
