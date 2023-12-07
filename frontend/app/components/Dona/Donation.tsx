"use client";
import {
  Card,
  CardBody,
  Image,
  Button,
  Input,
  CardFooter,
} from "@nextui-org/react";
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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // アクセストークンをヘッダーに設定
        },
        body: JSON.stringify({
          // sender_id: ログインユーザーのIDはサーバー側でトークンから取得
          receiver_id: "oka",
          amount: amount,
        }),
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
      <div className="text-center mt-4">
        <div className="flex items-center justify-center">
          <Card shadow="sm" isPressable className="max-w-xs mt-2">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={donation?.title}
                className="object-cover"
                src={donation?.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{donation?.title}</b>
            </CardFooter>
          </Card>
        </div>

        <div className="text-2xl font-bold m-3">いくら送りますか？</div>
        <div className="flex justify-center">
          <Input
            type="number"
            value={amount.toString()} // Convert amount to string
            className="w-1/3 text-center"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <Button className="mt-3" color="primary" onClick={handleDonationClick}>
          送金する
        </Button>
      </div>
    </div>
  );
};

export default Donation;
