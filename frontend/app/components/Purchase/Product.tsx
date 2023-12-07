import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";
import products from "@/app/components/Product/Products.json";

interface ProductProps {
  id: string;
}

const Product: React.FC<ProductProps> = ({ id }) => {
  const product = products.find((p) => p.id === parseInt(id));

  // 商品が見つからない場合の処理
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <Card shadow="sm" isPressable className="max-w-xs mt-2">
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          className="object-cover"
          src={product.img}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{product.title}</b>
        <p className="text-default-500">{product.price}</p>
      </CardFooter>
    </Card>
  );
};

export default Product;
