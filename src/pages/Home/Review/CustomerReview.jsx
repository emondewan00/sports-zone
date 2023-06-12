import React from "react";

const CustomerReview = () => {
  const review = [
    {
      id: 1,
      name: "Spider man",
      img: "/img-gallary/gallary2.jpg",
      review:
        "The meal prepared by the chef was exquisite! Every dish was carefully crafted and full of flavor. The chef was also incredibly professional and attentive to our needs throughout the entire dining experience.",
    },
    {
      id: 2,
      name: "Iron Man",
      img: "/img-gallary/gallary3.jpg",
      review:
        "I was blown away by the personal chef services provided by this chef. Not only was the food amazing, but the entire process was seamless and stress-free. I would highly recommend this chef for any special occasion or event.",
    },
    {
      id: 3,
      name: " Batman",
      img: "/img-gallary/gallary5.jpg",
      review:
        "I have a lot of dietary restrictions and was worried about finding a chef who could accommodate my needs. This chef went above and beyond to create a menu that was not only delicious but also met all of my dietary requirements.",
    },
  ];

  return (
    <div className="container mx-auto my-24 ">
      <h1 className="text-4xl text-center my-8" >Customer Review</h1>
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
