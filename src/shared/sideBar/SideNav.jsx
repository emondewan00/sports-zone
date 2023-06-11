import { useState } from "react";
import { FaBookmark, FaSave } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const SideNav = () => {
  const [open, setOpen] = useState(true);
  const [idx, setIndex] = useState(0);
  const Menus = [
    { title: "Selected Class", icon: <FaBookmark /> },
    { title: "Enrroled Class" },
    { title: "Payment History" },
  ];
  console.log(idx);
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          {/* <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          /> */}
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            <Link to="/">Sports Zone</Link>
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === idx && "bg-light-white"
              } `}
              onClick={() => setIndex(index)}
            >
              {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
              {Menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        {/* <h1 className="text-2xl font-semibold ">Home Page</h1> */}
        <Outlet />
      </div>
    </div>
  );
};
export default SideNav;
