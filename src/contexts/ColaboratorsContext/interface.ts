import { ReactNode } from "react";
import { Maybe } from "yup";

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

export interface IAllColaboratorsResponse {
  data: IColaborator[];
  count: number;
  actual_page: number;
}

export interface IEditColaborator {
  name?: Maybe<string | undefined>;
  documentNumber?: Maybe<string | undefined>;
  phone?: Maybe<string | undefined>;
  email?: Maybe<string | undefined>;
}
