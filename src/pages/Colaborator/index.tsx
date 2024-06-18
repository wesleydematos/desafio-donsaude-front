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
import { CustomButton, CustomInput, Loading } from "../../components";
import {
  PiCaretDownLight,
  PiCaretLeftLight,
  PiCaretRightLight,
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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useColaborator } from "../../contexts/ColaboratorsContext";
import { IQueryParams } from "../../infrastructure/service/colaboratorHTTPService";
import { IColaborator } from "../../contexts/ColaboratorsContext/interface";
import { formatCPF } from "../../utils/formatCpf";
import { formatPhoneNumber } from "../../utils/formatPhone";

export default function Colaborators() {
  const { getAllColaborators, allColaborators, loading } = useColaborator();
  const [colaboratorAccessType, setColaboratorAccessType] = useState("allowed");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [params, setParams] = useState({
    isAllowed: true,
    page: page,
    limit: 10,
  } as IQueryParams);
  const navigate = useNavigate();

  const getAll = async (params: IQueryParams) => {
    const response = await getAllColaborators(params);
    const totalItems = response!.count;
    const totalPages = Math.ceil(totalItems / params.limit!);
    setTotalPages(totalPages);
  };

  useEffect(() => {
    getAll(params);
  }, [params]);

  useEffect(() => {
    setParams((prevParams) => ({
      ...prevParams,
      page: page,
    }));
  }, [page]);

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

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

      <Flex
        bg="white"
        borderRadius="500px"
        justifyContent="space-between"
        w="full"
        p={1}
        h="fit-content"
      >
        <Button
          onClick={() => {
            setColaboratorAccessType("allowed");
            setParams({ ...params, isAllowed: true });
          }}
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
            4
          </Box>
        </Button>
        <Button
          onClick={() => {
            setColaboratorAccessType("not-allowed");
            setParams({ ...params, isAllowed: false });
          }}
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
            4
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

        {loading ? (
          <Loading />
        ) : (
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
            {allColaborators.data?.length > 0 ? (
              allColaborators.data.map((colaborator: IColaborator) => (
                <Tbody key={colaborator.id}>
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
                        {colaborator.name}
                      </Flex>
                    </Td>
                    <Td color="black" fontWeight={700}>
                      {colaborator.email}
                    </Td>
                    <Td color="black" fontWeight={700}>
                      {formatCPF(colaborator.documentNumber)}
                    </Td>
                    <Td color="black" fontWeight={700}>
                      {formatPhoneNumber(colaborator.phone)}
                    </Td>
                    <Td w="15%" textAlign="right">
                      <Flex gap={3} fontWeight={700} fontSize="20px">
                        <PiPencilSimpleLight
                          onClick={() =>
                            navigate(`/colaborators/edit/${colaborator.id}`)
                          }
                          style={{ cursor: "pointer" }}
                        />
                        <PiShieldSlashLight style={{ cursor: "pointer" }} />
                        <PiPasswordLight style={{ cursor: "pointer" }} />
                        <PiClockCounterClockwiseLight
                          style={{ cursor: "pointer" }}
                        />
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              ))
            ) : (
              <></>
            )}
          </Table>
        )}

        {allColaborators.data?.length > 0 && (
          <Flex
            px={7}
            py={3}
            w="full"
            justifyContent="space-between"
            color="grey.base"
          >
            <Text display="flex" gap={1}>
              Mostrando{" "}
              <Text
                display="flex"
                alignItems="center"
                w="fit-content"
                as="span"
                borderRadius="500px"
                bg="grey.medium"
                color="black"
                px={2}
                gap={1}
              >
                {allColaborators.data?.length || 0}
                <PiCaretDownLight size="10px" />
              </Text>
              de
              <Text as="span" color="black">
                {allColaborators.count || 0}
              </Text>
              resultados
            </Text>

            <Flex alignItems="center" gap={2} fontWeight={700} color="black">
              <PiCaretLeftLight
                style={{ cursor: page > 1 ? "pointer" : "not-allowed" }}
                onClick={() => {
                  page > 1 ? handlePreviousPage() : null;
                }}
              />
              {page}
              <PiCaretRightLight
                style={{
                  cursor: page < totalPages ? "pointer" : "not-allowed",
                }}
                onClick={() => {
                  page < totalPages ? handleNextPage() : null;
                }}
              />
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
