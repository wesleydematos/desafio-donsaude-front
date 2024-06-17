import { FC, ReactNode } from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <ChakraButton
      bg="primary.base"
      color="white"
      _hover={{
        bg: "primary.hover",
      }}
      p={4}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default CustomButton;
