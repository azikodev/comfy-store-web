import { BsFillGridFill, BsList } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useState } from "react";
import Filters from "./Filters";

function ProductsContainer() {
  const { meta } = useLoaderData();
  const toalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");
  const setActiveStyle = (patter) => {
    return `text-xl btn-circle btn btn-sm ${
      patter === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };
  return (
    <div className="mt-20">
        <Filters/>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium">
          {toalProducts} product{toalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            onClick={() => setLayout("grid")}
            className={setActiveStyle("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={setActiveStyle("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {toalProducts === 0 ? (
          <h5 class="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout == "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </div>
  );
}

export default ProductsContainer;
