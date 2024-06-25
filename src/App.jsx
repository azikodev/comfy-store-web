import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  About,
  Register,
  Login,
  Checkout,
  Orders,
  Cart,
} from "./pages";

import { loader as LandingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as ProductsLoader } from "./pages/Products";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: LandingLoader,
        },
        {
          path: "/products",
          element: <Products />,
          loader: ProductsLoader,
        },
        {
          path: "/products/:id",
          element: <SingleProduct />,
          loader: SingleProductLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <register />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={routes} />;
}
export default App;
