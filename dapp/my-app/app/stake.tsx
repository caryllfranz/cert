import React from 'react';

interface StakeCoinsFormProps {
  stakingAmount: string;
  setStakingAmount: React.Dispatch<React.SetStateAction<string>>;
}



const StakeCoinsForm: React.FC<StakeCoinsFormProps> = ({ stakingAmount, setStakingAmount }) => {
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStakingAmount(event.target.value);
  };

  const stakeCoin = () => {
    // Add your stake logic here
  };

  return (
    <div>
      <input
        type="number"
        value={stakingAmount}
        onChange={handleAmountChange}
      />
      <button onClick={stakeCoin}>Stake your tokens</button>
    </div>
  );
}

export default StakeCoinsForm;
