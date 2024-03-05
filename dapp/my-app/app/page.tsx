"use client";
import { BrowserProvider } from "ethers";
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
  const [connected, setConnected] = useState(false);
  const [mintingAmount, setMintingAmount] = useState(""); 
  const [stakingAmount, setStakingAmount] = useState("");
  

  // Function to handle wallet connection
  const connectWallet = async () => {
    // Your wallet connection logic here
    // Example: Requesting accounts from Metamask
    try {
      const { ethereum } = window as any;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setwalletKey(accounts[0]);
      setConnected(true); // Set connected to true upon successful connection
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setConnected(false); // Set connected to false upon connection failure
    }
  };
  //<Minting>
  const [mintingAmount, setMintingAmount] = useState<number>();
  const [submitted, setSubmitted] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  
  const mintCoin = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const tx = await contract.mint(signer, mintingAmount);
      await tx.wait();
      setSubmitted(true);
      setTransactionHash(tx.hash);
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Minting failed: ${decodedError?.args}`);
    }
  };
  const mintAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!isNaN(Number(inputValue))) {
      setMintingAmount(Number(inputValue));
      console.log(inputValue);
    } else {
      setMintingAmount(0);
    }
  };
  //</Minting>
 //<Staking>
  const [stakingAmount, setStakingAmount] = useState<number>();
  const stakeCoin = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const tx = await contract.stake(stakingAmount);
      await tx.wait();
      setSubmitted(true);
      setTransactionHash(tx.hash);
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Minting failed: ${decodedError?.args}`);
    }
  };
  const stakeAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!isNaN(Number(inputValue))) {
      setStakingAmount(Number(inputValue));
      console.log(inputValue);
    } else {
      setStakingAmount(0);
    }
  };
  //</Staking>
 
  //<Withdraw>
  const withdrawCoin = async () => {
    const { ethereum } = window as any;
    const provider = new BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const contract = getContract(signer);
    try {
      const tx = await contract.withdraw();
      await tx.wait();
      setSubmitted(true);
      setTransactionHash(tx.hash);
    } catch (e: any) {
      const decodedError = contract.interface.parseError(e.data);
      alert(`Minting failed: ${decodedError?.args}`);
    }
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
            onClick={connectWallet}
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-Poppins"
            style={{ marginBottom: '700px' }} // Adjust margin as needed
          >
            {connected ? "Wallet is connected!" : "connect your wallet"}
          </button>

          <div className="fixed bottom-22 left-0 w-full flex flex-col items-center" style={{ marginTop: '100px' }}>

            

  <div style={{ marginRight: '50px', marginBottom: '50px' }}>
  <form>
    <label style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Input Amount To Mint</label><br/>
  </form>
  <input
    type="number"
    value={mintingAmount || ""}
    onChange={(e) => mintAmountChange(e)}
    style={{ color: "black" }} 
  />
  <button
    onClick={() => { mintCoin(); }}
    className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"

    style={{ marginLeft: '10px' }}>
  
    Mint your tokens
  </button>
</div>

  {/* Staking Section */}
  <div style={{ marginRight: '110px', marginBottom: '20px' }}>
    <form>
      <label style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Input Amount To Stake</label><br/>
    </form>
    <input
      type="number"
      value={stakingAmount || ""}
      onChange={(e) => stakeAmountChange(e)}
      style={{ color: "black" }}
    />
    <button
      onClick={stakeCoin}
      className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      style={{ marginLeft: '10px' }}>
      Stake It
    </button>
  </div>

  {/* Withdraw Section */}
  <div>
    <button
      onClick={withdrawCoin}
      className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      style={{ marginLeft: '70px', marginTop: '50px' }}>
      Withdraw
    </button>
  </div>
</div>


    


          










        </div>
      </div>
    </main>
  );
  } 

  