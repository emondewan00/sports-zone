import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useRole = () => {
  const { currentUser } = useAuth();
  const { axiosSecure } = useAxios();
  const [role, setRole] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const { data:role, isLoading } = useQuery({
  //   queryKey: ["role", currentUser?.email],
  //   // enabled:!!currentUser?.email && !localStorage.getItem("access_token"),
  //   queryFn: async () => {
  //     const res = await axiosSecure(`/users/single/${currentUser?.email}`);
  //     return res.data[0];
  //   },
  // });
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    fetch(`http://localhost:4999/users/single/${currentUser?.email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setRole(data[0]);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [token, currentUser]);
  
  return { role, isLoading };
};

export default useRole;
