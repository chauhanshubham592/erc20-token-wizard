import { isAddress } from "web3-validator";
import Web3 from "web3";

export function isValidEthereumAddress(address: string): boolean {
  try {
    const web3 = new Web3();
    return isAddress(web3.utils.toChecksumAddress(address));
  } catch {
    return false;
  }
}
