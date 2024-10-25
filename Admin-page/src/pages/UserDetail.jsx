import React, { useState } from "react";
import { SlCallOut } from "react-icons/sl";
import { GetSingleUserHook, UpdateUserRoleHook } from "../Services/apiUsers";
import { Form, useLoaderData } from "react-router-dom";

function UserDetail() {
  const userData = useLoaderData();
  const [role, setRole] = useState();

  return (
    <div>
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
        <p>
          Role :{" "}
          <span className="text-lg font-semibold text-DocOrange">
            {userData.role}
          </span>
        </p>
      </div>

      <Form method="POST" className="mx-auto my-10 flex justify-center">
        <p className="md:text-xl">Change Role to</p>
        <input
          type="checkbox"
          name="ongoing"
          id="ongoing"
          checked={role === "customer"}
          onChange={() => setRole("customer")}
          className={`ml-5 ${userData.role == "customer" && "hidden"}`}
        />
        <label
          htmlFor="ongoing"
          className={`ml-1 inline md:text-xl ${userData.role == "customer" && "hidden"}`}
        >
          Customer
        </label>
        <input
          type="checkbox"
          name="delivered"
          id="delivered"
          checked={role === "merchant"}
          onChange={() => setRole("merchant")}
          className={`ml-5 ${userData.role == "merchant" && "hidden"}`}
        />
        <label
          htmlFor="delivered"
          className={`ml-1 mr-5 inline text-DocOrange md:text-xl ${userData.role == "merchant" && "hidden"}`}
        >
          Merchant
        </label>
        <input
          type="checkbox"
          name="delivered"
          id="delivered"
          checked={role === "admin"}
          onChange={() => setRole("admin")}
          className={`ml-5 ${userData.role == "admin" && "hidden"}`}
        />
        <label
          htmlFor="delivered"
          className={`ml-1 mr-5 inline text-DocOrange md:text-xl ${userData.role == "admin" && "hidden"}`}
        >
          Admin
        </label>
        {role && (
          <button className="rounded-2xl bg-white px-3 py-1 font-semibold text-black">
            Update
          </button>
        )}
        <div>
          <input type="hidden" name="role" value={role} className="ml-5" />
        </div>
      </Form>
    </div>
  );
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const username = params.username.substr(1);
  const updatedUser = await UpdateUserRoleHook(username, data);

  console.log(data);

  return null;
}

export async function loader({ params }) {
  const username = params.username.substr(1);
  console.log(username);
  let SingleUser = await GetSingleUserHook(username);

  return SingleUser;
}

export default UserDetail;
