import { IconType } from "react-icons";

export interface ISideSubItem {
  name: string;
  path: string;
}

export interface ISideItem {
  icon: IconType;
  name: string;
  path: string;
  subItens: ISideSubItem[];
}

export type SpecialPaths = {
  [key: string]: string;
};
