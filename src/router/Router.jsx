import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Banner from "../pages/Home/Banner/Banner";
import Error from "../pages/err/Error";
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
import DashbordHome from "../pages/DashbordHome/DashbordHome";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import UserRoute from "./UserRoute";
import ManageUsers from "../pages/ManageUsers/ManageUsers";
import MannageClasses from "../pages/ManageClasses/MannageClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <Error />,
    children: [
      { path: "/", element: <Banner /> },
      { path: "allClass", element: <AllClasses /> },
      { path: "singUp", element: <Registration /> },
      { path: "login", element: <Login /> },
      { path: "instructors", element: <Instructors /> },
      { path: "instructors", element: <Instructors /> },
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
        path: "",
        element: (
          <PrivetRoute>
            <DashbordHome />
          </PrivetRoute>
        ),
      },
      {
        path: "selectedClasses",
        element: (
          <UserRoute>
            <SelectedClass />
          </UserRoute>
        ),
      },
      {
        path: "enrroledClasses",
        element: (
          <UserRoute>
            <EnrroledClass />
          </UserRoute>
        ),
      },
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "myClasses",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <MannageClasses />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
