import { useState } from 'react';

export default function WithdrawCoinsButton() {
  const [submitted, setSubmitted] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");

  const withdrawCoin = async () => {
    // Withdrawal logic
  };

  return (
    <button onClick={withdrawCoin}>Withdraw</button>
  );
}
