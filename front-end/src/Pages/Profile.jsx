import React from "react";
import secureLocalStorage from "react-secure-storage";
import { SlCallOut } from "react-icons/sl";

function Profile() {
  const userData = secureLocalStorage.getItem("logged-user");
  console.log(userData);
  return (
    <div className="px-2 text-white sm:px-3">
      <div className="mx-auto mt-10 grid grid-cols-2 justify-center gap-3 text-center md:max-w-3xl">
        <p>
          FullName :{" "}
          <span className="text-lg font-semibold text-DocOrange">
            {userData.fullname}
          </span>
        </p>
        <p>
          Username :{" "}
          <span className="text-lg font-semibold text-DocOrange">
            @{userData.username}
          </span>
        </p>
        <p>
          Gender :{" "}
          <span className="text-lg font-semibold text-DocOrange">
            {userData.gender}
          </span>
        </p>
        <p className="flex justify-center">
          <a
            href={`tel:0${userData.phoneNumber}`}
            className="flex w-fit rounded-2xl bg-DocOrange px-2 py-1 text-center text-lg font-semibold text-black duration-200 hover:bg-DocOrange/70 hover:text-gray-300 sm:px-3 sm:py-2"
          >
            <SlCallOut className="h-fit pt-1" />
            &nbsp; Call&nbsp; 0{userData.phoneNumber}
          </a>
        </p>
        <p>
          Email :{" "}
          <span className="text-lg font-semibold text-DocOrange">
            {userData.email}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
