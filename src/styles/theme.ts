import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    black: "#101828",
    grey: {
      base: "#667085",
      medium: "#EAECF0",
      bold: "#475467",
    },
    background: "#F2F4F7",
    white: "#FFFFFF",
    primary: {
      base: "#D0005E",
      light: "#FFF0F7",
      hover: "#EC5482",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  styles: {},
  components: {},
});
