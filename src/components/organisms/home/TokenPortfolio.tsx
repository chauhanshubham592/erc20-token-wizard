import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import {
  CustomTextField,
  PrimaryButton,
  PrimaryCard,
  PrimaryTitle,
} from "../../atom";
import { useValidations } from "../../../hooks/useValidations";
import { useGetTokenBalance } from "../../../hooks/useGetTokenBalance";
import { useApp } from "../../../hooks";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { formatTokenAmount } from "../../../utils";

export const TokenPortfolio: React.FC = () => {
  const [ethereumAddress, setEthereumAddress] = useState("");
  const [shouldShowBalanceCard, setShouldShowBalanceCard] = useState(false);

  const { isConnected } = useApp();
  const { openConnectModal } = useConnectModal();
  const { validation, isValidAddress } = useValidations({
    address: ethereumAddress,
    disableValidationOnChange: true,
  });
  const {
    tokenBalance,
    tokenSymbol,
    isFetchingTokenBalance,
    handleFetchTokenBalance,
  } = useGetTokenBalance({
    address: ethereumAddress,
    disableOnChangeUpdate: true,
  });

  const handleOnChangeAddress = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setShouldShowBalanceCard(false);
    setEthereumAddress(e?.target?.value?.trim());
  };

  const handleOnSubmit = async () => {
    const isValid = isValidAddress();

    if (isValid) {
      await handleFetchTokenBalance();
    }
    setShouldShowBalanceCard(true);
  };

  return (
    <Stack justifyContent={"center"} alignItems="center" gap={1.5}>
      <PrimaryTitle text="ERC20 Token Balance" />
      <PrimaryCard>
        <Stack gap={1}>
          <CustomTextField
            label="Ethereum Address"
            value={ethereumAddress}
            onChange={handleOnChangeAddress}
          />
          {isConnected ? (
            <PrimaryButton
              onClick={handleOnSubmit}
              sx={{ maxWidth: 100, mt: 1 }}
              isLoading={isFetchingTokenBalance}
            >
              Submit
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

      {shouldShowBalanceCard && (
        <PrimaryCard sx={{ padding: 0 }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ height: 45 }}
          >
            <Typography sx={{ textAlign: "center" }}>
              {validation.address.message || "  "}
            </Typography>
          </Stack>
          {validation.address.isValid && (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                textAlign: "center",
                height: 45,
                background: "#fff",
                px: 4,
              }}
            >
              <Typography>Token Balance</Typography>
              <Typography sx={{ fontWeight: 700 }}>
                {formatTokenAmount({ amount: tokenBalance })} {tokenSymbol}
              </Typography>
            </Stack>
          )}
        </PrimaryCard>
      )}
    </Stack>
  );
};
