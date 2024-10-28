import React, { useState } from "react";
import { Link } from "react-router-dom";
import passwordToogle from "../hooks/passwordToogle.jsx";
import { LoginApi } from "../Services/apiAuthentication.js";
import secureLocalStorage from "react-secure-storage";
import Doctera_Banner from "./../Assets/Doctera_Banner.png";
import { GetMineOrderHook } from "../Services/apiOrder.js";

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
      const loggedUser = secureLocalStorage.getItem("logged-user");
      await GetMineOrderHook(loggedUser.username);
    } catch (error) {}
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 sm:px-3 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Doctera logo"
            src={Doctera_Banner}
            className="mx-auto h-24 w-auto"
          />
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-DocOrange">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handlesubmit} method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block font-medium leading-6 text-DocOrange md:text-lg"
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
                  className="block font-medium leading-6 text-DocOrange md:text-lg"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
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
                <div className="flex text-center text-DocOrange">{Icon}</div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  loading && "cursor-not-allowed"
                }`}
              >
                {loading ? "loading" : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-white">
            Not a member?{" "}
            <Link
              to={"/signup"}
              className="text-base font-semibold leading-6 text-DocOrange hover:text-DocOrange/65"
            >
              Create a new Account
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
