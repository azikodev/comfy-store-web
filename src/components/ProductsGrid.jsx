import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

function ProductsGrid() {
  
  const { products } = useLoaderData();

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-10">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <Link
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
            to={`/products/${product.id}`}
            key={product.id}
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wide">{title}</h2>
              <span className="text-secondary">{dollarAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default ProductsGrid;
