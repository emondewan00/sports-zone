import React, { useState } from "react";
import Card from "../../shared/Card/Card";
import Cards from "../../shared/cardLoading/Cards";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {
  const { axiosSecure } = useAxios();
  const {
    data = [],
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure("/classes?status=aprove");
      return res.data;
    },
  });

  let content = null;
  if (isLoading) {
    content = <Cards />;
  }
  if (isSuccess && isLoading !== true) {
    content = data.map((c) => <Card key={c._id} c={c}></Card>);
  }
  return (
    <>
      <Helmet>
        <title>All Class | Sports Zone</title>
      </Helmet>
      <div className="my-10">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 mx-auto max-w-4xl gap-4">
          {content}
        </div>
      </div>
    </>
  );
};

export default AllClasses;
