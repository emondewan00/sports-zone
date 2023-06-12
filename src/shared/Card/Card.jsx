import React from "react";
import img from "../../assets/cover-Img.jpg";

const Card = ({ c }) => {
  const {
    className,
    image,
    instructorEmail,
    instructorName,
    price,
    availableSeats,
  } = c || {};
  return (
    <div className=" w-64 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          className="h-[200px] w-full rounded-t object-cover"
          alt="class image"
        />
      </figure>
      <div className="px-4 my-4 space-y-1">
        <h2 className="card-title">{className}</h2>
        <p className="text-md">Techer:{instructorName}</p>
        <p className="text-sm">Techer Email:{instructorEmail}</p>
        <ul className="flex justify-between ">
          <li className="text-md font-semibold">Price:${price}</li>
          <li>Av Seats:{availableSeats}</li>
        </ul>
        <div className="card-actions justify-end">
          <button className="px-5 bg-base-200 py-2 font-semibold hover:bg-base-300 rounded">Select</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
