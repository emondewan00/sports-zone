import React from "react";
import SideNav from "../shared/sideBar/SideNav";
import { Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="max-w-5xl mx-auto ">
      <SideNav />
      <Outlet />
    </div >
  );
};

export default Dashbord;
