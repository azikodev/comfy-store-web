import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

function ProductsList() {
  const { products } = useLoaderData();
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image, category } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <>
            <Link
              className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
              to={`/products/${product.id}`}
              key={product.id}
            >
              <figure className="px-4 pt-4">
                <img
                  src={image}
                  alt={title}
                  className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
                />
              </figure>
              <div className="ml-0 sm:ml-16">
                <h2 className="capitalize font-medium text-lg">{title}</h2>
                <h4 class="capitalize text-md text-neutral-content">
                  {category}
                </h4>
              </div>
              <span className="font-medium ml-0 sm:ml-auto text-lg">
                {dollarAmount}
              </span>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default ProductsList;
