import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils/index";

const url = "/products";

export const loader = async () => {
  const request = await customFetch(url);
  const products = request.data.data;
  const meta = request.data.meta;
  return { products, meta };
};

function Products() {
  return (
    <div className="max-w-6x1 mx-auto px-40">
      <ProductsContainer />
    </div>
  );
}

export default Products;
