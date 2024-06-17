import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Digite um e-mail valido"),
  password: yup.string().required("Senha obrigatória"),
});
