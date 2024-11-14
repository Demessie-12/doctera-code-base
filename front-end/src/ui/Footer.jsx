import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Doctera_Banner from "./../Assets/Doctera_Banner.png";

import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="mt-10 flex flex-col gap-5 rounded-t-3xl bg-gradient-to-b from-DocOrange/90 to-DocOrange px-3 py-5 pb-10 font-semibold text-white shadow-lg md:mt-16">
      <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[auto_1fr] sm:gap-1">
        <div className="flex w-fit">
          <img
            src={Doctera_Banner}
            className="h-20 w-auto"
            alt="Doctera Logo"
          />
        </div>
        <div data-aos="zoom-in" className="flex flex-col gap-3">
          <p className="px-5 text-justify font-semibold text-gray-900">
            Doctera is most visited online shop in medical sector. We trades
            medical equipment, medical supplies, physiotherapy products,
            laboratory equipment, and equipment for home care such as beds,
            oxygen therapy devices, wheelchairs, etc
          </p>
          <div className="mx-auto flex justify-center gap-5 pt-2 text-DocBlue">
            <Link
              to="https://www.facebook.com/DocteraMarket?mibextid=ZbWKwL"
              target="_blank"
              className="text-2xl hover:text-white"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://www.instagram.com/doctera.market/"
              target="_blank"
              className="text-2xl hover:text-white"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://t.me/DocteraMarket"
              target="_blank"
              className="text-2xl hover:text-white"
            >
              <FaTelegram />
            </Link>
            <Link
              to="https://www.tiktok.com/@docteramarket?_t=8rCpkJtcS7r&_r=1"
              target="_blank"
              className="text-2xl hover:text-white"
            >
              <FaTiktok />
            </Link>
            <Link
              to="https://www.linkedin.com/company/doceramarket/?viewAsMember=true"
              target="_blank"
              className="text-2xl hover:text-white"
            >
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
          <Link to={"/c/Discount"} className="pl-3 hover:text-white">
            Discount
          </Link>
          <Link to={"/c/New-Arrival"} className="pl-3 hover:text-white">
            New Arrival
          </Link>
          <Link to={"/c/Popular"} className="pl-3 hover:text-white">
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
