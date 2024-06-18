import {
  Box,
  Button,
  Divider,
  Flex,
  InputGroup,
  InputLeftElement,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CustomButton, CustomInput } from "../../components";
import {
  PiClockCounterClockwiseLight,
  PiMagnifyingGlass,
  PiPasswordLight,
  PiPencilSimpleLight,
  PiPlusCircle,
  PiShieldCheckLight,
  PiShieldSlashLight,
  PiSlidersHorizontalLight,
  PiUserLight,
} from "react-icons/pi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Colaborators() {
  const [colaboratorAccessType, setColaboratorAccessType] = useState("allowed");
  const navigate = useNavigate();

  return (
    <Flex
      flexDir="column"
      as="main"
      backgroundColor="background"
      w="100%"
      minH="full"
      p="30px"
    >
      <Flex
        justifyContent="space-between"
        fontSize="24px"
        h="fit-content"
        w="full"
        mb="30px"
        fontWeight={700}
      >
        <Text lineHeight="30px">Colaborador</Text>
        <CustomButton
          borderRadius="500px"
          onClick={() => navigate("/colaborators/new")}
        >
          <PiPlusCircle style={{ marginRight: "5px", fontSize: "24px" }} /> Novo
          colaborador
        </CustomButton>
      </Flex>

      <Flex bg="white" borderRadius="500px" w="full" p={1} h="fit-content">
        <Button
          onClick={() => setColaboratorAccessType("allowed")}
          display="flex"
          alignItems="center"
          gap={2}
          bg={colaboratorAccessType === "allowed" ? "primary.light" : "inherit"}
          w="50%"
          color={
            colaboratorAccessType === "allowed" ? "primary.base" : "grey.bold"
          }
          _hover={{ bg: `` }}
          _active={{ bg: `` }}
          borderRadius="500px"
        >
          <PiShieldCheckLight />
          Com acesso ao sistema
          <Box
            px={1}
            bg={
              colaboratorAccessType === "allowed" ? "primary.base" : "grey.bold"
            }
            borderRadius="500px"
            color="white"
            fontSize="14px"
          >
            0
          </Box>
        </Button>
        <Button
          onClick={() => setColaboratorAccessType("not-allowed")}
          display="flex"
          alignItems="center"
          gap={2}
          bg={
            colaboratorAccessType === "not-allowed"
              ? "primary.light"
              : "inherit"
          }
          w="50%"
          color={
            colaboratorAccessType === "not-allowed"
              ? "primary.base"
              : "grey.bold"
          }
          _hover={{ bg: `` }}
          _active={{ bg: `` }}
          borderRadius="500px"
        >
          <PiShieldSlashLight />
          Sem acesso ao sistema
          <Box
            px={1}
            bg={
              colaboratorAccessType === "not-allowed"
                ? "primary.base"
                : "grey.bold"
            }
            borderRadius="500px"
            color="white"
            fontSize="14px"
          >
            0
          </Box>
        </Button>
      </Flex>

      <Flex
        flexDirection="column"
        py="5px"
        borderRadius="16px"
        boxShadow="lg"
        backgroundColor="white"
        w="full"
        mt={5}
      >
        <Flex
          w="full"
          h="fit-content"
          py={2}
          px={3}
          justifyContent="space-between"
        >
          <InputGroup display={{ base: "none", xl: "flex" }} w="300px">
            <InputLeftElement
              pointerEvents="none"
              children={<PiMagnifyingGlass size="20px" />}
            />
            <CustomInput px="2.5rem" placeholder="Buscar" borderRadius="16px" />
          </InputGroup>

          <Button
            border="1px solid #D0D5DD"
            display="flex"
            alignItems="center"
            bg="transparent"
            borderRadius="16px"
            color="grey.base"
            fontWeight={500}
            _hover={{ bg: "" }}
            gap={2}
          >
            <PiSlidersHorizontalLight /> Colunas
          </Button>
        </Flex>

        <Divider mt={2} />

        <Table variant="simple" bgColor="white" mb={2}>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>CPF</Th>
              <Th>Telefone</Th>
              <Th w="15%">Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td color="black" fontWeight={700}>
                <Flex alignItems="center" gap={2}>
                  <Flex
                    p={2}
                    borderRadius="500px"
                    bg="grey.medium"
                    alignContent="center"
                  >
                    <PiUserLight />
                  </Flex>{" "}
                  Nome
                </Flex>
              </Td>
              <Td color="black" fontWeight={700}>
                email@email.com
              </Td>
              <Td color="black" fontWeight={700}>
                133.666.166-77
              </Td>
              <Td color="black" fontWeight={700}>
                (81) 9 9595-0404
              </Td>
              <Td w="15%" textAlign="right">
                <Flex gap={3} fontWeight={700} fontSize="20px">
                  <PiPencilSimpleLight />
                  <PiShieldSlashLight />
                  <PiPasswordLight />
                  <PiClockCounterClockwiseLight />
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}
