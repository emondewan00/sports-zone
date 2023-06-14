import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { useQuery } from "@tanstack/react-query";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_gatway);
import useAxios from "../../hooks/useAxios";
const Payment = () => {
  const { id } = useParams();
  const { axiosSecure } = useAxios();
  const { data = {} } = useQuery({
    queryKey: ["selectedClass", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selectedClasses/single/${id}`);
      return res?.data[0];
    },
  });
  //   console.log({
  //     selectedId: id,
  //     classId: data?.classId?._id,
  //     userId: data?.userId,
  //     price: data?.classId?.price,
  //   });

  const selectedClass = {
    selectedId: id,
    classId: data?.classId?._id,
    userId: data?.userId,
  };

  return (
    <>
      <Helmet>
        <title>Payment | Sports Zone</title>
      </Helmet>
      <Elements stripe={stripePromise}>
        <div className="max-w-md mx-auto">
          <h1 className="text-center my-4">Pay Now</h1>
          <CheckOutForm
            selectedClass={selectedClass}
            price={data?.classId?.price}
          />
        </div>
      </Elements>
    </>
  );
};

export default Payment;
