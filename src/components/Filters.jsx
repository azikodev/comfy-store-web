import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import { useState } from "react";

function Filters() {
  const [inputvalue, setinputvalue] = useState(0);
  return (
    <form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <div className="form-control">
        <label for="search" className="label">
          <span className="label-text capitalize">search product</span>
        </label>
        <FormInput
          type="search"
          name="search"
          className="h-4 input input-bordered input-sm"
        />
      </div>
      <div className="form-control">
        <label for="category" className="label">
          <span className="label-text capitalize">select category</span>
        </label>
        <select
          name="category"
          id="category"
          className="select h-12 mt-4 select-bordered select-sm"
        >
          <option value="all" selected="">
            all
          </option>
          <option value="Tables">Tables</option>
          <option value="Chairs">Chairs</option>
          <option value="Kids">Kids</option>
          <option value="Sofas">Sofas</option>
          <option value="Beds">Beds</option>
        </select>
      </div>
      <div className="form-control">
        <label for="company" className="label">
          <span className="label-text capitalize">select company</span>
        </label>
        <select
          name="company"
          id="company"
          className="select h-12 mt-4 select-bordered select-sm"
        >
          <option value="all" selected="">
            all
          </option>
          <option value="Modenza">Modenza</option>
          <option value="Luxora">Luxora</option>
          <option value="Artifex">Artifex</option>
          <option value="Comfora">Comfora</option>
          <option value="Homestead">Homestead</option>
        </select>
      </div>
      <div className="form-control">
        <label for="order" className="label">
          <span className="label-text capitalize">sort by</span>
        </label>
        <select
          name="order"
          id="order"
          className="select h-12 mt-4 select-bordered select-sm"
        >
          <option value="a-z" selected="">
            a-z
          </option>
          <option value="z-a">z-a</option>
          <option value="high">high</option>
          <option value="low">low</option>
        </select>
      </div>
      <div className="form-control">
        <label for="price" className="label cursor-pointer">
          <span className="label-text capitalize">select price</span>
          <span>${inputvalue}.00</span>
        </label>
        <input
          type="range"
          value={inputvalue}
          onChange={(e) => setinputvalue(e.target.value)}
          className="range range-primary range-sm"
        />
        <div className="w-full flex justify-between text-xs px-2 mt-2">
          <span className="font-bold text-md">0</span>
          <span className="font-bold text-md">Max : $100.00</span>
        </div>
      </div>
      <div className="form-control items-center">
        <label for="shipping" className="label cursor-pointer">
          <span className="label-text capitalize">free shipping</span>
        </label>
        <input
          type="checkbox"
          name="shipping"
          className="checkbox checkbox-primary checkbox-sm"
        />
      </div>
      <input type="button" className="btn btn-primary btn-sm" value="search" />
      <Link className="btn btn-accent btn-sm" to="/products">
        reset
      </Link>
    </form>
  );
}
export default Filters;
