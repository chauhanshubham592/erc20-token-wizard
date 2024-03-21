import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { getNativeTokenBalance } from "../services";
import { useApp } from ".";
import { NATIVE_TOKEN_DETAILS } from "../utils";

interface TokenBalanceResponse {
  tokenBalance: string;
  tokenSymbol: string;
  isFetchingTokenBalance: boolean;
  handleFetchTokenBalance: () => Promise<void>;
}

interface TokenBalanceParams {
  address: string;
  hideErrorSnackbar?: boolean;
  disableOnChangeUpdate?: boolean;
}

export const useGetTokenBalance = ({
  address,
  hideErrorSnackbar,
  disableOnChangeUpdate,
}: TokenBalanceParams): TokenBalanceResponse => {
  const [tokenBalance, setTokenBalance] = useState("0");
  const [isFetchingTokenBalance, setIsFetchingTokenBalance] = useState(false);
  const [tokenSymbol, setTokenSymbol] = useState("");

  const { enqueueSnackbar } = useSnackbar();
  const { provider, chainId } = useApp();

  const handleFetchTokenBalance = async () => {
    if (address) {
      setIsFetchingTokenBalance(true);
      const { success, error, balance } = await getNativeTokenBalance({
        provider,
        address,
      });

      if (success) {
        setTokenBalance(balance || "0");
        setTokenSymbol(NATIVE_TOKEN_DETAILS?.[chainId]?.label || "");
      } else {
        if (!hideErrorSnackbar) enqueueSnackbar(error, { variant: "error" });
        setTokenBalance("0");
      }
      setIsFetchingTokenBalance(false);
    }
  };

  useEffect(() => {
    if (!disableOnChangeUpdate && address) handleFetchTokenBalance();
  }, [address, disableOnChangeUpdate, chainId]);

  return {
    tokenBalance,
    tokenSymbol,
    isFetchingTokenBalance,
    handleFetchTokenBalance,
  };
};
