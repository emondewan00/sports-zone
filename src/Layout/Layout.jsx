import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../shared/Navbar/NavBar";

const Layout = () => {
  return (
    <div className="max-w-5xl mx-auto container ">
      <NavBar />
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
