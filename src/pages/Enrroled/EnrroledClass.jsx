import React from "react";
import Card from "../../shared/Card/Card";
import { Helmet } from "react-helmet-async";

const EnrroledClass = () => {
  return (
    <>
      <Helmet>
        <title>Enrroled Class | Sports Zone</title>
      </Helmet>
      <div className="my-10">
        <Card />
      </div>
    </>
  );
};

export default EnrroledClass;
