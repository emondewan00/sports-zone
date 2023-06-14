import React from "react";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { role, isLoading } = useRole();
  const { currentUser, loading } = useAuth();
  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center h-[95vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (currentUser && role?.role === "admin") {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default AdminRoute;
