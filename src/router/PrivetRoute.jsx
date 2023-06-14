import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children }) => {
  const { loading, currentUser } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[95vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (currentUser) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
