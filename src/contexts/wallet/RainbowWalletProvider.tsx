import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";
import { config } from "./rainbow";
import "@rainbow-me/rainbowkit/styles.css";

export interface Props {
  children: ReactNode;
}
const queryClient = new QueryClient();

export const RainbowWalletProvider: React.FC<Props> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
