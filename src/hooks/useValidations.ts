import { useEffect, useState } from "react";
import { formatTokenAmount, isValidEthereumAddress } from "../utils";

interface ValidationObj {
  isValid: boolean;
  message: string;
}

interface Validation {
  address: ValidationObj;
  amount: ValidationObj;
}

interface ValidationResponse {
  validation: Validation;
  isValidAddress: () => boolean;
}

interface ValidationParams {
  address?: string;
  amount?: number | string;
  maxAmount?: number;
  disableValidationOnChange?: boolean;
}

export const useValidations = ({
  address,
  amount,
  maxAmount,
  disableValidationOnChange,
}: ValidationParams): ValidationResponse => {
  const [validation, setValidation] = useState<Validation>({
    address: {
      isValid: false,
      message: "",
    },
    amount: {
      isValid: false,
      message: "",
    },
  });

  const isValidAmount = (): void => {
    const _validation = { ...validation };
    if (amount === undefined || amount === "") return;

    const amountToSend = Number(amount || 0);

    if (amountToSend === 0) {
      _validation.amount.isValid = false;
      _validation.amount.message = "Invalid amount";
    } else if (maxAmount && amountToSend > maxAmount) {
      _validation.amount.isValid = false;
      _validation.amount.message = `Amount must be less than or equal to ${formatTokenAmount(
        { amount: maxAmount }
      )}`;
    } else if (amountToSend < 0) {
      _validation.amount.isValid = false;
      _validation.amount.message = "Amount must be greater than 0";
    } else {
      _validation.amount.isValid = true;
    }
    setValidation(_validation);
  };

  const isValidAddress = (): boolean => {
    const _validation = { ...validation };

    if (address === "") {
      _validation.address.isValid = false;
      _validation.address.message = "Please enter valid ethereum address";
    } else if (!address || !isValidEthereumAddress(address)) {
      _validation.address.isValid = false;
      _validation.address.message = "Please enter valid ethereum address";
    } else {
      _validation.address.isValid = true;
      _validation.address.message = "";
    }
    setValidation(_validation);
    return !!_validation.address.isValid;
  };

  useEffect(() => {
    if (!disableValidationOnChange) isValidAmount();
  }, [disableValidationOnChange, amount]);

  useEffect(() => {
    if (!disableValidationOnChange) isValidAddress();
  }, [disableValidationOnChange, address]);

  return { validation, isValidAddress };
};
