import React, { useEffect, useState } from "react";
import Card from "../../shared/Card/Card";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useRole from "../../hooks/useRole";
import useAxios from "../../hooks/useAxios";

const EnrroledClass = () => {
  const { role } = useRole();
  const { axiosSecure } = useAxios();
  const [enrroledClass, setEnrroledClass] = useState([]);

  useEffect(() => {
    if (role._id) {
      axiosSecure(`/enrroledClass/${role?._id}`)
        .then((data) => setEnrroledClass(data.data))
        .catch((err) => console.log(err));
    }
  }, [role, axiosSecure]);

  return (
    <>
      <Helmet>
        <title>Enrroled Class | Sports Zone</title>
      </Helmet>
      <div className="my-10">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 mx-auto max-w-4xl gap-4">
          {enrroledClass.map((c) => {
            const { image, className, instructorEmail, instructorName } =
              c.classId || {};
            return (
              <div key={c._id} className="w-64 shadow-xl">
                <figure>
                  <img
                    src={image}
                    className="h-[200px] w-full rounded-t object-cover"
                    alt="class image"
                  />
                </figure>
                <div className=" px-4 my-4  space-y-1 ">
                  <h2 className="card-title font-serif">{className}</h2>
                  <p className="text-md">Techer:{instructorName}</p>
                  <p className="text-sm">Techer Email:{instructorEmail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EnrroledClass;
