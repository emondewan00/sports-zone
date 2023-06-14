import React from "react";
import InstructorsCard from "../../../shared/InstructorsCard/InstructorsCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";
const PopularInstructor = () => {
  const { axiosSecure } = useAxios();
  const { data = [] } = useQuery({
    queryKey: ["popularInstructors"],
    queryFn: async () => {
      const res = await axiosSecure(
        "/users/popularInstructor?sort=desc&limit=6"
      );
      return res.data;
    },
  });
  return (
    <div className="my-10">
      <h1 className="text-3xl my-4">Popular Instructors</h1>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 mx-auto max-w-4xl gap-4">
        {data.map((ins) => (
          <InstructorsCard key={ins._id} instructor={ins}>
            <Link
              to="/instructors"
              className="px-5 bg-base-200 py-2 font-semibold hover:bg-base-300 rounded"
            >
              All Instructors
            </Link>
          </InstructorsCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
