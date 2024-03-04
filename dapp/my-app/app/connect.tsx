// ConnectWalletButton.js
import { useState } from 'react';

export default function ConnectWalletButton() {
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    try {
      // Connect wallet logic
      setConnected(true);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setConnected(false);
    }
  };

  return (
    <button onClick={connectWallet}>
      {connected ? "Wallet is connected!" : "Connect your wallet"}
    </button>
  );
}
