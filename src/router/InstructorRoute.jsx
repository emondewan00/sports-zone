import React from "react";
import useRole from "../hooks/useRole";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const InstructorRoute = ({ children }) => {
  const { role, isLoading } = useRole();
  const { currentUser, loading } = useAuth();
  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center h-[95vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  console.log(role);
  if (currentUser && role?.role === "instructor") {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default InstructorRoute;
