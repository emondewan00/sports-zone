import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import Banner from "../pages/Home/Banner/Banner";
import AllClasses from "../pages/AllClasses/AllClasses";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Instructors from "../pages/Instructors/Instructors";
import SelectedClass from "../pages/SelectedClass/SelectedClass";
import SideNav from "../shared/sideBar/SideNav";
import PrivetRoute from "./PrivetRoute";
import EnrroledClass from "../pages/Enrroled/EnrroledClass";
import AddClass from "../pages/AddClass/AddClass";
import MyClasses from "../pages/MyClasses/MyClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Banner /> },
      { path: "allClass", element: <AllClasses /> },
      { path: "singUp", element: <Registration /> },
      { path: "login", element: <Login /> },
      { path: "instructors", element: <Instructors /> },
      { path: "instructors", element: <Instructors /> },
      { path: "selectedClass", element: <SelectedClass /> },
    ],
  },
  {
    path: "/dashbord",
    element: (
      <PrivetRoute>
        <SideNav />
      </PrivetRoute>
    ),
    children: [
      {
        path: "selectedClasses",
        element: <SelectedClass />,
      },
      {
        path: "enrroledClasses",
        element: <EnrroledClass />,
      },
      {
        path: "addClass",
        element: <AddClass />,
      },
      {
        path: "myClasses",
        element: <MyClasses />,
      },
    ],
  },
]);
export default router;
