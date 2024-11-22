import React from "react";
import secureLocalStorage from "react-secure-storage";
import { SlCallOut } from "react-icons/sl";
import { Link } from "react-router-dom";

function Profile() {
  const userData = secureLocalStorage.getItem("logged-user");
  // console.log(userData);
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
            {console.log(userData)}
          </span>
        </p>
        <p>
          Role :{" "}
          <span className="text-lg font-semibold text-DocOrange">
            {userData.role}
          </span>
        </p>
      </div>
      <div className="mx-auto mt-5 flex w-fit justify-center gap-3 md:gap-5">
        <Link
          to="/password/edit"
          className="rounded-2xl bg-white px-2 py-1.5 font-semibold text-DocBlue sm:mt-5"
        >
          Change Password
        </Link>
        <Link
          to="/profile/edit"
          className="rounded-2xl bg-DocOrange px-2 py-1.5 font-semibold text-black sm:mt-5"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
}

export default Profile;
