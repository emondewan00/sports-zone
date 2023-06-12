import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import GoogleLog from "../../shared/googleLOg/GoogleLog";
import axios from "axios";

const Login = () => {
  const { register, watch, handleSubmit, formState } = useForm();
  const { signInWithEmailPass } = useAuth();
  const [loginErr, setLoginErr] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailPass(email, password)
      .then((res) => {
        axios
          .post("http://localhost:4999/users", { email })
          .then((res) => {
            navigate(from);
            localStorage.setItem("access_token", res.data.access_token);
          })
          .catch((err) => setLoginErr("login failed"));
      })
      .catch((err) => setLoginErr("login failed"));
  };
  return (
    <div className="flex h-[90vh] justify-center items-center">
      <div className="card flex-shrink-0 w-full max-w-sm mx-auto my-10 shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body">
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
                id="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                id="password"
                {...register("password", { required: true })}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <p className="text-red-600">{loginErr}</p>
            </div>
          </div>
        </form>
        <div className="p-6 pt-0">
          <div className="divider"> or </div>
          <Link to="/singUp">Register Now?</Link> <GoogleLog />
        </div>
      </div>
    </div>
  );
};

export default Login;
