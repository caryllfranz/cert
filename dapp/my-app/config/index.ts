import { Contract, ContractRunner } from "ethers";
import abi from "./abi.json";

export function getContract(signer: ContractRunner) {
    return new Contract(
        "0x28804f0C2C46B6aBd626CDE32bd2c75cB118b30a", // deployed contract address
        abi as any,
        signer
    );
}