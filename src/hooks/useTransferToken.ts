import { useSnackbar } from "notistack";
import { useApp } from ".";
import { transferNativeToken } from "../services/transferNativeToken";
import { useState } from "react";

interface TransferTokenResponse {
  isLoading: boolean;
  handleTransferToken: () => Promise<boolean>;
}

interface TransferTokenParams {
  recipientAddress: string;
  amountToSend: string;
}

export const useTransferToken = ({
  recipientAddress,
  amountToSend,
}: TransferTokenParams): TransferTokenResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { account, provider } = useApp();

  const handleTransferToken = async (): Promise<boolean> => {
    setIsLoading(true);
    const { success, error } = await transferNativeToken({
      provider,
      fromAddress: account,
      toAddress: recipientAddress,
      amountInToken: amountToSend,
    });

    if (success) {
      enqueueSnackbar("Token transferred successfully.", {
        variant: "success",
      });
    } else {
      enqueueSnackbar(error, { variant: "error" });
    }

    setIsLoading(false);

    return success;
  };

  return {
    isLoading,
    handleTransferToken,
  };
};
