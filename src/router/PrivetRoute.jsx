import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({children}) => {
  const { loading, currentUser } = useAuth();
  const location = useLocation();

  if (loading) return <div>loading......</div>;
  if (currentUser?.email) return children;
  return <Navigate to="/login" replace state={{ from: location }} />;
};

export default PrivetRoute;
