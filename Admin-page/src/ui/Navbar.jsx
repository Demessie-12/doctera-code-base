import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaCartArrowDown, FaCloudUploadAlt } from "react-icons/fa";
import secureLocalStorage from "react-secure-storage";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import MobileSidebar from "./MobileSidebar";
import { LogoutApi } from "../Services/apiAuthentication";

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { loading, logoutHook } = LogoutApi();

  const handleLogout = async (e) => {
    try {
      e.preventDefault();
      toast.loading("Loging out");
      await logoutHook();
      location.replace("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="sticky top-0 z-40 w-full">
      {openSidebar && <MobileSidebar setOpenSidebar={setOpenSidebar} />}
      <div className="relative mx-auto flex h-16 items-center justify-between bg-blue-900 px-2 md:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            className="flex px-2 text-xl md:hidden"
            onClick={() => setOpenSidebar(true)}
          >
            <FaBarsStaggered />
          </button>
          <Link to="/" className="cursor-pointer text-xl font-semibold">
            Doctera's <span className="text-green-500">Admin</span>
          </Link>
        </div>
        <div className="mr-3 flex gap-3">
          <Link
            to="/orders"
            className="relative flex pt-1 text-center text-3xl text-green-500"
          >
            <FaCartArrowDown />
            <p className="absolute bottom-5 left-5 text-xl font-bold text-white"></p>
          </Link>
          <Link
            to="/products/upload"
            className="flex pt-1 text-center text-3xl"
          >
            <FaCloudUploadAlt />
          </Link>
          <Menu as="div" className="relative ml-1">
            <div>
              <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src={
                    secureLocalStorage.getItem("logged-user")?.profilePic ||
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  }
                  className="h-9 w-9 rounded-full"
                />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-300 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <Link
                  to="/profile"
                  className="block px-4 py-2 pt-3 text-sm font-semibold text-black data-[focus]:bg-gray-100"
                >
                  Your Profile
                </Link>
              </MenuItem>
              <MenuItem>
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 pt-3 text-left text-sm font-semibold text-black data-[focus]:bg-gray-100"
                >
                  Sign out
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
