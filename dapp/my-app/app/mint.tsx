import React, { useState } from 'react';

interface MintCoinsFormProps {
  mintingAmount: string;
  setMintingAmount: React.Dispatch<React.SetStateAction<string>>;
}

const MintCoinsForm: React.FC<MintCoinsFormProps> = ({ mintingAmount, setMintingAmount }) => {
  const mintCoin = async () => {
    // Your mintCoin logic here
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMintingAmount(event.target.value); // Update mintingAmount state with input value
  };

  return (
    <div>
      <input
        type="number"
        value={mintingAmount}
        onChange={handleAmountChange}
      />
      <button onClick={mintCoin}>Mint your tokens</button>
    </div>
  );
}

export default MintCoinsForm;
