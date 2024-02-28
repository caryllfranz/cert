- folder
- npx hardhat init
- touch .env
- edit .env
- npm i dotenv @openzeppelin/contracts
- change contract, deploy, config
- npx hardhat run scripts/deploy.ts --network "arbitrum-sepolia"
- npx hardhat verify --network "arbitrum-sepolia" <target> <wallet - kapag magmmint>

dapp
- npx create-next-app@latest
- npm run dev
- open port
- npm i ethers