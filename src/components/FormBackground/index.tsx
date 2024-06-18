import React, { ReactNode } from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

interface FormBackgroundProps extends FlexProps {
  children: ReactNode;
}

const FormBackground: React.FC<FormBackgroundProps> = ({
  children,
  ...props
}) => {
  return (
    <Flex
      flexDirection="column"
      gap={4}
      px={10}
      py="50px"
      alignItems="center"
      borderRadius="16px"
      boxShadow="lg"
      backgroundColor="white"
      w="full"
      as="form"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default FormBackground;
