import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-5 px-3 rounded-t-3xl  shadow-lg  text-white font-semibold flex flex-col gap-5 mt-5 pb-10 bg-gradient-to-b from-gray-900 via-slate-600 to-gray-900 ">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
        <div className="flex gap-3">
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="w-10 h-auto"
            alt="Doctera Logo"
          />
          <span className="text-white font-bold text-2xl ">
            Doctera<span className="font-thin">®</span>
          </span>
        </div>
        <div className="flex flex-col  gap-3 ">
          <p className="px-5 text-justify">
            Doctera is most visited online shop in medical sector. We trades
            medical equipment, medical supplies, physiotherapy products,
            laboratory equipment, and equipment for home care such as beds,
            oxygen therapy devices, wheelchairs, etc
          </p>
          <div className="flex gap-5 pt-2 mx-auto justify-center">
            <Link to="#" className="text-xl hover:text-yellow-600">
              <FaFacebook />
            </Link>
            <Link to="#" className="text-xl hover:text-yellow-600">
              <FaInstagram />
            </Link>
            <Link to="#" className="text-xl hover:text-yellow-600">
              <FaXTwitter />
            </Link>
            <Link to="#" className="text-xl hover:text-yellow-600">
              <FaTiktok />
            </Link>
            <Link to="#" className="text-xl hover:text-yellow-600">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 px-5 w-full sm:max-w-3xl mx-auto">
        <div className="flex flex-col gap-0.5 w-fit ">
          <h1 className="text-white text-xl font-bold mb-1">Categories</h1>
          <Link to={"/c/discount"} className="pl-3 hover:text-yellow-500">
            Discount
          </Link>
          <Link to={"/c/New-Arrival"} className="pl-3  hover:text-yellow-500">
            New Arrival
          </Link>
          <Link to={"/c/popular"} className="pl-3  hover:text-yellow-500">
            Popular
          </Link>
          <Link to={"/"} className="pl-3  hover:text-yellow-500">
            For You
          </Link>
        </div>
        <div className="flex flex-col gap-0.5 w-fit">
          <h1 className="text-white text-xl font-bold mb-1">Company</h1>
          <Link className="pl-3 hover:text-yellow-500">About</Link>
          <Link className="pl-3 hover:text-yellow-500">Contact</Link>
          <Link className="pl-3 hover:text-yellow-500">Address</Link>
          <Link className="pl-3 hover:text-yellow-500">Partners</Link>
        </div>
        <div className="flex flex-col gap-0.5 w-fit ">
          <h1 className="text-white text-xl font-bold mb-1">
            Customer Service
          </h1>
          <Link className="pl-3 hover:text-yellow-500">Shipping costs</Link>
          <Link className="pl-3  hover:text-yellow-500">Payment methods</Link>
          <Link className="pl-3  hover:text-yellow-500">Delivery Time</Link>
          <Link className="pl-3  hover:text-yellow-500">Terms and Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
