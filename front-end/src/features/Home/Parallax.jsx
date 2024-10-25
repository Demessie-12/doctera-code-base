import React from "react";
import { MdHealthAndSafety } from "react-icons/md";

function Parallax() {
  return (
    <div className="flex h-40 items-center justify-center bg-trusted bg-cover bg-fixed lg:h-60">
      <div className="flex h-full w-full flex-col items-center justify-center bg-gray-700/60">
        <div className="text-DocOrangeba text-4xl text-white md:text-6xl">
          <MdHealthAndSafety />
        </div>
        <h1 className="text-center text-xl font-bold text-white md:text-2xl">
          Best Medical Market <span className="block">In Ethiopia</span>
        </h1>
      </div>
    </div>
  );
}

export default Parallax;
