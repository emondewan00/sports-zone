import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const GoogleLog = () => {
  const { googleLogIn } = useAuth();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const googleLog = () => {
    googleLogIn()
      .then((res) => {
        const { displayName, photoURL, phoneNumber, email } = res.user;
        axios
          .post(
            "https://summer-camp-school-miremon5222-gmailcom.vercel.app/users",
            {
              name: displayName,
              photo: photoURL,
              phone: phoneNumber,
              email,
            }
          )
          .then((res) => {
            localStorage.setItem("access_token", res.data.access_token);
          })
          .catch((err) => console.log(err));
        navigate(from);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <p className="flex justify-center gap-x-3" onClick={googleLog}>
        <span className="bg-white/10 p-3 rounded-full cursor-pointer">
          <FaGoogle />
        </span>
      </p>
    </>
  );
};

export default GoogleLog;
