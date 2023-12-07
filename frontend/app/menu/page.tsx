"use client";

import React, { useEffect, useState } from 'react';
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
        router.push("/login"); // トークンがなければログインページへリダイレクト
        return;
      }

      try {
        const response = await fetch("http://localhost:8081/balance", {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
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
    // 購入ボタンの処理
    // ここで購入処理を行う
  };

  const handleReceiveRequest = () => {
    // 受信申請ボタンの処理
    // ここで受信申請処理を行う
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Card>
        <div className="text-lg font-bold">Your Balance: {balance} BTC</div>
        <div className="mt-4">
          <Button onClick={handlePurchase} color="primary">購入</Button>
        </div>
        <div className="mt-4">
          <Button onClick={handleReceiveRequest} color="primary">受信申請</Button>
        </div>
      </Card>
    </div>
  );
};

export default MenuPage;
