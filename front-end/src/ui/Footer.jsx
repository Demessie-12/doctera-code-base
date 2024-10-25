import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="mt-10 flex flex-col gap-5 rounded-t-3xl bg-gradient-to-b from-DocOrange/90 to-DocOrange px-3 py-5 pb-10 font-semibold text-white shadow-lg md:mt-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
        <div className="flex gap-3">
          <img
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="h-auto w-10"
            alt="Doctera Logo"
          />
          <span className="text-2xl font-bold text-DocBlue">
            Doctera<span className="font-thin">®</span>
          </span>
        </div>
        <div data-aos="zoom-in" className="flex flex-col gap-3">
          <p className="px-5 text-justify font-semibold text-gray-900">
            Doctera is most visited online shop in medical sector. We trades
            medical equipment, medical supplies, physiotherapy products,
            laboratory equipment, and equipment for home care such as beds,
            oxygen therapy devices, wheelchairs, etc
          </p>
          <div className="mx-auto flex justify-center gap-5 pt-2 text-DocBlue">
            <Link to="#" className="text-xl hover:text-white">
              <FaFacebook />
            </Link>
            <Link to="#" className="text-xl hover:text-white">
              <FaInstagram />
            </Link>
            <Link to="#" className="text-xl hover:text-white">
              <FaXTwitter />
            </Link>
            <Link to="#" className="text-xl hover:text-white">
              <FaTiktok />
            </Link>
            <Link to="#" className="text-xl hover:text-white">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="mx-auto grid w-full grid-cols-2 gap-5 px-5 sm:max-w-3xl sm:grid-cols-3"
      >
        <div className="flex w-fit flex-col gap-0.5 text-DocBlue">
          <h1 className="mb-1 text-xl font-bold text-white">Categories</h1>
          <Link to={"/c/discount"} className="pl-3 hover:text-white">
            Discount
          </Link>
          <Link to={"/c/New-Arrival"} className="pl-3 hover:text-white">
            New Arrival
          </Link>
          <Link to={"/c/popular"} className="pl-3 hover:text-white">
            Popular
          </Link>
          <Link to={"/"} className="pl-3 hover:text-white">
            For You
          </Link>
        </div>
        <div className="flex w-fit flex-col gap-0.5 text-DocBlue">
          <h1 className="mb-1 text-xl font-bold text-white">Company</h1>
          <Link className="hover:textwhite pl-3">About</Link>
          <Link className="hover:textwhite pl-3">Contact</Link>
          <Link className="hover:textwhite pl-3">Address</Link>
          <Link className="hover:textwhite pl-3">Partners</Link>
        </div>
        <div className="flex w-fit flex-col gap-0.5 text-DocBlue">
          <h1 className="mb-1 text-xl font-bold text-white">
            Customer Service
          </h1>
          <Link className="pl-3 hover:text-white">Shipping costs</Link>
          <Link className="pl-3 hover:text-white">Payment methods</Link>
          <Link className="pl-3 hover:text-white">Delivery Time</Link>
          <Link className="pl-3 hover:text-white">Terms and Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
