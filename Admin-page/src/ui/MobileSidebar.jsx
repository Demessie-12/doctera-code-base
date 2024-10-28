import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { MdOutlinePreview } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

function MobileSidebar({ setOpenSidebar }) {
  const AdminNav = [
    { title: "Dashboard", to: "/", icon: <MdDashboard /> },
    { title: "Products", to: "/products", icon: <FaProductHunt /> },
    { title: "Orders", to: "/orders", icon: <FaCartPlus /> },
    // { title: "Reviews", to: "/reviews", icon: <MdOutlinePreview /> },
    { title: "Users", to: "/users", icon: <FaUserCircle /> },
  ];
  return (
    <div className="no-doc-scroll fixed inset-0 z-50 flex h-dvh w-dvw overflow-y-auto font-serif md:hidden">
      <div className="z-30 h-full min-h-dvh w-3/5 overflow-y-auto bg-gray-800 transition-transform">
        <div className="fixed top-0 mx-auto flex h-16 w-3/5 items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 align-middle">
          <p className="text-xl font-bold text-green-500">Control Panel</p>
          <div
            className="absolute right-0 top-1 cursor-pointer rounded-full p-1 text-4xl text-gray-200 hover:bg-gray-300 hover:text-black"
            onClick={() => setOpenSidebar(false)}
          >
            <IoCloseOutline />
          </div>
        </div>
        <div className="mt-20 flex flex-col items-start gap-2 pl-5 text-lg font-bold text-gray-200">
          {AdminNav.map((nav, i) => (
            <Link
              key={i}
              to={nav.to}
              onClick={() => setOpenSidebar(false)}
              className="flex cursor-pointer items-center gap-2 px-5"
            >
              {nav.icon}
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
      <div
        className="absolute right-0 z-10 h-full min-h-dvh w-2/5 bg-black bg-opacity-70 sm:w-full"
        onClick={() => setOpenSidebar(false)}
      ></div>
    </div>
  );
}

export default MobileSidebar;
