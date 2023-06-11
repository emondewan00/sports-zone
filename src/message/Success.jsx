import React from "react";
import Swal from "sweetalert2";

const Success = (icon,message,confirmBtn=false) => {
  const success = Swal.fire({
    position: "center",
    icon: icon,
    title: message,
    showConfirmButton: confirmBtn,
    timer: 1500,
  });
  return Success;
};

export default Success;
