"use client";
import { Card, CardBody, CardFooter, Image,Button,Input } from "@nextui-org/react";
import React from "react";
import donations from "@/app/components/Donation/Donations.json";
import { useRouter } from "next/navigation";

interface DonationProps {
  id: string;
}

const Donation: React.FC<DonationProps> = ({ id }) => {
  const router = useRouter();
  const donation = donations.find((p) => p.id === parseInt(id));

  const [amount, setAmount] = React.useState(0); // 送金額の状態

  const handleDonationClick = async () => {
    try {
        const accessToken = localStorage.getItem("accessToken"); // アクセストークンを取得
        if (!accessToken) {
            // アクセストークンが存在しない場合の処理
            console.error("No access token found");
            return;
        }

        const response = await fetch("http://localhost:8081/transfer-money", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}` // アクセストークンをヘッダーに設定
            },
            body: JSON.stringify({
                // sender_id: ログインユーザーのIDはサーバー側でトークンから取得
                receiver_id: "oka",
                amount: amount
            })
        });

        if (response.ok) {
            // 成功処理
            alert("Transfer successful");
            // 必要に応じてページ遷移など
        } else {
            // エラー処理
            alert("Transfer failed");
        }
    } catch (error) {
        console.error("Error during transfer: ", error);
    }
};

return (
    <div>
        {/* 省略 */}
        <div className="text-center mt-4">
            <div className="text-2xl font-bold mb-3">何BTC送りますか？</div>
            <Input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))} 
            />
            <Button color="primary" onClick={handleDonationClick}>送信する</Button>
            {/* 省略 */}
        </div>
    </div>
);
};




export default Donation;
