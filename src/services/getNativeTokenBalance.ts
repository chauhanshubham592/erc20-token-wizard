import Web3 from "web3";

interface Payload {
  provider: any;
  address: string;
}

interface Response {
  success: boolean;
  error?: string;
  balance?: string;
}

export const getNativeTokenBalance = async ({
  provider,
  address,
}: Payload): Promise<Response> => {
  try {
    const response: Response = { success: false, error: "" };
    const web3 = new Web3(provider || window.ethereum);
    const balanceWei = await web3.eth.getBalance(
      web3.utils.toChecksumAddress(address)
    );

    response.success = true;
    response.balance = web3.utils.fromWei(balanceWei, "ether");

    return response;
  } catch (error: any) {
    console.error("Error fetching native token balance:", error);
    return { success: false, error: error?.message || "Something went wrong" };
  }
};
