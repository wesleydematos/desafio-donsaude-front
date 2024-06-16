import { Box, Container, Image, Text, Heading, Button } from "@chakra-ui/react";
import HomeImg from "../../assets/images/home-img.png";

export default function NotFound() {
  return (
    <Box h="100vh" w="100%" bg="gray.200" color="gray.900">
      <Box display="grid" h="100vh" pt="32" pb="16">
        <Container
          display="grid"
          alignItems="center"
          gap="12"
          maxW="5xl"
          gridTemplateColumns={{ lg: "1fr 1fr" }}
        >
          <Box textAlign={{ base: "center", lg: "left" }} justifySelf="center">
            <Text pb="2" fontWeight="semibold">
              Error 404
            </Text>
            <Heading
              pb="4"
              fontSize={{ base: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color="primary.base"
            >
              Olá, amigo(a)!
            </Heading>
            <Text pb="8" fontWeight="semibold">
              Não conseguimos encontrar a página <br />
              que você está procurando.
            </Text>
            <Button
              as="a"
              href="/colaborators"
              bg="gray.900"
              color="white"
              py="4"
              px="8"
              rounded="full"
              fontWeight="bold"
              _hover={{ bg: "gray.700" }}
            >
              Voltar ao início
            </Button>
          </Box>

          <Box justifySelf="center">
            <Image
              src={HomeImg}
              w={{ base: "64", lg: "400px" }}
              className="animate-floting"
              alt="home image"
            />
            <Box
              mx="auto"
              h="8"
              w={{ base: "36", lg: "64" }}
              className="animate-shadow"
              rounded="full"
              bg="gray.900"
              opacity="0.3"
              filter="blur(20px)"
            ></Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
