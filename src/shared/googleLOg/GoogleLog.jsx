import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const GoogleLog = () => {
  const { googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const googleLog = () => {
    googleLogIn()
      .then((res) => {
        navigate(from);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="divider after:bg-blue-600 before:bg-blue-600">OR</div>
      <p className="flex justify-center gap-x-3" onClick={googleLog}>
        <span className="bg-white/10 p-3 rounded-full cursor-pointer">
          <FaGoogle />
        </span>
      </p>
    </>
  );
};

export default GoogleLog;
