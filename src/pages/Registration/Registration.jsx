import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [passErr, setPassErr] = useState("");
  const onSubmit = (data) => {
    if (data.password !== data.conFirmPass) {
      return setPassErr("password is not match");
    }
  };
  return (
    <div className="my-10">
      <div className=" bg-gray-200 max-w-3xl mx-auto shadow-md p-20">
        <h1 className="text-3xl text-center my-4 ">SingUp</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-4">
            <div className="">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="  p-2 outline-none w-full "
                name="name"
                id="name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="  p-2 outline-none w-full "
                name="email"
                id="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                className="  p-2 outline-none w-full "
                id="gender"
                defaultValue=""
                {...register("gender", { required: true })}
              >
                <option value="" disabled>
                  Pick One
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="  p-2 outline-none w-full "
                name="password"
                id="password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="">
              <label htmlFor="conFirmPass">Confirm Password</label>
              <input
                type="password"
                className="  p-2 outline-none w-full "
                name="conFirmPass"
                {...register("conFirmPass", { required: true })}
                id="conFirmPass"
              />
            </div>
            <div className="">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="  p-2 outline-none w-full "
                name="address"
                id="address"
                {...register("address")}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-x-4 justify-center  my-4">
            <div>
              <label htmlFor="photo">Photo URL</label>
              <input
                type="url"
                className="  p-2 outline-none w-full "
                {...register("photo", { required: true })}
                name="photo"
                id="photo"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                className="  p-2 outline-none w-full "
                {...register("phone", { minLength: 11, maxLength: 11 })}
                name="phone"
                id="phone"
              />
            </div>
          </div>
          <div className="text-center ">
            <input
              className="btn px-10 tracking-wider"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
        <div className="divider"> or</div>
        <Link to="/login">All ready have an account ?</Link>
      </div>
    </div>
  );
};

export default Registration;
