import ProductList from "@/app/components/Apply/ApplyList";
import Header from "@/app/components/Header/Header";

const Products = () => {
  return (
    <div>
      <Header />
      <div className="text-3xl m-4 font-semibold">募金の受け取り申請を行いますか？</div>
      <ProductList />
    </div>
  );
};

export default Products;
