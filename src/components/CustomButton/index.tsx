import { FC, ReactNode } from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  action: () => void;
  children: ReactNode;
  isLoading: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  action,
  children,
  isLoading,
  ...props
}) => {
  return (
    <ChakraButton
      bg="primary.base"
      color="white"
      _hover={{
        bg: "primary.hover",
      }}
      p={4}
      onClick={action}
      isLoading={isLoading}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default CustomButton;
