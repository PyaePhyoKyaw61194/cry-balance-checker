import { useEffect, useState } from "react";

const useAddress = () => {
  const addAddress = async (username: string, address: string) => {
    const response = await fetch("/api/address", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, address }),
    });
    const data = await response.json();
    return data;
  };
  return { addAddress };
};

export default useAddress;
