import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";

const Products = () => {
  const list = [
    {
      title: "Orange",
      img: "/orange.png",
      price: "$5.50",
    },
    {
      title: "Raspberry",
      img: "/raspberry.png",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/lemon.png",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/avocado.png",
      price: "$15.70",
    },
    {
      title: "Banana",
      img: "/banana.png",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/watermelon.png",
      price: "$12.20",
    },
  ];

  return (
    <div className="m-5">
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable className="max-w-xs mt-2">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="object-cover"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
