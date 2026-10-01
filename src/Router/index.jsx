import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";

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
      }
    ],
  },
]);

export default router;
