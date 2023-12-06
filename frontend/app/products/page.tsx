import React from "react";
import ProductList from "@/app/components/Product/ProductList";

const Products = () => {
  return (
    <div>
      <div className="text-3xl m-4 font-semibold">商品一覧</div>
      <ProductList />
    </div>
  );
};

export default Products;
