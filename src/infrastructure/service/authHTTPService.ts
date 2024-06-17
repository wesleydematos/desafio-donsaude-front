import { AxiosResponse } from "axios";
import { api } from "../api";

interface IAuthHTTPService {
  login: (email: string, password: string) => Promise<AxiosResponse>;
}

const AuthHTTPService: IAuthHTTPService = {
  login: function (email: string, password: string): Promise<AxiosResponse> {
    const data = {
      email,
      password,
    };

    return api.post(`/auth/login`, data);
  },
};

export default AuthHTTPService;
