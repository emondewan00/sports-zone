import React from "react";

const Registration = () => {
  return (
    <div>
      <div className="card">
        <form>
          <div>
            <div className="w-1/2">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="w-1/2">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
