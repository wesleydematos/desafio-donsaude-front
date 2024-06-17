import { forwardRef, useRef } from "react";
import { Input, InputProps, useMergeRefs } from "@chakra-ui/react";

const CustomInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const mergeRef = useMergeRefs(inputRef, ref);

  return (
    <Input
      py={2}
      border="1px solid #D0D5DD"
      boxShadow="0px 1px 2px 0px #1018280A"
      borderRadius="12px"
      ref={mergeRef}
      {...props}
    />
  );
});

export default CustomInput;
