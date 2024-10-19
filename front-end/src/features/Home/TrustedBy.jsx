import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

function TrustedBy() {
  return (
    <div>
      <div className="flex flex-col justify-center px-2 text-center">
        <h1 className="text-DocOrange mx-auto w-fit text-2xl font-bold">
          Trusted by thousands of doctors nationwide
        </h1>
        <p></p>
      </div>
      <div className="bg-trusted">
        <div className="bg-DocOrange my-5 grid grid-cols-2 gap-5 bg-opacity-50 px-4 py-8 md:grid-cols-4 lg:py-10">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16">
            <p className="text-DocOrange text-2xl font-extrabold">100%</p>
            <p className="font-semibold text-gray-300">Authentic Products</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16">
            <p className="text-DocOrange text-4xl font-extrabold">
              <CiDeliveryTruck />
            </p>
            <p className="font-semibold text-gray-300">Nationwide Delivery</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16">
            <p className="text-DocOrange text-4xl font-extrabold">
              <GiMoneyStack />
            </p>
            <p className="font-semibold text-gray-300">Safe payment</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-900 bg-opacity-95 py-8 sm:py-10 lg:py-16">
            <p className="text-DocOrange text-3xl font-extrabold">
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
