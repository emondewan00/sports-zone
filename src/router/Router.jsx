import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import Banner from "../pages/Home/Banner/Banner";
import AllClasses from "../pages/AllClasses/AllClasses";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Banner /> },
      { path: "allClass", element: <AllClasses /> },
      { path: "singUp", element: <Registration /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
export default router;
