import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../hooks/useAxios";
import { FaTrash } from "react-icons/fa";
import Success from "../../message/Success";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const { axiosSecure } = useAxios();
  const {
    data = [],
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });
  const { mutate, data: updateRes } = useMutation({
    mutationFn: async ({ id, role }) => {
      const res = await axiosSecure.patch(`/users/${id}`, {
        role,
      });
      if (res.status === 200) {
        refetch();
        Success("success", "User Updated SuccessFully!");
      }
      return res.data;
    },
  });
  return (
    <>
      <Helmet>
        <title>Manage User | Sports Zone</title>
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-3xl my-4">All Users</h1>
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-primary text-white ">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>gender</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user.photo} alt="User image" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-lg">{user.email}</span>
                    <br />
                    <span className="badge-lg capitalize p-0">{user.role}</span>
                  </td>
                  <td>
                    <p className="font-semibold capitalize text-center">
                      {user.gender}
                    </p>
                  </td>
                  <td>
                    <select
                      className="  p-2 outline-none w-full "
                      defaultValue={user.role}
                      disabled={user.role !== "user"}
                      onChange={(e) =>
                        mutate({ id: user._id, role: e.target.value })
                      }
                    >
                      <option value="user">User</option>
                      <option value="instructor">Instructor</option>
                      <option value="admin">Admin</option>
                    </select>
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

export default ManageUsers;
