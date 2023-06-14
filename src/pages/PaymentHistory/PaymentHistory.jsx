import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useRole from "../../hooks/useRole";
import useAxios from "../../hooks/useAxios";
import moment from "moment/moment";

const PaymentHistory = () => {
  const { role } = useRole();
  const { axiosSecure } = useAxios();
  const [paymentHistory, setPaymentHistory] = useState([]);
  useEffect(() => {
    if (role._id) {
      axiosSecure(`/payments/${role?._id}`)
        .then((data) => setPaymentHistory(data.data))
        .catch((err) => console.log(err));
    }
  }, [role, axiosSecure]);
  console.log(paymentHistory);
  return (
    <>
      <Helmet>
        <title>Payment History | Sports Zone</title>
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-3xl my-4">My Payment</h1>
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-primary text-white ">
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Instructor name</th>
                <th>Transaction Id</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((c, idx) => {
                const { image,className,instructorName,instructorEmail,price } = c.classId;
                return (
                  <tr key={c._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Class image " />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{className}</div>
                          
                        </div>
                      </div>
                    </td>
                    <td>
                      {instructorName}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {instructorEmail}
                      </span>
                    </td>
                    <td>{c.transactionId}</td>
                    <th>
                      <p className="text-right">${price}</p>
                    </th>
                    <td>
                      {moment(c.paymentTime).format('MMMM Do, h:mm:ss a')}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
