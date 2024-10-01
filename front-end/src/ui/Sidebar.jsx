import React from "react";
import { useDocteraContext } from "../context/Doctera.Context";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import StarIcon from "./../Assets/star_icon.png";
import { useNavbarContext } from "../context/Navbar.context";

function Sidebar() {
  const { sideBar, setSideBar, loggedUser, setLoggedUser } = useNavbarContext();

  const navigation = [
    { name: "New", to: "/c/Brand_New" },
    { name: "Discount", to: "/c/discount" },
    { name: "Used", to: "/c/Used" },
    { name: "Popular", to: "/c/popular" },
  ];

  const sideCatagories = [
    {
      name: "Stethoscopes",
      to: "/c/Sthetoscope",
      icon: "https://i.pinimg.com/564x/d8/f2/b5/d8f2b5489be670c61929ffd02dd8e32e.jpg",
    },
    {
      name: "Labs and Imagings",
      to: "/c/Labs-and-Imagings",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhVXRj4fPzYQFSDWsHuDNE-o2zVWsmyScwA&s",
    },
    {
      name: "Physiotherapy and Supportives",
      to: "/c/Physiotherapy-and-Supportives",
      icon: "",
    },
    { name: "Home Care", to: "/c/Home-Care", icon: "" },
    { name: "Used Medicals", to: "/c/Used", icon: "" },
    { name: "Pulse Oximeters", to: "/c/Pulse-Oximeters", icon: "" },
    {
      name: "Hammer and Neuro Tools",
      to: "/c/Hammer-and Neuro-Tools",
      icon: "",
    },
    {
      name: "Weight and Height scale",
      to: "/c/Weight-and-Height-scale",
      icon: "",
    },
    { name: "Glucometers", to: "/c/Glucometers", icon: "" },
    {
      name: "ENT and Ophthalmology Tools",
      to: "/c/ENT-and-Ophthalmology",
      icon: "",
    },
  ];
  return (
    <div className="flex no-doc-scroll fixed inset-0 w-dvw h-dvh z-50 overflow-y-auto">
      <div className=" bg-gray-200 z-30 w-4/5 min-[480px]:w-3/5 sm:w-80 h-full min-h-dvh overflow-y-auto">
        <div className="flex fixed top-0 items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 mx-auto w-4/5 min-[480px]:w-3/5 sm:w-80 h-16">
          <p className=" text-white font-bold text-2xl">Menu</p>
          <div
            className="absolute top-1 right-1 rounded-full text-red-600 text-4xl p-2 cursor-pointer hover:bg-white hover:text-black"
            onClick={() => setSideBar(false)}
          >
            <IoCloseOutline />
          </div>
        </div>
        <div className="mt-16 bg-fixed">
          <div className=" bg-gradient-to-b from-gray-700 to-gray-200">
            <div className="grid grid-cols-2 gap-1 sm:hidden mx-auto w-2/3 min-w-52 py-2 shadow-lg rounded-b-xl bg-gradient-to-b from-gray-700 to-blue-900  text-yellow-300">
              {navigation.map((nav, i) => (
                <Link
                  key={i}
                  to={nav.to}
                  className="pb-1 ml-5 font-semibold text-lg  w-fit"
                  onClick={() => setSideBar(false)}
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-col space-y-1 pt-4 mx-2 sm:mx-4 ">
            {sideCatagories.map((category) => (
              <Link
                key={category.name}
                to={category.to}
                onClick={() => setSideBar(false)}
                className="flex px-2 text-black hover:bg-gray-900 hover:text-white font-medium text-lg rounded-md"
              >
                <img
                  src={category.icon}
                  className=" h-8 w-auto rounded-full mr-2"
                />
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-7 pt-3 w-full bg-gray-900 text-center text-yellow-300">
          <div className="flex justify-between px-5 sm:px-10">
            <a href="tel:251900763647">+251900763647</a>
            <Link to={"/contact"} onClick={() => setSideBar(false)}>
              Contact Us
            </Link>
          </div>
          <p className="h-16 align-middle py-5">
            <Link
              to={loggedUser ? "/profile" : "/login"}
              onClick={() => setSideBar(false)}
              className="py-1.5 px-3 border border-gray-300 text-white rounded-xl"
            >
              {loggedUser ? "Go to profile" : "Sign in"}
            </Link>
          </p>
        </div>
      </div>

      <div
        className="absolute right-0 min-h-dvh h-full w-2/5 sm:w-full bg-black bg-opacity-70 z-10"
        onClick={() => setSideBar(false)}
      ></div>
    </div>
  );
}

export default Sidebar;
