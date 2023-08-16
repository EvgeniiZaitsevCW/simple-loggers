import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";
import { Logger } from "../utils/logger";

// Script input parameters
const contractName: string = process.env.SP_CONTRACT_NAME ?? "SimpleLogger";

// Script constants
const logSingleLevelIndent = "  ";
const logger: Logger = new Logger(logSingleLevelIndent);

async function main() {
  logger.log(`🏁 Deploying contract '${contractName}'...`);
  const [deployer] = await ethers.getSigners();
  logger.increaseLogIndent();
  logger.log("👉 The deployer (owner) address:", deployer.address);

  logger.log(`🏁 Deploying contract '${contractName}'...`);
  const contractFactory: ContractFactory = await ethers.getContractFactory(contractName);
  const contract: Contract = await contractFactory.deploy();
  await contract.deployed();
  logger.log(
    `✅ The contract has been deployed successfully. ` +
    `The proxy address: ${contract.address} . The tx hash: ${contract.deployTransaction.hash}`
  );
  logger.logEmptyLine();

  logger.decreaseLogIndent();
  logger.log("🎉 Everything is done");
}

main().then().catch(err => {
  throw err;
});