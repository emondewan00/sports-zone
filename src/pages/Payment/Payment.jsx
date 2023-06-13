import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title>Payment | Sports Zone</title>
      </Helmet>
    </>
  );
};

export default Payment;
