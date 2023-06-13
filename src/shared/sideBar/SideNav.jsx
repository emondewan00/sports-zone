import { useState } from "react";
import { FaBookmark, FaSave } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import img from "../../assets/control.png";
import useRole from "../../hooks/useRole";
import { HiMenu } from "react-icons/hi";

const SideNav = () => {
  // const [open, setOpen] = useState(true);
  const [nav, setNav] = useState(false);
  const initialpath = useLocation();
  const pth = initialpath?.pathname.split("/")[2];
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

  const menuHandler = () => {
    setNav(!nav);
  };
  let content = routes.map((route, index) => {
    const c = role.role === route.role && (
      <li key={route.path} className="me-2">
        <Link to={route.path}>{route.title}</Link>
      </li>
    );
    return c;
  });

  return (
    <div className="shadow">
      <nav className="p-5  container mx-auto md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center ">
          <Link
            to="/"
            className="text-2xl hover:text-4xl delay-200 transition-all duration-300 ease-in-out  font-serif cursor-pointer"
          >
            Sports Zone
          </Link>

          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={menuHandler}
          >
            <HiMenu />
          </span>
        </div>
        <ul
          className={`md:flex md:items-center bg-base-100 overflow-hidden z-40 md:z-auto absolute md:sticky  w-full left-0  md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100   transition-all ease-in duration-500 gap-2 ${
            nav ? "top-[70px]" : "top-[-400px]"
          }`}
        >
          {content}
        </ul>
      </nav>
    </div>
    // <div className="flex">
    //   <div
    //     className={` ${
    //       open ? "w-72" : "w-20 "
    //     } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    //   >
    //     <img
    //       src={img}
    //       className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
    //        border-2 rounded-full  ${!open && "rotate-180"}`}
    //       onClick={() => setOpen(!open)}
    //     />
    //     <div className="flex gap-x-4 items-center">
    //       <h1
    //         className={`text-white origin-left font-medium text-xl duration-200 ${
    //           !open && "scale-0"
    //         }`}
    //       >
    //         <Link to="/">Sports Zone</Link>
    //       </h1>
    //     </div>
    //     <ul className="pt-6">{content}</ul>
    //   </div>
    //   <div className="h-screen flex-1 p-7">
    //     {/* <h1 className="text-2xl font-semibold ">Home Page</h1> */}
    //     <Outlet />
    //   </div>
    // </div>
  );
};
export default SideNav;
