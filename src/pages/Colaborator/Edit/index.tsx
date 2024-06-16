import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function EditColaborator() {
  const { uuid } = useParams();
  console.log(uuid);

  return <Flex>Edit Colaborator</Flex>;
}
