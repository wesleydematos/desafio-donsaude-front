import { Flex, Spinner, Text } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex justifyContent="center" alignItems="center" gap={2}>
      <Spinner />
      <Text>Carregando...</Text>
    </Flex>
  );
}
