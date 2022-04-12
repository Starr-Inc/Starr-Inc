// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    600: "#4C5163",
    500: "#5B6076",
    400: "#7A8199",
    300: "#A0A5B6",
    200: "#C6C9D3",
    100: "#D9DBE2",
  },
  neutral: {
    900: "",
    800: "",
    700: "",
    600: "#242424",
    500: "#3A3A3A",
    400: "#8B8B8B",
    300: "#BEBEBE",
    200: "#EBEBEB",
    100: "#F9F9F9",
  },
  secondary: {
    100: "#009DFF",
    200: "#24ABFF",
  },
};

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ colors, config });

export default theme;
