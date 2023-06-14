import React from "react";
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";

const UserRoute = ({ children }) => {
  const { role, isLoading } = useRole();
  const { currentUser, loading } = useAuth();
  if (loading || isLoading) {
    return <div className="flex justify-center items-center h-[95vh]">
    <span className="loading loading-spinner loading-lg"></span>
  </div>;
  }
  if (currentUser && role?.role === "user") {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default UserRoute;
