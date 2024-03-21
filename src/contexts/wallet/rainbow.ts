import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, goerli, sepolia, bscTestnet } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, sepolia, goerli, bscTestnet],
  ssr: false,
});
