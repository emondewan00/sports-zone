import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useAxios = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:4999",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      console.log(config)
      const token = localStorage.getItem("access_token");
      console.log(token, "token");
      if (token) {
        
        config.headers.Authorization = token;
      }
      return config;
    });
  }, [axiosSecure]);

  return { axiosSecure };
};

export default useAxios;
