import axios from "axios";
import React from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useRole =  () => {
  const { currentUser } = useAuth();
  const { axiosSecure } = useAxios();
  const { data:role, isLoading } = useQuery({
    queryKey: ["role", currentUser?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/users/${currentUser?.email}`);
      return res.data[0];
    },
  });
  return {role};
};

export default useRole;
