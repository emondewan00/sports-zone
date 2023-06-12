import { useState } from "react";
import { FaBookmark, FaSave } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import img from "../../assets/control.png";
import useRole from "../../hooks/useRole";

const SideNav = () => {
  const [open, setOpen] = useState(true);
  const initialpath =useLocation()
  const pth=initialpath?.pathname.split("/")[2] 
  const [path, setPath] = useState(pth);
  const { role = {} } = useRole();
  let routes = [
    {
      title: "Selected Class",
      path: "selectedClasses",
      role: "user",
    },
    { title: "Enrroled Class", path: "enrroledClasses", role: "user" },
    { title: "Payment History", path: "paymentHistorys", role: "user" },
    { title: "Add Class", path: "addClass", role: "instructor" },
    { title: "My Classes", path: "myClasses", role: "instructor" },
    { title: "Manage Class", path: "manageClasses", role: "admin" },
    { title: "Manage User", path: "manageUsers", role: "admin" },
  ];

  let content = routes.map((route, index) => {
    const c = role.role === route.role && (
      <li
        key={index}
        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
    ${route.gap ? "mt-9" : "mt-2"} ${route.path === path && "bg-light-white"} `}
        onClick={() => setPath(route.path)}
      >
        <Link to={route.path}>
          <span className={`${!open && "hidden"}  origin-left duration-200`}>
            {route.title}
          </span>
        </Link>
      </li>
    );
    return c;
  });

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={img}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            <Link to="/">Sports Zone</Link>
          </h1>
        </div>
        <ul className="pt-6">{content}</ul>
      </div>
      <div className="h-screen flex-1 p-7">
        {/* <h1 className="text-2xl font-semibold ">Home Page</h1> */}
        <Outlet />
      </div>
    </div>
  );
};
export default SideNav;
