import React from "react";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
  const { role } = useRole();
  console.log(role?.role);
  return <div></div>;
};

export default AdminRoute;
