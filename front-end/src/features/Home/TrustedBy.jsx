import React, { useEffect } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

function TrustedBy() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="flex flex-col justify-center px-2 text-center">
        <h1 className="mx-auto w-fit text-2xl font-bold text-DocOrange">
          Trusted By Thousands Of Doctors Nationwide
        </h1>
        <p></p>
      </div>
      <div className="bg-trusted">
        <div className="my-5 grid grid-cols-2 gap-5 bg-DocOrange bg-opacity-50 px-4 py-8 md:grid-cols-4 lg:py-10">
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16"
          >
            <p className="text-2xl font-extrabold text-DocOrange">100%</p>
            <p className="font-semibold text-gray-300">Authentic Products</p>
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16"
          >
            <p className="text-4xl font-extrabold text-DocOrange">
              <CiDeliveryTruck />
            </p>
            <p className="font-semibold text-gray-300">Nationwide Delivery</p>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16"
          >
            <p className="text-4xl font-extrabold text-DocOrange">
              <GiMoneyStack />
            </p>
            <p className="font-semibold text-gray-300">Safe payment</p>
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16"
          >
            <p className="text-3xl font-extrabold text-DocOrange">
              <AiOutlineSafetyCertificate />
            </p>
            <p className="font-semibold text-gray-300">Free & Easy Returns</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedBy;
