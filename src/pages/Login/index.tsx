import { useState } from "react";
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
import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo-g.png";
import { CustomButton, CustomInput } from "../../components";
import { AiOutlineEye, AiOutlineUser } from "react-icons/ai";
import { SlLock } from "react-icons/sl";
import { RiEyeCloseLine } from "react-icons/ri";

export default function Login() {
  const isLoading = false;
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <Box
      h="100vh"
      w="100vw"
      backgroundImage={`url(${background})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex align="center" justify="center" height="100%">
        <Flex
          flexDirection="column"
          gap={4}
          px={10}
          py="50px"
          alignItems="center"
          rounded="md"
          boxShadow="lg"
          backgroundColor="white"
          w="full"
          maxWidth="md"
        >
          <Image src={logo} alt="Logo" mb={4} w="188px" h="56px" />

          <FormControl id="email">
            <FormLabel>E-mail</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineUser color="gray.300" />}
              />
              <CustomInput
                pl="2.5rem"
                type="email"
                placeholder="Preencha com seu email"
              />
            </InputGroup>
          </FormControl>

          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SlLock color="gray.300" />}
              />
              <CustomInput
                px="2.5rem"
                type={showPassword ? "text" : "password"}
                placeholder="Preencha com sua senha"
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
          </FormControl>

          <Flex justifyContent="flex-start" w="full">
            <Checkbox isChecked={rememberMe} onChange={handleRememberMeChange}>
              <Text fontSize="sm">Lembre de mim</Text>
            </Checkbox>
          </Flex>

          <Box w="full" borderRadius="500px" overflow="hidden">
            <CustomButton action={() => {}} isLoading={isLoading} w="full">
              Entrar
            </CustomButton>
          </Box>

          <Text fontWeight="bold" color="primary.base" cursor="pointer">
            Esqueci minha senha
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
