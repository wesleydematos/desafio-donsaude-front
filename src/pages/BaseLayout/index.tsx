import { Box, Flex } from "@chakra-ui/react";
import { CustomHeader, SideBar } from "../../components";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <Box height="100vh">
      <Flex height="100%">
        <SideBar />
        <Flex direction="column" flex="1" overflow="hidden">
          <CustomHeader />

          <Box flex="1" overflow="auto" mt="88px">
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
