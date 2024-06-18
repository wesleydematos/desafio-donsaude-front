import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import { AuthProvider } from "./contexts/AuthContext";
import { ColaboratorProvider } from "./contexts/ColaboratorsContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <ColaboratorProvider>{children}</ColaboratorProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
