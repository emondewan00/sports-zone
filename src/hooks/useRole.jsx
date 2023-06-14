import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useRole = () => {
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    fetch(
      `https://summer-camp-school-miremon5222-gmailcom.vercel.app/users/single/${currentUser?.email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setRole(data[0]);
        if (data.error) {
          logOut();
          navigate("/login");
        }
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [token, currentUser, logOut, navigate]);

  return { role, isLoading };
};

export default useRole;
