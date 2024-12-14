import { createBrowserRouter } from "react-router-dom";
import App from "./Components/App";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import AllProducts from "./Components/AllProducts";
import Product from "./Components/Product";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            index: true,
            element: <AllProducts />,
          },
          {
            path: ":category",
            element: <AllProducts />,
          },
          {
            path: ":category/:id",
            element: <Product />,
          },

          // {
          //   path: ":category",
          //   element: <Products />,
          // },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
