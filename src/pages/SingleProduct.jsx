import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generatedAmountOptions } from "../utils";
import { useState } from "react";
// loader
export const loader = async ({ params }) => {
  const req = await customFetch(`/products/${params.id}`);
  const product = req.data.data;
  return { product };
};
function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  return (
    <section className="max-w-6x1 mx-auto px-40 py-16">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-8 lg:grid-cols-2 1g:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3x1 font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content mt-2 font-bold">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              Colors:
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={` badge w-6 h-6 mr-2 ${
                      color == productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
              <div className="form-control w-full max-xs">
                <label className="label">
                  <h4 className="text-md font-medium tracking-wider capitalize">
                    amount:
                  </h4>
                </label>
                <select
                  className="select select-secondary select-bordered select-md"
                  value={amount}
                  onChange={handleAmount}
                >
                  {generatedAmountOptions(20)}
                </select>
              </div>
              <div className="mt-10">
                <button
                  className="btn btn-primary btn-md uppercase"
                  onClick={() => console.log("click me")}
                >
                  Add to bug
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SingleProduct;
