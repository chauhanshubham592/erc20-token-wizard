import { TOKEN_PRICE_PRECISION } from ".";

interface TokenAmountPayload {
  amount: number | string;
}

export const formatTokenAmount = ({ amount }: TokenAmountPayload): String => {
  const amountInNumber = Number(amount);
  if (isNaN(amountInNumber) || amountInNumber === 0) return "0";

  return amountInNumber?.toFixed(TOKEN_PRICE_PRECISION);
};
