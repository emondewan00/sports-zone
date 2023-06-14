import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Success from "../../message/Success";
import { useNavigate } from "react-router-dom";

const CheckOutForm = ({ selectedClass, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const { axiosSecure } = useAxios();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  //payment intent request i server
  const { data, isError } = useQuery({
    queryKey: ["payment intent"],
    queryFn: async () => {
      const res = await axiosSecure.post("/payments/create-payment-intent", {
        price,
      });
      return res.data;
    },
  });

  //after success payment
  const { data: successData, mutate } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post("/payments", data);
      if (res.status === 200) {
        Success("success", "Payment Success");
        navigate("/dashbord/enrroledClasses");
      }
      return res.data;
    },
  });

  //payment form handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmErr } =
      await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: currentUser?.displayName,
            email: currentUser?.email,
            phone: currentUser?.phone,
          },
        },
      });
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const payment = {
        ...selectedClass,
        transactionId: paymentIntent.id,
      };
      console.log(paymentIntent.id);
      mutate(payment);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="text-center my-4">
        <button
          className="btn text-center btn-secondary"
          type="submit"
          disabled={!stripe || !data?.clientSecret || processing}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckOutForm;
