import React from "react";
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";

const UserRoute = ({ children }) => {
  const { role, isLoading } = useRole();
  const { currentUser, loading } = useAuth();
  if (loading || isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (currentUser && role?.role === "user") {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default UserRoute;
