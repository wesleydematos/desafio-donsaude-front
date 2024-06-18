import { useEffect } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Link,
  Text,
} from "@chakra-ui/react";
import { PiCaretLeftLight } from "react-icons/pi";
import { CustomButton, CustomInput, FormBackground } from "../../../components";
import { useParams } from "react-router-dom";
import { useColaborator } from "../../../contexts/ColaboratorsContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editColaboratorSchema } from "../../../schemas/colaboratorSchema";
import { IEditColaborator } from "../../../contexts/ColaboratorsContext/interface";
import { removeEmptyValues } from "../../../utils/removeEmptyValues";

export default function EditColaborator() {
  const { findColaboratorById, updateColaborator, colaborator } =
    useColaborator();
  const { uuid } = useParams();

  useEffect(() => {
    if (uuid) findColaboratorById(uuid);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(editColaboratorSchema),
  });

  const editColaborator: SubmitHandler<IEditColaborator> = async (values) => {
    const objToUpdate = removeEmptyValues(values);
    if (uuid) await updateColaborator(uuid, { ...objToUpdate });
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
        <Text lineHeight="30px">Editar colaborador</Text>
      </Flex>

      <FormBackground w="full" onSubmit={handleSubmit(editColaborator)}>
        <Flex w="full" gap={5}>
          <FormControl>
            <FormLabel fontWeight={700} color="grey.bold">
              Nome
            </FormLabel>
            <CustomInput
              placeholder="Digite o nome completo"
              defaultValue={colaborator?.name || ""}
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
              defaultValue={colaborator?.documentNumber || ""}
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
            <CustomInput
              placeholder="DDD + número"
              defaultValue={colaborator?.phone || ""}
              {...register("phone")}
            />
            {errors.phone && (
              <Text color="primary.base">{errors.phone.message}</Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel fontWeight={700} color="grey.bold">
              E-mail
            </FormLabel>
            <CustomInput
              placeholder="Digite aqui"
              defaultValue={colaborator?.email || ""}
              {...register("email")}
            />
            {errors.email && (
              <Text color="primary.base">{errors.email.message}</Text>
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
