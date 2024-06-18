import { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Image,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { CustomButton, CustomInput, FormBackground } from "../../components";
import { AiOutlineEye, AiOutlineUser } from "react-icons/ai";
import { SlLock } from "react-icons/sl";
import { RiEyeCloseLine } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/AuthContext";
import { signInSchema } from "../../schemas/signInSchema";
import { SignInCredentials } from "../../contexts/AuthContext/interfaces";
import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo-g.png";

export default function Login() {
  const { signIn, getAuthInfo } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSignIn: SubmitHandler<SignInCredentials> = async (values) => {
    await signIn({ ...values });
  };

  useEffect(() => {
    getAuthInfo();
  }, []);

  return (
    <Box
      h="100vh"
      w="100vw"
      backgroundImage={`url(${background})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      color="grey.bold"
      fontSize="14px"
    >
      <Flex align="center" justify="center" height="100%">
        <FormBackground maxWidth="md" onSubmit={handleSubmit(handleSignIn)}>
          <Image src={logo} alt="Logo" mb={4} w="188px" h="56px" />

          <FormControl id="email">
            <FormLabel>E-mail</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineUser color="gray.300" />}
              />
              <CustomInput
                type="email"
                pl="2.5rem"
                borderRadius="12px"
                placeholder="Preencha com seu email"
                {...register("email")}
              />
            </InputGroup>
            {errors.email && (
              <Text color="primary.base">{errors.email.message}</Text>
            )}
          </FormControl>

          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SlLock color="gray.300" />}
              />
              <CustomInput
                type={showPassword ? "text" : "password"}
                px="2.5rem"
                borderRadius="12px"
                placeholder="Preencha com sua senha"
                {...register("password")}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                  onClick={handleTogglePasswordVisibility}
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

          <Flex justifyContent="flex-start" w="full">
            <Checkbox isChecked={rememberMe} onChange={handleRememberMeChange}>
              <Text fontSize="sm">Lembre de mim</Text>
            </Checkbox>
          </Flex>

          <Box w="full" borderRadius="500px" overflow="hidden">
            <CustomButton type="submit" isLoading={isSubmitting} w="full">
              Entrar
            </CustomButton>
          </Box>

          <Text fontWeight="bold" color="primary.base" cursor="pointer">
            Esqueci minha senha
          </Text>
        </FormBackground>
      </Flex>
    </Box>
  );
}
