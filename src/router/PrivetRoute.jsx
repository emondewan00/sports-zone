import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivetRoute = ({children}) => {
  const { loading, currentUser } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div>loading......</div>;
  if (currentUser?.email) return children;
  return <Navigate to="/login" replace state={{ from: location }} />;
};

export default PrivetRoute;
