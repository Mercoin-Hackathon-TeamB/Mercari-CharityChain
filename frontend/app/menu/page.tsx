import ProductList from "@/app/components/Menu/MenuList";
import Header from "@/app/components/Header/Header";

const Products = () => {
  return (
    <div>
      <Header />
      <div className="text-3xl m-4 font-semibold">メニュー</div>
      <ProductList />
    </div>
  );
};

export default Products;