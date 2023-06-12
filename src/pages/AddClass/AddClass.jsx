import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Success from "../../message/Success";

const AddClass = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { currentUser } = useAuth();
  const { axiosSecure } = useAxios();
  const onSubmit = async (data) => {
    const res = await axiosSecure.post("/classes", data);
    if (res.status === 200) {
      Success("success", "Successfully add a new class");
    }
  };
  return (
    <div className="container m-auto  max-w-4xl p-8 my-24 border shadow-md rounded">
      <div className="">
        <h1 className="text-4xl text-center pb-4">Add New Class</h1>

        <form
          className="w-full max-w-5xl mx-auto "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="form-control px-3 mb-6 md:mb-0">
              <label
                className="block capitalize tracking-wide text-lg  mb-2"
                htmlFor="name"
              >
                Class Name
              </label>
              <input
                className="appearance-none block w-full  text-lg border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Enter class name"
                name="className"
                {...register("className", { required: true })}
              />
            </div>
            <div className="form-control px-3">
              <label
                className="block capitalize tracking-wide text-lg  mb-2"
                htmlFor="instructorName"
              >
                Instructor name
              </label>
              <input
                className="appearance-none block w-full  text-lg border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="instructorName"
                type="text"
                placeholder="Enter Instructor name "
                name="Instructor name"
                {...register("instructorName", { required: true })}
                defaultValue={currentUser?.displayName}
                readOnly
              />
            </div>

            <div className="form-control px-3 mb-6 md:mb-0">
              <label
                className="block capitalize tracking-wide text-lg  mb-2"
                htmlFor="instructorEmail"
              >
                Instructor Email
              </label>
              <input
                className="appearance-none block w-full  text-lg border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="instructorEmail"
                type="text"
                placeholder="Enter Instructor Email "
                name="instructorEmail"
                defaultValue={currentUser?.email}
                {...register("instructorEmail", { required: true })}
                readOnly
              />
            </div>
            <div className="form-control px-3">
              <label
                className="block capitalize tracking-wide text-lg  mb-2"
                htmlFor="availableSeats"
              >
                Available seats
              </label>
              <input
                className="appearance-none block w-full  text-lg border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="availableSeats"
                type="number"
                placeholder="Available seats "
                name="availableSeats"
                {...register("availableSeats", { required: true })}
              />
            </div>

            <div className="form-control px-3 mb-6 md:mb-0">
              <label
                className="block capitalize tracking-wide text-lg  mb-2"
                htmlFor="price"
              >
                price
              </label>
              <input
                className="appearance-none block w-full  text-lg border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="price"
                type="number"
                placeholder="Enter Price"
                name="price"
                {...register("price", { required: true })}
              />
            </div>
            <div className="form-control px-3">
              <label
                className="block capitalize tracking-wide text-lg  mb-2"
                htmlFor="photo-url"
              >
                Photo
              </label>
              <input
                className="appearance-none block w-full  text-lg border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="photo-url"
                type="url"
                placeholder="Enter photo url"
                name="image"
                {...register("image", { required: true })}
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary ">
              Add Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
