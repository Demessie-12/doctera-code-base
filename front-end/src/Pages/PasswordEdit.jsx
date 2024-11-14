import React from "react";
import { Form, useNavigation, Link } from "react-router-dom";
import { UpdatePasswordHook } from "../Services/apiAuthentication";
import secureLocalStorage from "react-secure-storage";

import passwordToogle from "../hooks/passwordToogle";

function PasswordEdit() {
  const userData = secureLocalStorage.getItem("logged-user");

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [Icon, inputType] = passwordToogle();
  return (
    <div className="mx-auto flex w-fit justify-center text-center">
      <Form
        method="POST"
        className="mt-5 rounded-md p-5 font-semibold lg:px-10"
      >
        <div className="mb-5 flex flex-row items-center gap-2">
          <label className="text-DocOrange sm:basis-32">Old Password</label>
          <div className="grow">
            <input
              className="input h-9 w-full rounded-xl bg-gray-300 pl-2"
              type={inputType}
              name="oldPassword"
              minLength="3"
              required
            />
          </div>
        </div>
        <div className="mb-5 flex flex-row items-center gap-2">
          <label className="text-DocOrange sm:basis-32">New Password</label>
          <div className="grow">
            <input
              className="input h-9 w-full rounded-xl bg-gray-300 pl-2"
              type={inputType}
              name="newPassword"
              minLength="3"
              required
            />
          </div>
        </div>
        <div className="mb-5 flex flex-row items-center gap-2">
          <label className="text-DocOrange sm:basis-32">Confirm Password</label>
          <div className="grow">
            <input
              className="input h-9 w-full rounded-xl bg-gray-300 pl-2"
              type={inputType}
              name="confirmPassword"
              minLength="3"
              required
            />
          </div>

          <div className="flex text-center text-DocOrange">{Icon}</div>
        </div>

        <input type="hidden" name="username" value={userData.username} />
        <Link
          to="/profile"
          className="mt-5 w-fit rounded-full bg-white px-3 py-1.5 text-DocBlue"
        >
          Back To Profile
        </Link>
        <button className="mx-auto ml-5 mt-5 w-fit rounded-full bg-black px-3 py-1.5 text-DocOrange">
          {isSubmitting ? "Updating" : "Update Password"}
        </button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);

  //   const { UpdateProfileHook } = UpdateProfileApi;

  const res = await UpdatePasswordHook(data);
  return null;
}

export default PasswordEdit;
