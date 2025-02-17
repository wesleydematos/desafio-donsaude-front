import { ReactNode } from "react";
import { IColaborator } from "../ColaboratorsContext/interface";

export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IAuthCredentials {
  token: string;
  expiresIn: number;
  colaborator: IColaborator;
}

export interface SignInCredentials {
  email: string;
  password: string;
}
