import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "shop",
        element: <Shop/>
      },
      {
        path: "products/:id",
        element: <ProductDetails/>
      },
      {
        path: "cart",
        element: <Cart/>
      }
    ],
  },
]);

export default router;
