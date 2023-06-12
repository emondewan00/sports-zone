import React from "react";
import InstructorsCard from "../../../shared/InstructorsCard/InstructorsCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
const PopularInstructor = () => {
  const { axiosSecure } = useAxios();
  const { data = [] } = useQuery({
    queryKey: ["popularInstructors"],
    queryFn: async () => {
      const res = await axiosSecure("/users/popularInstructor");
      return res.data;
    },
  });
  return (
    <div className="my-10">
      <h1 className="text-3xl my-4">Popular Instructors</h1>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 mx-auto max-w-4xl gap-4">
        {data.map((ins) => (
          <InstructorsCard key={ins._id} instructor={ins} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
