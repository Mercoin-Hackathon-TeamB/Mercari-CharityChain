import React from "react";
import Product from "@/app/components/Purchase/Product";

const Purchase = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Product id={params.id} />
    </div>
  );
};

export default Purchase;
