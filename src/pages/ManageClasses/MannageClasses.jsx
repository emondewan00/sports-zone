import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../hooks/useAxios";

const MannageClasses = () => {
  const { axiosSecure } = useAxios();
  const { data = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure("/classes");
      return res.data;
    },
  });
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-3xl my-4">All Classes</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-primary text-white ">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor name</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c, idx) => (
              <tr key={c._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={c.image} alt="Class image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{c.className}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-lg">{c.instructorName}</span>
                  <br />
                  <span className="badge-sm p-0">{c.instructorEmail}</span>
                </td>
                <td>
                  <p className="font-semibold text-center">
                    {c.availableSeats}
                  </p>
                </td>
                <th>
                  <p className="text-end">${c.price}</p>
                </th>
                <th>
                  <select
                    name="gender"
                    className="  p-2 outline-none w-full "
                    id="gender"
                    defaultValue={c.status}
                  >
                    <option value="aprove">Aprove</option>
                    <option value="reject">Reject</option>
                    <option value="pending">Pending</option>
                  </select>
                </th>
                {/* <td>
                  <button onClick={() => mutate(c._id)} className="btn">
                    <FaTrash />
                  </button>
                </td>
                <td>
                  <button className="btn">
                    <FaPen />
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MannageClasses;
