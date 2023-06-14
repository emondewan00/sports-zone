import React from "react";
import Card from "../../../shared/Card/Card";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Cards from "../../../shared/cardLoading/Cards";

const PopularClass = () => {
  const { axiosSecure } = useAxios();
  const { data = [],isLoading,isSuccess } = useQuery({
    queryKey: ["popularClasses"],
    queryFn: async () => {
      const res = await axiosSecure("/classes/popular?sort=desc&limit=6");
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
    <div className="my-10">
      <h1 className="text-3xl my-4">Popular Classes</h1>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 mx-auto max-w-4xl gap-4">
        {content}
      </div>
    </div>
  );
};

export default PopularClass;
