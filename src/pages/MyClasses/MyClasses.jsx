import React from "react";

const MyClasses = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-3xl my-4">My Classes</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-primary text-white ">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor name</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge-sm">Desktop Support Technician</span>
              </td>
              <td>
                <p className="font-semibold">10</p>
              </td>
              <th>
                <p>$10</p>
              </th>
              <th>
                <p>pending</p>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
