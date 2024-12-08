import { createBrowserRouter } from "react-router-dom";
import App from "./Components/App";

const router = createBrowserRouter([
  {
    index: true,
    element: <App />,
  },
]);

export default router;
