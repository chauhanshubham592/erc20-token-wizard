import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import React, { useState } from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useSnackbar } from "notistack";
import {
  CustomTextField,
  PrimaryButton,
  PrimaryCard,
  PrimaryTitle,
} from "../../atom";
import { useApp, useTransferToken, useValidations } from "../../../hooks";
import { useGetTokenBalance } from "../../../hooks/useGetTokenBalance";
import { formatTokenAmount } from "../../../utils";

export const TokenTransferInterface: React.FC = () => {
  const [recipientAddress, setRecipientAddress] = useState<string>("");
  const [amountToSend, setAmountToSend] = useState("");

  const { account, isConnected } = useApp();
  const { openConnectModal } = useConnectModal();
  const { enqueueSnackbar } = useSnackbar();

  const { tokenBalance, tokenSymbol, isFetchingTokenBalance } =
    useGetTokenBalance({
      address: account,
      hideErrorSnackbar: true,
    });
  const { validation } = useValidations({
    address: recipientAddress,
    amount: amountToSend,
    maxAmount: Number(tokenBalance || 0),
  });
  const { isLoading, handleTransferToken } = useTransferToken({
    recipientAddress: recipientAddress || "",
    amountToSend,
  });

  const handleOnChangeAddress = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRecipientAddress(e?.target?.value?.trim());
  };

  const handleOnChangeAmount = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAmountToSend(e?.target?.value);
  };

  const handleOnSubmit = async () => {
    if (account?.toLowerCase() === recipientAddress?.toLowerCase()) {
      enqueueSnackbar(
        "Sorry, you cannot send funds to your own wallet address.",
        {
          variant: "info",
        }
      );
      return;
    }
    const isSuccess = await handleTransferToken();

    if (isSuccess) {
      setRecipientAddress("");
      setAmountToSend("");
    }
  };

  return (
    <Stack justifyContent={"center"} alignItems="center" gap={1.5}>
      <PrimaryTitle text="Transfer ERC20 Tokens" />

      <PrimaryCard>
        <Stack gap={2}>
          <CustomTextField
            label="Recipient's Ethereum Address"
            placeholder="Enter Ethereum Address"
            value={recipientAddress}
            onChange={handleOnChangeAddress}
            isError={!validation?.address?.isValid}
            errorMsg={recipientAddress ? validation?.address?.message : ""}
          />
          <Stack sx={{ position: "relative" }}>
            <CustomTextField
              type="number"
              label="Token Amount"
              placeholder="Enter token amount"
              value={amountToSend}
              onChange={handleOnChangeAmount}
              isError={!validation?.amount?.isValid}
              errorMsg={validation?.amount?.message}
            />

            <Typography
              sx={{
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                gap: 1,
                position: "absolute",
                bottom: -20,
                right: 8,
              }}
            >
              Available Balance:{" "}
              {isFetchingTokenBalance ? (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  sx={{ width: 100, height: 20, borderRadius: 1 }}
                />
              ) : (
                <span>
                  {formatTokenAmount({ amount: tokenBalance })} {tokenSymbol}
                </span>
              )}
            </Typography>
          </Stack>
          {isConnected ? (
            <PrimaryButton
              onClick={handleOnSubmit}
              sx={{ maxWidth: 100, mt: 1 }}
              disabled={
                !validation.address.isValid ||
                !validation.amount.isValid ||
                isLoading
              }
              isLoading={isLoading}
            >
              Transfer
            </PrimaryButton>
          ) : (
            <PrimaryButton
              onClick={openConnectModal}
              sx={{ maxWidth: 150, mt: 1 }}
            >
              Connect Wallet
            </PrimaryButton>
          )}
        </Stack>
      </PrimaryCard>
    </Stack>
  );
};
