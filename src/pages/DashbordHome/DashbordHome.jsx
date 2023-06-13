import React from "react";
import useRole from "../../hooks/useRole";
import { Helmet } from "react-helmet-async";

const DashbordHome = () => {
  const { role } = useRole();
  return (
    <>
      <Helmet>
        <title>Dashbord Home | Sports Zone</title>
      </Helmet>
      <div className="flex justify-center items-center h-[95vh]">
        <div className=" shadow-lg max-w-md p-6 rounded">
          <h1 className="text-3xl capitalize">
            Wellcome {role?.role} Dashbord!
          </h1>
          <h1 className="text-2xl mt-2">Hallo,{role?.name}</h1>
        </div>
      </div>
    </>
  );
};

export default DashbordHome;
