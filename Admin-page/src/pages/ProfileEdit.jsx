import React, { useState } from "react";
import { Form } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { UpdateProfileHook } from "../Services/apiAuthentication";

function ProfileEdit() {
  const userData = secureLocalStorage.getItem("logged-user");
  const [gender, setGender] = useState(userData.gender);

  return (
    <div className="mx-auto flex w-fit justify-center text-center">
      <Form
        method="POST"
        className="mt-5 rounded-md bg-gray-900 p-5 font-semibold lg:px-10"
      >
        <div className="md:grid md:grid-cols-2 md:gap-2">
          <div className="mb-5 flex flex-row items-center gap-2">
            <label className="text-DocOrange sm:basis-32">FullName</label>
            <div className="grow">
              <input
                className="input h-9 w-full rounded-xl bg-gray-600 pl-2 capitalize"
                type="text"
                name="fullname"
                defaultValue={userData.fullname.toLowerCase()}
                minLength="3"
                required
              />
            </div>
          </div>
          <div className="mb-5 flex flex-row items-center gap-2">
            <label className="text-DocOrange sm:basis-32">Username</label>
            <div className="grow">
              <input
                className="input h-9 w-full rounded-xl bg-gray-600 pl-2 capitalize"
                type="text"
                name="username"
                value={userData.username}
              />
            </div>
          </div>
          <div className="mb-5 flex flex-row items-center gap-2">
            <label className="text-DocOrange sm:basis-32">Gender</label>
            <input
              type="checkbox"
              id="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
              className="ml-1"
            />{" "}
            <label htmlFor="male" className="mr-5 inline">
              Male
            </label>
            <input
              type="checkbox"
              id="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
              className="ml-1"
            />
            <label htmlFor="female" className="mr-5 inline">
              Female
            </label>
          </div>
          <div className="mb-5 flex flex-row items-center gap-2">
            <label className="text-DocOrange sm:basis-32">PhoneNumber</label>
            <div className="grow">
              <input
                className="input h-9 w-full rounded-xl bg-gray-600 pl-2 capitalize"
                type="tel"
                name="phoneNumber"
                defaultValue={userData.phoneNumber}
                minLength="9"
                required
              />
            </div>
          </div>
          <div className="mb-5 flex flex-row items-center gap-2">
            <label className="text-DocOrange sm:basis-32">Email</label>
            <div className="grow">
              <input
                className="input h-9 w-full rounded-xl bg-gray-600 pl-2"
                type="email"
                name="email"
                defaultValue={userData.email}
                minLength="3"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <input type="hidden" name="gender" value={gender} />
        </div>

        <button className="mx-auto mt-5 w-fit rounded-full bg-black px-3 py-1.5 text-DocOrange">
          Update User
        </button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);

  const res = await UpdateProfileHook(data);
  return null;
}

export default ProfileEdit;
