"use client";
import { Card, CardBody, CardFooter, Image,Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import donations from "@/app/components/Donation/Donations.json";
import { useRouter } from "next/navigation";

interface DonationProps {
  id: string;
}

const Donation: React.FC<DonationProps> = ({ id }) => {
  const router = useRouter();
  const donation = donations.find((p) => p.id === parseInt(id));
  const [amount,setAmount]=useState(0);


  const handleDonationClick = () => {
    // 募金ページへリダイレクト、または募金処理をここで行う
    router.push("/donation");
  };

  const handleReturnClick = () => {
    // 募金ページへリダイレクト、または募金処理をここで行う
    router.push("/products");
  };

  // 商品が見つからない場合の処理
  if (!donation) {
    return <div>Donation not found.</div>;
  }

  return (
    <div>
    <Card shadow="sm" isPressable className="max-w-xs mt-2">
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          className="object-cover"
          src={donation.img}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{donation.title}</b>
      </CardFooter>
    </Card>
    <></>
        <div className="text-center mt-4">
        <div className="text-2xl font-bold mb-3">何BTC送りますか？</div>
        <Input
          type="number"
          placeholder="金額を入力"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button color="primary" onClick={handleDonationClick}>送信する</Button>
        <Button color="primary" onClick={handleReturnClick}>戻る</Button>
      </div>
    </div>
  );
};

export default Donation;
