"use client";

import { BrowserProvider } from "ethers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getContract } from "../config";
import ConnectWalletButton from '../app/connect';
import MintCoinsForm from '../app/mint'; 
import StakeCoinsForm from '../app/stake';
import WithdrawCoinsButton from '../app/withdraw'; 
import mint from '../app/mint';
import stake from '../app/stake';
import withdraw from '../app/withdraw';


export default function Home() {
  const [walletKey, setwalletKey] = useState("");
  const [currentData, setcurrentData] = useState("");
  const [connected, setConnected] = useState(false);
  const [mintingAmount, setMintingAmount] = useState(""); 
  const [stakingAmount, setStakingAmount] = useState("");
  

  const connectWallet = async () => {
    try {
      // Connect wallet logic
      setConnected(true);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setConnected(false);
    }
  };

  const importToken = async () => {
    const { ethereum } = window as any;
    const tokenAddress = "0x28804f0C2C46B6aBd626CDE32bd2c75cB118b30a";
    const tokenSymbol = "sh";
    const tokenDecimal = 18;

    console.log("Attempting to import token...");

    try {
      const wasAdded = await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimal,
          },
        },
      });

      console.log("Token import status:", wasAdded);
    } catch (error) {
      console.error("Error importing token:", error);
    }

    // You might want to connect the wallet after importing the token.
    connectWallet();
  };

  useEffect(() => {
    // Call the function to import token when the component mounts
    importToken();
  }, []);

  const mintCoin = async () => {
    // Your mintCoin logic here
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMintingAmount(event.target.value); // Update mintingAmount state with input value
  };
  

  const stakeCoin = async () => {
    // Your staking logic here
  };

  // Define the stakeAmountChange function
  const stakeAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStakingAmount(event.target.value); // Update stakingAmount state with input value
  };

  interface StakeCoinsFormProps {
    stakingAmount: string;
    setStakingAmount: React.Dispatch<React.SetStateAction<string>>;
    onStakeAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onStakeCoinClick: () => void;
  }
  
  const StakeCoinsForm: React.FC<StakeCoinsFormProps> = ({
    stakingAmount,
    setStakingAmount,
    onStakeAmountChange,
    onStakeCoinClick,
  }) => {

    
  const handleStakingAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStakingAmount(event.target.value);
  };

  const stakeCoin = () => {
    
  };

  const withdrawCoin = async () => { 
  };
  
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{backgroundImage: "url('/bg.jpg')"}}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <span className="flex items-center">
            Caryll Franz M. Carino&nbsp;
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-games-dating-app-flaticons-lineal-color-flat-icons.png"
              alt="external-games-dating-app-flaticons-lineal-color-flat-icons"
            />
          </span>
        </p>
  
        <div className="fixed bottom-0 left-0 w-full flex justify-center">
        
          <button onClick={connectWallet}>
            {connected ? "Wallet is connected!" : "Connect your wallet"}
          </button>
  
          
          <button
            onClick={importToken}
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-Poppins"
            style={{ marginBottom: '700px' }}
          >
            Import Token
          </button>
  
          {/* Minting Section */}
          <div className="fixed bottom-22 left-0 w-full flex flex-col items-center" style={{ marginTop: '100px' }}>
            <div style={{ marginRight: '50px', marginBottom: '50px' }}>
              <form>
                <label style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Input Amount To Mint</label><br/>
              </form>
              <input
                type="number"
                value={mintingAmount}
                onChange={handleAmountChange}
                style={{ color: "black" }} 
              />
              <button
                onClick={mintCoin}
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                style={{ marginLeft: '10px' }}
              >
                Mint your tokens
              </button>
            </div>
            <MintCoinsForm mintingAmount={mintingAmount} setMintingAmount={setMintingAmount} />
          </div>
  
      
          <div className="fixed bottom-22 left-0 w-full flex flex-col items-center" style={{ marginTop: '100px' }}>
            <div style={{ marginRight: '110px', marginBottom: '20px' }}>
              <form>
                <label style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Input Amount To Stake</label><br/>
              </form>
              <input
                type="number"
                value={stakingAmount}
                onChange={stakeAmountChange}
                style={{ color: "black" }}
              />
              <button
                onClick={stakeCoin}
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                style={{ marginLeft: '10px' }}
              >
                Stake It
              </button>
            </div>
            <StakeCoinsForm
              stakingAmount={stakingAmount}
              setStakingAmount={setStakingAmount}
              onStakeAmountChange={stakeAmountChange} 
              onStakeCoinClick={stakeCoin} 
            />
          </div>
  
          <div>
            <button
              onClick={withdrawCoin}
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              style={{ marginLeft: '70px', marginTop: '50px' }}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </main>
  );
  }
}
