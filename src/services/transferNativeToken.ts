import Web3 from "web3";

interface Payload {
  provider: any;
  fromAddress: string;
  toAddress: string;
  amountInToken: string;
}

interface Response {
  success: boolean;
  error?: "";
}

export const transferNativeToken = async ({
  provider,
  fromAddress,
  toAddress,
  amountInToken,
}: Payload): Promise<Response> => {
  try {
    const response: Response = { success: false, error: "" };
    const web3 = new Web3(provider || window.ethereum);

    const amountToSendInWei = web3.utils.toWei(amountInToken, "ether");
    const gasEstimate = await web3.eth.estimateGas({
      from: fromAddress,
      to: toAddress,
      value: amountToSendInWei,
    });
    const transaction = await web3.eth.sendTransaction({
      from: web3.utils.toChecksumAddress(fromAddress),
      to: web3.utils.toChecksumAddress(toAddress),
      value: amountToSendInWei,
      gas: gasEstimate,
    });

    console.log(transaction, transaction.status);

    if (Number(transaction.status) === 1) {
      response.success = true;
    }

    return response;
  } catch (error: any) {
    console.error("Error sending transaction:", error);
    return { success: false, error: error?.message || "Something went wrong" };
  }
};
