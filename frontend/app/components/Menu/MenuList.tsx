"use client";

import React, { useEffect, useState } from "react";
import { Button, Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const MenuPage = () => {
  const router = useRouter();
  const [balance, setBalance] = useState(0);

  // ページロード時にユーザの残高を取得
  useEffect(() => {
    const fetchBalance = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        console.error("No access token found");
        //router.push("/login"); // トークンがなければログインページへリダイレクト
        return;
      }

      try {
        const response = await fetch("http://localhost:8081/balance", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBalance(data.balance); // 残高を設定
        } else {
          console.error("Failed to fetch balance");
        }
      } catch (error) {
        console.error("Error fetching balance: ", error);
      }
    };

    fetchBalance();
  }, []);

  const handlePurchase = () => {
    // `/products` ページに遷移
    router.push("/products");
  };

  const handleReceiveRequest = () => {
    router.push("/apply");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-lg font-bold">Your Balance: {balance} BTC</div>
      <div className="mt-4">
        <Button onClick={handlePurchase} color="primary">
          メルカリサービスを利用する
        </Button>
      </div>
      <div className="mt-4">
        <Button onClick={handleReceiveRequest} color="primary">
          受取り申請
        </Button>
      </div>
    </div>
  );
};

export default MenuPage;
