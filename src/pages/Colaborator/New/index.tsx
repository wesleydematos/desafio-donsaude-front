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

export default function NewColaborator() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePasswordVisibility = (type: string) => {
    type === "password"
      ? setShowPassword(!showPassword)
      : setShowConfirmPassword(!showConfirmPassword);
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

      <FormBackground w="full">
        <Flex w="full" gap={5}>
          <FormControl>
            <FormLabel fontWeight={700} color="grey.bold">
              Nome
            </FormLabel>
            <CustomInput placeholder="Digite o nome completo" />
          </FormControl>

          <FormControl>
            <FormLabel fontWeight={700} color="grey.bold">
              CPF
            </FormLabel>
            <CustomInput placeholder="Apenas números" />
          </FormControl>
        </Flex>

        <Flex w="full" gap={5}>
          <FormControl>
            <FormLabel fontWeight={700} color="grey.bold">
              Telefone
            </FormLabel>
            <CustomInput placeholder="DDD + número" />
          </FormControl>

          <FormControl>
            <FormLabel fontWeight={700} color="grey.bold">
              E-mail
            </FormLabel>
            <CustomInput placeholder="Digite aqui" />
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
          </FormControl>

          <FormControl>
            <FormLabel fontWeight={700} color="grey.bold">
              Confirme a senha
            </FormLabel>
            <InputGroup>
              <CustomInput
                placeholder="Digite novamente aqui"
                type={showConfirmPassword ? "text" : "password"}
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
          >
            Cancelar
          </Button>
          <CustomButton
            type="submit"
            // isLoading={isSubmitting}
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
