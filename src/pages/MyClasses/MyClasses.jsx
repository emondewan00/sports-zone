import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { FaPen, FaTrash } from "react-icons/fa";
const MyClasses = () => {
  const { currentUser } = useAuth();
  const { axiosSecure } = useAxios();
  const { data: myClasses = [], refetch } = useQuery({
    queryKey: ["myClasses", currentUser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/classes/myClasses/${currentUser?.email}`
      );
      return res.data;
    },
  });
  const deleteHandler = async (id) => {
    const res = await axiosSecure.delete(`/classes/delete/${id}`);
    refetch();
  };
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-3xl my-4">My Classes</h1>
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
            {myClasses.map((c, idx) => (
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
                  <p className="capitalize">{c.status}</p>
                </th>
                <td>
                  <button onClick={() => deleteHandler(c._id)} className="btn">
                    <FaTrash />
                  </button>
                </td>
                <td>
                  <button className="btn">
                    <FaPen />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
