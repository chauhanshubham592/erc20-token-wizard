import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import { ReactNode } from "react";
import { Footer, NavBar } from "..";

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <NavBar />
      <Container maxWidth="xl" sx={{ flexGrow: 1, height: "100%" }}>
        {children}
      </Container>
      <Footer />
    </Stack>
  );
};
