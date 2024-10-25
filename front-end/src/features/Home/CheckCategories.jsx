import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function CheckCategories() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="w-full px-2">
      <p className="mx-auto flex w-fit text-xl font-bold capitalize text-DocOrange md:text-2xl">
        Categories for you
      </p>
      <hr className="mx-auto mb-3 mt-1 w-36 rounded-2xl border-2 text-center text-gray-400 md:w-44" />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        <div data-aos="zoom-in" className="rounded-2xl bg-trusted">
          <div className="mx-auto flex h-fit justify-center bg-DocBlue/50 py-20 align-middle font-bold">
            <Link
              className="rounded-full bg-DocOrange px-2 py-2 text-white"
              to="/c/Imagings"
            >
              Imaging
            </Link>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="rounded-2xl bg-trusted">
          <div className="mx-auto flex h-fit justify-center bg-DocBlue/50 py-20 align-middle font-bold">
            <Link
              className="rounded-full bg-DocOrange px-2 py-2 text-white"
              to="/c/Diagnostic-Tools"
            >
              Diagnostic Tools
            </Link>
          </div>
        </div>
        <div data-aos="zoom-in" className="rounded-2xl bg-trusted">
          <div className="mx-auto flex h-fit justify-center bg-DocBlue/50 py-20 align-middle font-bold">
            <Link
              className="rounded-full bg-DocOrange px-2 py-2 text-white"
              to="/c/Laboratory-equipments"
            >
              Lab Equipments
            </Link>
          </div>
        </div>
        <div data-aos="zoom-in-down" className="rounded-2xl bg-trusted">
          <div className="mx-auto flex h-fit justify-center bg-DocBlue/50 py-20 align-middle font-bold">
            <Link
              className="rounded-full bg-DocOrange px-2 py-2 text-white"
              to="/c/Homecare"
            >
              Homecare
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckCategories;
