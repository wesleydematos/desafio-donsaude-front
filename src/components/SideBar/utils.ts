import { ISideItem } from "./interfaces";
import {
  PiChartPieLight,
  PiCurrencyDollarSimpleLight,
  PiDeviceMobileCameraLight,
  PiGearSixLight,
  PiIdentificationBadgeLight,
  PiUserLight,
  PiUsersFourLight,
} from "react-icons/pi";

export const navItems: ISideItem[] = [
  {
    icon: PiChartPieLight,
    name: "Indicadores",
    subItens: [],
    path: "",
  },
  {
    icon: PiIdentificationBadgeLight,
    name: "Atendimento",
    subItens: [],
    path: "",
  },
  {
    icon: PiDeviceMobileCameraLight,
    name: "App Don",
    subItens: [],
    path: "",
  },
  {
    icon: PiCurrencyDollarSimpleLight,
    name: "Financeiro",
    subItens: [],
    path: "",
  },
  {
    icon: PiUsersFourLight,
    name: "Parceiros",
    subItens: [],
    path: "",
  },
  {
    icon: PiUserLight,
    name: "Usuários",
    subItens: [],
    path: "",
  },
  {
    icon: PiGearSixLight,
    name: "Configurações",
    subItens: [
      {
        name: "Campanhas",
        path: "",
      },
      {
        name: "Categorias",
        path: "",
      },
      {
        name: "Colaboradores",
        path: "/colaborators",
      },
      {
        name: "Local de Atendimento",
        path: "",
      },
      {
        name: "Metas",
        path: "",
      },
      {
        name: "Modelos de Orçamento",
        path: "",
      },
      {
        name: "Permissões",
        path: "",
      },
      {
        name: "Procedimentos",
        path: "",
      },
    ],
    path: "",
  },
];
