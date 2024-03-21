import { ThemeOptions } from "@mui/material/styles";

interface CustomThemePalettes {
  light: ThemeOptions;
  dark: ThemeOptions;
}

export const themePalettes: CustomThemePalettes = {
  light: {
    palette: {
      primary: {
        main: "#31C1BF",
      },
      text: {
        primary: "#000",
        secondary: "#1B2022",
        disabled: "#ABB7BD",
      },
      background: {
        paper: "#F4F6F8",
      },
    },
  },
  dark: {
    palette: {
      primary: {
        main: "#31C1BF",
      },
      text: {
        primary: "#000",
        // secondary: string;
        // disabled: string;
      },
    },
  },
};
