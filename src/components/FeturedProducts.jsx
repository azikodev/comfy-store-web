import { useLoaderData } from "react-router-dom";
import { SectionTitle, ProductsGrid } from "../components";
function FeturedProducts() {
  const { products } = useLoaderData();
  return (
    <div className="pt-24 max-w-6x1 mx-auto px-40">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  );
}
export default FeturedProducts;
