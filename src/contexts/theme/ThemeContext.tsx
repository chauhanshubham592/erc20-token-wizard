import React, { createContext, useState, ReactNode } from "react";
import { THEME_LOCAL_STORAGE_KEY } from "../../utils";
import {
  ThemeProvider as MUIThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import { themePalettes } from "./palette";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const lightTheme = createTheme(themePalettes.light);
const darkTheme = createTheme(themePalettes.dark);

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {
    return;
  },
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const isDarkUserSetting = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false;
  });

  const toggleTheme = () => {
    setIsDarkMode((prevState) => {
      localStorage.setItem(THEME_LOCAL_STORAGE_KEY, JSON.stringify(!prevState));
      return !prevState;
    });
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <CssBaseline />
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
