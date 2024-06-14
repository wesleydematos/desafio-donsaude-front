import React from "react";
import { Input, InputProps } from "@chakra-ui/react";

interface CustomInputProps extends InputProps {}

const CustomInput: React.FC<CustomInputProps> = ({ ...props }) => {
  return (
    <Input
      py={2}
      border="1px solid #D0D5DD"
      boxShadow="0px 1px 2px 0px #1018280A"
      borderRadius="12px"
      {...props}
    />
  );
};

export default CustomInput;
