import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import Banner from "../pages/Home/Banner/Banner";
import AllClasses from "../pages/AllClasses/AllClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Banner /> },
      { path: "allClass", element: <AllClasses /> },
    ],
  },
]);
export default router;
