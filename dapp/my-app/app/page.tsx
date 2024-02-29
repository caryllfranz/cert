"use client";
import Image from "next/image";
import { BrowserProvider } from "ethers";
import { useEffect, useState } from "react";
import { getContract } from "../config";

export default function Home() {
  const [connected, setConnected] = useState(false);

  // Function to handle wallet connection
  const connectWallet = async () => {
    // Your wallet connection logic here
    // Example: Requesting accounts from Metamask
    try {
      const { ethereum } = window as any;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      // If accounts are retrieved successfully, set connected state to true
      setConnected(true);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{backgroundImage: "url('/bg.jpg')"}}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {/* Centered text and icon */}
          <span className="flex items-center">
            Powered by Caryll Franz M. Carino&nbsp;
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-games-dating-app-flaticons-lineal-color-flat-icons.png"
              alt="external-games-dating-app-flaticons-lineal-color-flat-icons"
            />
          </span>
        </p>
        <div className="fixed bottom-0 left-0 w-full flex justify-center">
          {/* Connect Wallet Button */}
          <button
            onClick={connectWallet}
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-Poppins"
            style={{ marginBottom: '500px' }} // Adjust margin as needed
          >
            {connected ? "Wallet is connected!" : "seesh your metamaskwallet"}
          </button>
        </div>
      </div>
    </main>
  );
  } 