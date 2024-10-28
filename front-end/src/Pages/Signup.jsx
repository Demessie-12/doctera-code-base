import React, { useState } from "react";
import passwordToogle from "../hooks/passwordToogle";
import { SignUpApi } from "../Services/apiAuthentication";
import { Link } from "react-router-dom";
import Doctera_Banner from "./../Assets/Doctera_Banner.png";

function Signup() {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    phoneNumber: "",
    email: "",
    gender: "male",
    role: "customer",
    password: "",
    confirmPassword: "",
  });

  const handleCheckboxChange = (changed) => {
    setInputs({ ...inputs, ...changed });
  };

  const [Icon, inputType] = passwordToogle();

  const { loading, SignupHook } = SignUpApi();

  const handlesubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(inputs);
      await SignupHook(inputs);
    } catch (error) {}
  };

  return (
    <div>
      <div className="flex min-h-dvh flex-1 flex-col justify-center px-6 py-10 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Doctera logo"
            src={Doctera_Banner}
            className="mx-auto h-24 w-auto"
          />
          <h2 className="text-center text-2xl font-bold text-DocOrange">
            Create new account
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handlesubmit}
            method="POST"
            className="space-y-6 text-DocOrange"
          >
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-DocOrange"
              >
                Fullname
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                value={inputs.fullname}
                onChange={(e) => {
                  setInputs({ ...inputs, fullname: e.target.value });
                  inputs.username.length < 4 &&
                    setInputs({
                      ...inputs,
                      fullname: e.target.value,
                      username: e.target.value,
                    });
                  console.log("fullname changed");
                }}
                required
                autoComplete="fullname"
                className="mt-2 block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300"
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-DocOrange"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                // defaultValue={inputs.fullname}
                value={inputs.username}
                onChange={(e) => {
                  setInputs({ ...inputs, username: e.target.value });
                  console.log("username changed");
                }}
                className="mt-2 block w-full rounded-md border-0 bg-gray-300 px-1.5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={inputs.phoneNumber}
                // required
                onChange={(e) =>
                  setInputs({ ...inputs, phoneNumber: e.target.value })
                }
                className="mt-2 block w-full rounded-md px-1.5 py-1.5 ring-1 ring-inset ring-gray-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-DocOrange"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                required
                className="mt-2 block w-full rounded-md bg-gray-300 px-1.5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300"
              />
            </div>
            <div className="space-y-3">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-DocOrange"
              >
                Gender
              </label>
              <label htmlFor="male" className="ml-5 inline">
                Male
              </label>
              <input
                type="checkbox"
                name="male"
                id="male"
                checked={inputs.gender === "male"}
                onChange={() => handleCheckboxChange({ gender: "male" })}
                className="ml-1"
              />
              <label htmlFor="female" className="ml-5 inline">
                Female
              </label>
              <input
                type="checkbox"
                name="female"
                id="female"
                className="ml-1 inline"
                checked={inputs.gender === "female"}
                onChange={() => handleCheckboxChange({ gender: "female" })}
              />
            </div>

            {/* 
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-900"
              >
                Role
              </label>
              <label htmlFor="male" className="inline ml-5">
                Customer
              </label>
              <input
                type="checkbox"
                name="customer"
                id="customer"
                checked={inputs.role === "customer"}
                onChange={() => handleCheckboxChange({ role: "customer" })}
                className="ml-1"
              />
              <label htmlFor="merchant" className="inline ml-5">
                Merchant
              </label>
              <input
                type="checkbox"
                name="merchant"
                id="merchant"
                className="inline ml-1"
                checked={inputs.role === "merchant"}
                onChange={() => handleCheckboxChange({ role: "merchant" })}
              />
            </div>
 */}
            <div className="relative mt-2 flex">
              <label
                htmlFor="password"
                className="mr-2 block text-sm font-medium leading-6 text-DocOrange"
              >
                Password:
              </label>
              <input
                id="password"
                name="password"
                type={inputType}
                value={inputs.password}
                minLength={4}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                required
                autoComplete="current-password"
                className="flex w-full rounded-md border-0 bg-gray-300 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {Icon}
            </div>

            <div className="relative mt-2 flex">
              <label
                htmlFor="password"
                className="mr-2 block w-fit text-sm font-medium leading-6 text-DocOrange"
              >
                Confirm Password:
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type={inputType}
                value={inputs.confirmPassword}
                minLength={4}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
                required
                autoComplete="current-password"
                className="flex w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p
                className="absolute left-28 top-12 text-center text-sm text-white"
                hidden={
                  inputs.confirmPassword == "" ||
                  inputs.password === inputs.confirmPassword
                }
              >
                Password doesn't match
              </p>
            </div>
            <div className="mt-10 space-y-10">
              <button
                type="submit"
                disabled={inputs.password !== inputs.confirmPassword}
                className="w-full justify-center rounded-md bg-indigo-600 py-3 text-white shadow-sm disabled:cursor-not-allowed"
              >
                {loading ? "Signing" : "Sign Up"}
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-base text-gray-300">
            Have an account?{" "}
            <Link
              to={"/login"}
              className="font-semibold leading-6 text-DocOrange/80 hover:text-DocOrange"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
