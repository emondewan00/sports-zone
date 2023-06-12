import React from "react";
import img from "../../assets/cover-Img.jpg";
const InstructorsCard = ({ instructor }) => {
  const { name, email, photo } = instructor || {};
  console.log(instructor)
  return (
    <div className=" w-64 bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          className="h-[200px] w-full rounded-t object-cover"
          alt="instructor image"
        />
      </figure>
      <div className="px-4 my-4 space-y-1">
        <h2 className="card-title font-serif"></h2>
        <p className="text-md">Name:{name}</p>
        <p className="text-sm">Email:{email}</p>
        <div className="card-actions justify-end">
          <button className="px-5 bg-base-200 py-2 font-semibold hover:bg-base-300 rounded">
            All Instructors
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;
