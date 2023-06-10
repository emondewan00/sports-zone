import axios from "axios";
import React from "react";

const useAxios = () => {
  const axiosSecure = axios.create({
    baseURL: "http://localhost:4999",
  });
  return {axiosSecure};
};

export default useAxios;
