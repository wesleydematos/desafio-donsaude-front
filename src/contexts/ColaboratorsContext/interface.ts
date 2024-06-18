import { ReactNode } from "react";

export interface IColaboratorProviderProps {
  children: ReactNode;
}

export interface IColaborator {
  id: string;
  isAllowed?: boolean;
  name: string;
  documentNumber: string;
  phone: string;
  email: string;
  photo: string;
}

export interface ICreateColaborator
  extends Omit<IColaborator, "photo" | "id"> {}
