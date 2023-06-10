import React from "react";

const Registration = () => {
  return (
    <div>
      <div className="card max-w-2xl mx-auto shadow p-4">
        <form>
          <div className="flex gap-x-4">
            <div className="w-1/2">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control bg-gray-200 p-2 outline-none w-full" name="name" id="name" />
            </div>
            <div className="w-1/2">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control bg-gray-200 p-2 outline-none w-full" name="email" id="email" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
