import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../shared/Navbar/NavBar";
import Footer from "../shared/Footer/Footer";

const Layout = () => {
  return (
    <div className="max-w-5xl mx-auto container ">
      <NavBar />
      <div className="min-h-[75vh]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
