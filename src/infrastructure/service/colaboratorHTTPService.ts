import { AxiosResponse } from "axios";
import { api } from "../api";
import {
  IAllColaboratorsResponse,
  IColaborator,
  ICreateColaborator,
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
};

export default ColaboratorHTTPService;
