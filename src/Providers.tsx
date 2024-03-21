import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { AppProvider, RainbowWalletProvider, ThemeProvider } from "./contexts";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
      <RainbowWalletProvider>
        <SnackbarProvider>
          <ThemeProvider>
            <AppProvider>{children}</AppProvider>
          </ThemeProvider>
        </SnackbarProvider>
      </RainbowWalletProvider>
    </BrowserRouter>
  );
};

export default Providers;
