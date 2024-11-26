import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import { UpdateProfileHook } from "../Services/apiAuthentication";

function ProfileEdit() {
  const userData = secureLocalStorage.getItem("logged-user");
  const [gender, setGender] = useState(userData.gender);
  const [role, setRole] = useState(userData.role);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="mx-auto flex w-fit justify-center text-center">
      <Form
        method="POST"
        className="mt-5 rounded-md p-5 font-semibold lg:px-10"
      >
        <div className="md:grid md:grid-cols-2 md:gap-2">
          <div className="mb-5 flex flex-row items-center gap-2">
            <label className="text-DocOrange sm:basis-32">FullName</label>
            <div className="grow">
              <input
                className="input h-9 w-full rounded-xl bg-gray-300 pl-2"
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
                className="input h-9 w-full rounded-xl bg-transparent pl-2 text-white"
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
            <label htmlFor="male" className="mr-5 inline text-white">
              Male
            </label>
            <input
              type="checkbox"
              id="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
              className="ml-1"
            />
            <label htmlFor="female" className="mr-5 inline text-white">
              Female
            </label>
          </div>
          <div className="mb-5 flex flex-row items-center gap-2">
            <label className="text-DocOrange sm:basis-32">PhoneNumber</label>
            <div className="grow">
              <input
                className="input h-9 w-full rounded-xl bg-gray-300 pl-2"
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
                className="input h-9 w-full rounded-xl bg-gray-300 pl-2"
                type="email"
                name="email"
                defaultValue={userData.email}
                minLength="3"
                required
              />
            </div>
          </div>

          <div className="mb-5 flex flex-row items-center gap-2">
            <label className="text-DocOrange sm:basis-32">Role</label>
            <input
              type="checkbox"
              id="customer"
              checked={role === "customer"}
              onChange={() => setRole("customer")}
              className="ml-1"
            />{" "}
            <label htmlFor="customer" className="mr-5 inline text-white">
              Customer
            </label>
            <input
              type="checkbox"
              id="contributor"
              checked={role === "contributor"}
              onChange={() => setRole("contributor")}
              className="ml-1"
            />
            <label htmlFor="contributor" className="mr-5 inline text-white">
              Contributor
            </label>
          </div>
        </div>
        <div>
          <input type="hidden" name="gender" value={gender} />
          <input type="hidden" name="role" value={role} />
        </div>

        <button
          className={`mx-auto mt-5 w-fit rounded-full bg-black px-3 py-1.5 text-DocOrange ${isSubmitting && "cursor-not-allowed"}`}
        >
          {isSubmitting ? "Updating" : "Update User"}
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

  const res = await UpdateProfileHook(data);
  return null;
}

export default ProfileEdit;
