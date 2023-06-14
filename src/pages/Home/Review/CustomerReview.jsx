import React from "react";

const CustomerReview = () => {
  const review = [
    {
      id: 1,
      name: "Sarah T.",
      img: "/person-profile-icon.svg",
      review:
        "I enrolled my son in the Summer Camp Sports Academy, and it was an incredible experience for him. The academy offers a wide range of sports activities, including basketball, soccer, swimming, and more.",
    },
    {
      id: 2,
      name: "John M.",
      img: "/person-profile-icon.svg",
      review:
        "My daughter had a fantastic time at the Summer Camp Sports Academy. She loves playing volleyball, and the academy provided her with top-level coaching and training. The coaches were knowledgeable .",
    },
    {
      id: 3,
      name: "Emily L.",
      img: "/person-profile-icon.svg",
      review:
        "The Summer Camp Sports Academy exceeded my expectations. I enrolled my two children, ages 10 and 12, in the camp, and they had a blast. The variety of sports offered allowed them to explore different activities .",
    },
  ];

  return (
    <div className="container mx-auto my-24 ">
      <h1 className="text-4xl text-center my-8" >Feedback</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-8 ">
        {review.map((r) => (
          <div
            key={r.id}
            className=" w-80 md:w-[350px]  card-hover my-4 md:my-0 bg-gray-200 rounded p-4"
            
          >
            <div className="avatar left-24">
              <div className="w-24  rounded-full">
                <img src={r.img} />
              </div>
            </div>
            <div className="text-center">
              <q>{r.review}</q>
              <h1 className="text-2xl text-purple-400 ">{r.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
