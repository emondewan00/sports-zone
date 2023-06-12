import React from "react";
import Card from "../../../shared/Card/Card";

const PopularClass = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl my-4">Popular Classes</h1>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 mx-auto max-w-4xl gap-4">
        <Card />
      </div>
    </div>
  );
};

export default PopularClass;
