import * as yup from "yup";
import { validateCPF } from "../utils/validateCpf";

export const createColaboratorSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Digite um e-mail válido"),
  password: yup.string().required("Senha obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "As senhas precisam ser iguais")
    .required("Confirmação de senha obrigatória"),
  documentNumber: yup
    .string()
    .required("CPF obrigatório")
    .test("is-valid-cpf", "CPF inválido", (value) => validateCPF(value)),
  name: yup.string().required("Nome obrigatório"),
  phone: yup
    .string()
    .required("Telefone obrigatório")
    .matches(
      /^\d{2}\d{4,5}\d{4}$/,
      "Telefone deve estar no formato DDD + número (ex: 81987654321)"
    ),
});
