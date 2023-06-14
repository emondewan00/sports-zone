import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Helmet } from "react-helmet-async";
import Modal from "../Modal/Modal";

const MannageClasses = () => {
  const { axiosSecure } = useAxios();
  const { data = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure("/classes");
      return res.data;
    },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { data: updateClass, mutate } = useMutation({
    mutationFn: async (doc) => {
      const res = await axiosSecure.patch(`/classes/${doc.id}`, {
        status: doc.status,
        feedback: feedback,
      });
      return res.data;
    },
  });
  const { data: feedback, mutate: feedbackMutate } = useMutation({
    mutationFn: async (doc) => {
      const res = await axiosSecure.patch(`/classes/${doc.id}`, {
        feedback: doc.feedback,
      });
      return res.data;
    },
  });
  return (
    <>
      <Helmet>
        <title>Manage Class | Sports Zone</title>
      </Helmet>
      <div className="px-4">
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
                <th>Feedback</th>
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
                      className="  p-2 outline-none w-full "
                      defaultValue={c.status}
                      disabled={c.status !== "pending"}
                      onChange={(e) =>
                        mutate({ status: e.target.value, id: c._id })
                      }
                    >
                      <option value="aprove">Aprove</option>
                      <option value="reject">Reject</option>
                      <option value="pending">Pending</option>
                    </select>
                  </th>
                  <td>
                    <textarea
                      className="textarea textarea-secondary"
                      placeholder="Feedback"
                      disabled={c.status !== "reject"}
                      onBlur={(e) =>
                        feedbackMutate({ feedback: e.target.value, id: c._id })
                      }
                    ></textarea>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MannageClasses;
