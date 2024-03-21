import Box from "@mui/material/Box";
import { themeButtonLogo } from "../../../assets";
import Stack from "@mui/material/Stack";

export const ThemeButton = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#E9EAF0",
        height: 32,
        width: 32,
        borderRadius: "100%",
        boxShadow: "2px 2px 7px 0px #00000047",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "none",
        },
      }}
    >
      <Box component="img" src={themeButtonLogo} alt="theme" />
    </Stack>
  );
};
