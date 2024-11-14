import React from "react";
import { useDocteraContext } from "../context/Doctera.Context";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { useNavbarContext } from "../context/Navbar.context";

function Sidebar() {
  const { sideBar, setSideBar, loggedUser, setLoggedUser } = useNavbarContext();

  const navigation = [
    { name: "New", to: "/c/Brand_New" },
    { name: "Discount", to: "/c/Discount" },
    { name: "Used", to: "/c/Used" },
    { name: "Popular", to: "/c/Popular" },
  ];

  const sideCategories = [
    {
      name: "Diagnostic Tools",
      to: "/c/Diagnostic-Tools",
      icon: "https://i.pinimg.com/564x/d8/f2/b5/d8f2b5489be670c61929ffd02dd8e32e.jpg",
    },
    {
      name: "Imagings",
      to: "/c/Imagings",
      icon: "https://res.cloudinary.com/dx1cyrkdk/image/upload/v1730118838/hmgbfp4tqpyiurxbk3ma.jpg",
    },
    {
      name: "Laboratory equipments",
      to: "/c/Laboratory-equipments",
      icon: "https://res.cloudinary.com/dx1cyrkdk/image/upload/v1730123174/fsdwx9bpbuvh0oaodrqq.jpg",
    },
    {
      name: "Respiratory care",
      to: "/c/Respiratory-care",
      icon: "https://res.cloudinary.com/dx1cyrkdk/image/upload/v1730121367/sl25lg225bnd8z4xbdym.jpg",
    },
    {
      name: "Supportive and physiotherapy",
      to: "/c/Supportive-and-physiotherapy",
      icon: "https://res.cloudinary.com/dx1cyrkdk/image/upload/v1730123057/ogbsbapahrfooajjykdu.jpg",
    },
    {
      name: "Homecare",
      to: "/c/Homecare",
      icon: "https://res.cloudinary.com/dx1cyrkdk/image/upload/v1730123068/yzc2sbqyzu3pgk5nkpvr.jpg",
    },
    {
      name: "Furnitures",
      to: "/c/Furnitures",
      icon: "https://res.cloudinary.com/dx1cyrkdk/image/upload/v1730121357/sf08vvlkutqlnsv91dqo.jpg",
    },
  ];
  return (
    <div className="no-doc-scroll fixed inset-0 z-50 flex h-dvh w-dvw overflow-y-auto">
      <div className="relative z-30 h-dvh min-h-dvh w-4/5 overflow-y-auto bg-gray-200 min-[480px]:w-3/5 sm:w-80">
        <div className="fixed top-0 mx-auto flex h-16 w-4/5 items-center justify-center bg-DocBlue min-[480px]:w-3/5 sm:w-80">
          <p className="text-2xl font-bold text-white">Menu</p>
          <div
            className="absolute right-1 top-1 cursor-pointer rounded-full p-2 text-4xl text-red-600 hover:bg-red-500 hover:text-black"
            onClick={() => setSideBar(false)}
          >
            <IoCloseOutline />
          </div>
        </div>
        <div className="mb-28 mt-16 bg-fixed">
          <div className="bg-gradient-to-b from-DocBlue to-gray-200">
            <div className="mx-auto grid w-2/3 min-w-52 grid-cols-2 gap-1 rounded-b-xl bg-gradient-to-b from-DocBlue/90 to-DocBlue py-2 text-DocOrange shadow-lg sm:hidden">
              {navigation.map((nav, i) => (
                <Link
                  key={i}
                  to={nav.to}
                  className="ml-5 w-fit pb-1 text-lg font-semibold"
                  onClick={() => setSideBar(false)}
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mx-2 flex-col space-y-1 pt-4 sm:mx-4">
            {sideCategories.map((category) => (
              <Link
                key={category.name}
                to={category.to}
                onClick={() => setSideBar(false)}
                className="flex rounded-md px-2 text-lg font-medium text-black hover:bg-gray-900 hover:text-white"
              >
                <img
                  src={category.icon}
                  className="mr-2 h-8 w-auto rounded-full"
                />
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="fixed bottom-0 mt-7 flex w-4/5 flex-col bg-gray-900 pt-3 text-center text-DocOrange min-[480px]:w-3/5 sm:w-80">
          <div className="flex justify-between px-5 sm:px-10">
            <a href="tel:251900763647">+251900763647</a>
            <Link to={"/contact"} onClick={() => setSideBar(false)}>
              Contact Us
            </Link>
          </div>
          <p className="h-16 py-5 align-middle">
            <Link
              to={loggedUser ? "/profile" : "/login"}
              onClick={() => setSideBar(false)}
              className="rounded-xl border border-gray-300 bg-DocBlue px-3 py-1.5 text-white"
            >
              {loggedUser ? "Go to profile" : "Sign in"}
            </Link>
          </p>
        </div>
      </div>

      <div
        className="absolute right-0 z-10 h-full min-h-dvh w-2/5 bg-black bg-opacity-70 sm:w-full"
        onClick={() => setSideBar(false)}
      ></div>
    </div>
  );
}

export default Sidebar;
