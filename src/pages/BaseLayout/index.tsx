import { Box, Flex } from "@chakra-ui/react";
import { SideBar } from "../../components";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <Box height="100vh">
      <Flex height="100%">
        <SideBar />
        <Flex direction="column" flex="1" overflow="hidden">
          <Box as="header" height="88px">
            Header
          </Box>
          <Box flex="1" overflow="auto">
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
