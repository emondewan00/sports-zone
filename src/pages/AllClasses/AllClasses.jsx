import React, { useState } from "react";
import Card from "../../shared/Card/Card";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const AllClasses = () => {
  const { axiosSecure } = useAxios();
  const { data = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure("/classes?status=aprove");
      return res.data;
    },
  });
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 mx-auto max-w-4xl gap-4">
        {data.map((c) => (
          <Card key={c._id} c={c}>
            
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
