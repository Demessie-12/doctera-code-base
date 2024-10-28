import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import passwordToogle from "../hooks/passwordToogle.jsx";
import { LoginApi } from "../Services/apiAuthentication.js";
import Doctera_Banner from "./../Assets/Doctera_Banner.png";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [Icon, inputType] = passwordToogle();

  const { loading, LoginHook } = LoginApi();

  const handlesubmit = async (e) => {
    try {
      e.preventDefault();
      await LoginHook(inputs);
    } catch (error) {}
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center bg-DocBlue px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Doctera logo"
            src={Doctera_Banner}
            className="mx-auto h-24 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-DocOrange">
            Log in as Administrator
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handlesubmit} method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={inputs.email}
                  onChange={(e) =>
                    setInputs({ ...inputs, email: e.target.value })
                  }
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="hover:textDocOrange font-semibold text-DocOrange/70"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="relative mt-2 flex">
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
                  className="flex w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {Icon}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-DocOrange/80 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-DocOrange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-DocOrange ${
                  loading && "cursor-not-allowed"
                }`}
              >
                {loading ? "loading" : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-gray-500">
            <Link
              to={"#"}
              className="font-semibold leading-6 text-DocOrange/70 hover:text-DocOrange"
            >
              Log in as a User
            </Link>
            {/* <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create a new Account
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
