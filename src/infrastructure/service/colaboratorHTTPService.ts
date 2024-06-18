import { AxiosResponse } from "axios";
import { api } from "../api";
import {
  IColaborator,
  ICreateColaborator,
} from "../../contexts/ColaboratorsContext/interface";

interface IColaboratorHTTPService {
  createColaborator: (
    data: ICreateColaborator
  ) => Promise<AxiosResponse<IColaborator>>;
}

const urlPath = "/colaborators";

const ColaboratorHTTPService: IColaboratorHTTPService = {
  createColaborator: function (data: ICreateColaborator) {
    return api.post(urlPath, data);
  },
};

export default ColaboratorHTTPService;
