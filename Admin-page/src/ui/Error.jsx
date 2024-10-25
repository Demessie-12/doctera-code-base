import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

function Error() {
  const navigate = useNavigate();
  const Error = useRouteError();

  return (
    <div className="mx-auto flex h-dvh w-full flex-col gap-3 bg-gray-400 pt-5 text-center">
      <p>Something Went wrong </p>
      <div>{Error.message || Error.data}</div>
      <div className="flex justify-center text-center">
        <button
          onClick={() => navigate(-1)}
          className="flex rounded-full bg-DocBlue px-3 py-3 font-semibold text-DocOrange md:px-5"
        >
          <span className="mr-2 text-2xl text-white">
            <IoArrowBackCircle />
          </span>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Error;
