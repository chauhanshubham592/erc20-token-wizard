import React, { createContext, useState, ReactNode, useEffect } from "react";
import { useAccount, useChainId } from "wagmi";

interface ThemeContextType {
  isConnected: boolean;
  isConnecting: boolean;
  isDisconnected: boolean;
  account: string;
  chainId: number;
  provider: any;
}

export const AppContext = createContext<ThemeContextType>({
  isConnected: false,
  isConnecting: false,
  isDisconnected: false,
  account: "",
  chainId: 42161,
  provider: null,
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [walletProvider, setWalletProvider] = useState<any>(null);

  const account = useAccount();
  const chainId = useChainId();

  const handleGetProvider = async () => {
    if (account?.connector?.getProvider) {
      const provider = await account?.connector?.getProvider();
      setWalletProvider(provider);
    }
  };
  useEffect(() => {
    handleGetProvider();
  }, [account, chainId]);

  return (
    <AppContext.Provider
      value={{
        isConnected: account?.isConnected,
        isConnecting: account?.isConnecting,
        isDisconnected: account?.isDisconnected,
        account: account?.address?.toLowerCase() || "",
        provider: walletProvider,
        chainId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
