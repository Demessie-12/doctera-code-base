import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { MdOutlinePreview } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

function Sidebar() {
  const AdminNav = [
    { title: "Dashboard", to: "/", icon: <MdDashboard /> },
    { title: "Products", to: "/products", icon: <FaProductHunt /> },
    { title: "Orders", to: "/orders", icon: <FaCartPlus /> },
    // { title: "Reviews", to: "/reviews", icon: <MdOutlinePreview /> },
    { title: "Users", to: "/users", icon: <FaUserCircle /> },
  ];
  const location = useLocation();
  const path = location.pathname.split("/");

  return (
    <div>
      <div className="sticky top-0 mb-[-100px] mt-[-58px] flex h-full w-full flex-col overflow-y-auto pb-44 pt-14 transition-transform">
        <div className="flex justify-center align-middle">
          <h1 className="flex items-center py-2 text-xl font-semibold">
            Doctera Slogan
          </h1>
        </div>
        <div className="mt-2 flex flex-col items-start bg-gray-300 text-lg font-bold text-gray-200">
          {AdminNav.map((nav, i) => (
            <p key={i} className={`w-full`}>
              <Link
                to={nav.to}
                className={`pl-15 flex w-full cursor-pointer items-center gap-2 ${nav.to == `/${path[1]}` ? "bg-gradient-to-r from-blue-900 to-gray-900 text-yellow-400" : "bg-gradient-to-r from-black via-black to-gray-900"} px-10 py-1`}
              >
                {nav.icon}
                {nav.title}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
