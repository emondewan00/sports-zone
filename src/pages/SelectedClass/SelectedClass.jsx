import React from "react";
import Card from "../../shared/Card/Card";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import useRole from "../../hooks/useRole";

const SelectedClass = () => {
  const { currentUser } = useAuth();
  const { axiosSecure } = useAxios();
  const { role } = useRole();
  const { data = [] } = useQuery({
    queryKey: ["selected", role?._id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedClasses/${role._id}`);
      return res.data;
    },
  });
  const { data :payRes, mutate } = useMutation({
    mutationKey: ["select"],
    mutationFn: async (classId) => {
      const res = await axiosSecure.post("/selectedClasses", { classId });
      // if (res.status === 200) {
      //   Success("success", "Class add as select");
      // }
      return res.data;
    },
  });
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 mx-auto max-w-4xl gap-4">
        {data.map((sClass, idx) => {
          const {
            image,
            className,
            instructorEmail,
            instructorName,
            price,
            availableSeats,
            _id,
          } = sClass.classId || {};
          return (
            <div key={sClass._id} className=" w-64 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={image}
                  className="h-[200px] w-full rounded-t object-cover"
                  alt="class image"
                />
              </figure>
              <div className="px-4 my-4 space-y-1">
                <h2 className="card-title font-serif">{className}</h2>
                <p className="text-md">Techer:{instructorName}</p>
                <p className="text-sm">Techer Email:{instructorEmail}</p>
                <ul className="flex justify-between ">
                  <li className="text-md font-semibold">Price:${price}</li>
                  <li>Av Seats:{availableSeats}</li>
                </ul>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => mutate(_id)}
                    className="px-5 bg-base-200 py-2 font-semibold hover:bg-base-300 rounded"
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedClass;
