import React from "react";
import Card from "../../../shared/Card/Card";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const PopularClass = () => {
  const { axiosSecure } = useAxios();
  const { data = [] } = useQuery({
    queryKey: ["popularClasses"],
    queryFn: async () => {
      const res = await axiosSecure("/classes/popular?sort=desc&limit=6");
      return res.data;
    },
  });
  return (
    <div className="my-10">
      <h1 className="text-3xl my-4">Popular Classes</h1>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 mx-auto max-w-4xl gap-4">
        {data.map((cls) => (
          <Card key={cls._id} c={cls} />
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
