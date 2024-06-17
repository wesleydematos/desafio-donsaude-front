import { useNavigate } from "react-router-dom";
import { Box, Divider, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ISideItem } from "../../components/SideBar/interfaces";
import { navItems } from "../../components/SideBar/utils";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from "../../assets/images/logo-g.png";
import frame from "../../assets/images/frame.png";

export default function SideBar() {
  const navigate = useNavigate();
  const [selectedPage, setselectedPage] = useState("");
  const [actualPage, setActualPage] = useState("");

  function handlePage(item: ISideItem) {
    if (item.subItens.length > 0) {
      item.name === selectedPage
        ? setselectedPage("")
        : setselectedPage(item.name);
    }
  }

  useEffect(() => {
    function setSelectedPage() {
      const pathName = window.location.pathname.split("/")[1];
      let foundSubItem: string | null = null;

      navItems.forEach((item) => {
        if (foundSubItem) return;
        item.subItens.forEach((subItem) => {
          if (subItem.path === `/${pathName}`) {
            foundSubItem = subItem.name;
          }
        });
      });

      if (foundSubItem) {
        setActualPage(foundSubItem);
      }
    }

    setSelectedPage();
  }, []);

  return (
    <Box
      display={{ base: "none", xl: "flex" }}
      as="aside"
      h="full"
      w="220px"
      color="grey.base"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Flex w="220px" pl={5} mt={5}>
            <Image src={logo} alt="Logo" w="123px" h="36px" />
          </Flex>

          <Box mt={10}>
            {navItems.map((item) => {
              return (
                <Flex flexDirection="column" key={item.name} mb={1}>
                  <Box w="220px" mx={5}>
                    <Link
                      mb={3}
                      gap={2}
                      display="flex"
                      alignItems="center"
                      borderRadius="16px"
                      _hover={{ color: "primary.hover" }}
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
                    <Box display="flex" flexDir="column">
                      <Divider w="180px" ml={3} mb={1} />
                      {item.subItens.map((subItem) => {
                        return (
                          <Link
                            key={subItem.name}
                            w="200px"
                            mb={3}
                            ml={2}
                            py={subItem.name === actualPage ? 2 : 0}
                            mr={5}
                            gap={2}
                            color={
                              subItem.name === actualPage
                                ? "white"
                                : "grey.base"
                            }
                            bg={
                              subItem.name === actualPage ? "primary.base" : ""
                            }
                            display={`${
                              selectedPage === item.name ? "flex" : "none"
                            }`}
                            alignItems="center"
                            justifyContent="space-between"
                            borderRadius="16px"
                            _hover={{
                              color: `${
                                subItem.name === actualPage
                                  ? ""
                                  : "primary.hover"
                              }`,
                              bg: `${
                                subItem.name === actualPage
                                  ? "primary.hover"
                                  : ""
                              }`,
                            }}
                            onClick={() => {
                              if (subItem.path) navigate(subItem.path);
                            }}
                          >
                            <Box display="flex" mx={5} gap={2}>
                              <Text w="full" fontSize={15}>
                                {subItem.name}
                              </Text>
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
        </Box>

        <Flex w="200px" alignSelf="self-start" ml={3} mb={3} h="34px">
          <Flex
            w="full"
            bg="background"
            alignItems="center"
            borderRadius="16px"
            gap={2}
            py={2}
            px={1}
          >
            <Image src={frame} alt="frame" w="26px" h="26px" />
            <Box>
              <Text fontSize="10px" color="grey.bold" fontWeight={700}>
                Ibiporã
              </Text>
              <Text fontSize="10px" color="grey.bold">
                Gustavo Borges
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
