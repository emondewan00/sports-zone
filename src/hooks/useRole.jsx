import axios from "axios";
import React from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useRole = async () => {
  const { currentUser } = useAuth();
  const { axiosSecure } = useAxios();
  const { data, isLoading } = useQuery({
    queryKey: ["isAdmin", currentUser?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/users/${currentUser?.email}`);
      return res.data.isAdmin;
    },
  });
  return { data };
};

export default useRole;
