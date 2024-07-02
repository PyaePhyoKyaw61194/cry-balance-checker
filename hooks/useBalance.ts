import { useEffect, useState } from "react";

const useBalance = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const response = await fetch("/api/balance");
      const data = await response.json();
      setBalance(data.balance);
    };

    fetchBalance();
  }, []);

  return { balance };
};

export default useBalance;
