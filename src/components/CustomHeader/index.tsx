import {
  Box,
  Divider,
  Flex,
  Icon,
  InputGroup,
  InputLeftElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ISideItem } from "../SideBar/interfaces";
import { navItems } from "../SideBar/utils";
import {
  PiBellSimple,
  PiMagnifyingGlass,
  PiPlusCircle,
  PiStar,
  PiUser,
} from "react-icons/pi";
import CustomInput from "../CustomInput";

export default function CustomHeader() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPage, setselectedPage] = useState("");

  function handlePage(item: ISideItem) {
    if (item.subItens.length > 0) {
      item.name === selectedPage
        ? setselectedPage("")
        : setselectedPage(item.name);
    }
  }

  return (
    <Flex
      as="header"
      position="fixed"
      flexDirection="column"
      w="full"
      h="88px"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="white"
      mx="30px"
      color="grey.base"
      zIndex={100}
    >
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        w="full"
        h="full"
        alignItems="center"
        fontSize="14px"
        fontWeight={700}
        px={{ base: 10, xl: 0 }}
      >
        <Flex
          gap={3}
          w="calc(100vw - 280px)"
          justifyContent={{ base: "center", xl: "space-between" }}
        >
          <Flex gap={3}>
            <Flex
              justifyContent="center"
              alignItems="center"
              bg="primary.light"
              color="primary.base"
              borderRadius="500px"
              fontSize="20px"
              p={2}
              px={{ base: 2, xl: 3 }}
              gap={1}
            >
              <PiPlusCircle />
              <Text display={{ base: "none", xl: "block" }} fontSize="14px">
                Novo orçamento/atendimento
              </Text>
            </Flex>

            <Flex
              justifyContent="center"
              alignItems="center"
              fontSize="20px"
              display={{ base: "flex", xl: "none" }}
            >
              <PiMagnifyingGlass />
            </Flex>

            <InputGroup display={{ base: "none", xl: "flex" }} w="300px">
              <InputLeftElement
                pointerEvents="none"
                children={<PiMagnifyingGlass size="20px" />}
              />
              <CustomInput
                px="2.5rem"
                placeholder="Buscar"
                borderRadius="16px"
              />
            </InputGroup>
          </Flex>

          <Flex gap={3}>
            <Flex justifyContent="center" alignItems="center" fontSize="20px">
              <PiStar />
            </Flex>

            <Flex justifyContent="center" alignItems="center" fontSize="20px">
              <PiBellSimple />
            </Flex>

            <Divider orientation="vertical" />

            <Flex
              justifyContent="center"
              alignItems="center"
              bg="primary.light"
              color="primary.base"
              borderRadius="500px"
              fontSize="20px"
              p={2}
              px={{ base: 2, xl: 3 }}
            >
              <PiUser />
            </Flex>
          </Flex>
        </Flex>
        <Box display={{ base: "flex", xl: "none" }}>
          <RxHamburgerMenu cursor="pointer" onClick={onOpen} />
        </Box>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w="90vw">
            <ModalCloseButton />
            <ModalBody pb={6} mt={8}>
              <Box>
                {navItems.map((item) => {
                  return (
                    <Flex flexDirection="column" key={item.name}>
                      <Box>
                        <Link
                          mb={3}
                          gap={2}
                          color="#585a63"
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          borderRadius="10%"
                          _hover={{ color: "#F7453C" }}
                          onClick={() => handlePage(item)}
                        >
                          <Box display="flex" gap={2}>
                            <Icon as={item.icon} fontSize={23} />
                            <Text fontSize={15}>{item.name}</Text>
                          </Box>
                          {item.subItens.length > 0 && (
                            <Box>
                              {item.name === selectedPage ? (
                                <IoIosArrowUp />
                              ) : (
                                <IoIosArrowDown />
                              )}
                            </Box>
                          )}
                        </Link>
                      </Box>
                      {item.subItens.length > 0 && (
                        <Box ml={5}>
                          {item.subItens.map((subItem) => {
                            return (
                              <Link
                                key={subItem.name}
                                mb={3}
                                gap={2}
                                color="#585a63"
                                display={`${
                                  selectedPage === item.name ? "flex" : "none"
                                }`}
                                alignItems="center"
                                justifyContent="space-between"
                                borderRadius="10%"
                                _hover={{ color: "#F7453C" }}
                                onClick={() => navigate(subItem.path)}
                              >
                                <Box display="flex" gap={2}>
                                  <Text fontSize={15}>{subItem.name}</Text>
                                </Box>
                              </Link>
                            );
                          })}
                        </Box>
                      )}
                    </Flex>
                  );
                })}
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
}
