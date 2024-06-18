import { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { PiCaretLeftLight } from "react-icons/pi";
import { CustomButton, CustomInput, FormBackground } from "../../../components";
import { RiEyeCloseLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createColaboratorSchema } from "../../../schemas/colaboratorSchema";
import { useColaborator } from "../../../contexts/ColaboratorsContext";
import { ICreateColaborator } from "../../../contexts/ColaboratorsContext/interface";

export default function NewColaborator() {
  const { createColaborator } = useColaborator();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePasswordVisibility = (type: string) => {
    type === "password"
      ? setShowPassword(!showPassword)
      : setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(createColaboratorSchema),
  });

  const clearInputs = () => {
    reset();
  };

  const postColaborator: SubmitHandler<ICreateColaborator> = async (values) => {
    await createColaborator({ ...values });
    clearInputs();
  };

  return (
    <Flex
      as="main"
      flexDir="column"
      bg="background"
      w="100%"
      minH="full"
      p="30px"
    >
      <Flex
        fontSize="24px"
        alignItems="center"
        h="fit-content"
        mb="30px"
        fontWeight={700}
      >
        <Link href="/colaborators">
          <PiCaretLeftLight />
        </Link>
        <Text lineHeight="30px">Novo colaborador</Text>
      </Flex>

      <FormBackground w="full" onSubmit={handleSubmit(postColaborator)}>
        <Flex w="full" gap={5}>
          <FormControl>
            <FormLabel fontWeight={700} color="grey.bold">
              Nome
            </FormLabel>
            <CustomInput
              placeholder="Digite o nome completo"
              {...register("name")}
            />
            {errors.name && (
              <Text color="primary.base">{errors.name.message}</Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel fontWeight={700} color="grey.bold">
              CPF
            </FormLabel>
            <CustomInput
              placeholder="Apenas números"
              {...register("documentNumber")}
            />
            {errors.documentNumber && (
              <Text color="primary.base">{errors.documentNumber.message}</Text>
            )}
          </FormControl>
        </Flex>

        <Flex w="full" gap={5}>
          <FormControl>
            <FormLabel fontWeight={700} color="grey.bold">
              Telefone
            </FormLabel>
            <CustomInput placeholder="DDD + número" {...register("phone")} />
            {errors.phone && (
              <Text color="primary.base">{errors.phone.message}</Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel fontWeight={700} color="grey.bold">
              E-mail
            </FormLabel>
            <CustomInput placeholder="Digite aqui" {...register("email")} />
            {errors.email && (
              <Text color="primary.base">{errors.email.message}</Text>
            )}
          </FormControl>
        </Flex>

        <Flex w="full" gap={5}>
          <FormControl>
            <FormLabel fontWeight={700} color="grey.bold">
              Senha
            </FormLabel>
            <InputGroup>
              <CustomInput
                placeholder="Digite aqui"
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                  onClick={() => handleTogglePasswordVisibility("password")}
                  variant="ghost"
                  colorScheme="gray"
                  icon={showPassword ? <RiEyeCloseLine /> : <AiOutlineEye />}
                  size="sm"
                  style={{ marginRight: "-1.5rem" }}
                />
              </InputRightElement>
            </InputGroup>
            {errors.password && (
              <Text color="primary.base">{errors.password.message}</Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel fontWeight={700} color="grey.bold">
              Confirme a senha
            </FormLabel>
            <InputGroup>
              <CustomInput
                placeholder="Digite novamente aqui"
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  aria-label={
                    showConfirmPassword ? "Esconder senha" : "Mostrar senha"
                  }
                  onClick={() =>
                    handleTogglePasswordVisibility("confirmPassword")
                  }
                  variant="ghost"
                  colorScheme="gray"
                  icon={
                    showConfirmPassword ? <RiEyeCloseLine /> : <AiOutlineEye />
                  }
                  size="sm"
                  style={{ marginRight: "-1.5rem" }}
                />
              </InputRightElement>
            </InputGroup>
            {errors.confirmPassword && (
              <Text color="primary.base">{errors.confirmPassword.message}</Text>
            )}
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel fontWeight={700} color="grey.bold">
            Foto
          </FormLabel>
          <CustomInput
            isDisabled
            textAlign="center"
            placeholder="Clique ou arraste 📄"
          />
        </FormControl>

        <Flex w="full" justifyContent="end" gap={2}>
          <Button
            w={{ base: "fit-content", xl: "247px" }}
            borderRadius="500px"
            color="black"
            bg="white"
            _hover={{ color: "grey.bold" }}
            onClick={clearInputs}
          >
            Cancelar
          </Button>
          <CustomButton
            type="submit"
            isLoading={isSubmitting}
            w={{ base: "fit-content", xl: "247px" }}
            borderRadius="500px"
          >
            Salvar
          </CustomButton>
        </Flex>
      </FormBackground>
    </Flex>
  );
}
