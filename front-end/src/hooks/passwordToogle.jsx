import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

function passwordToogle() {
  const [visibility, setVisibility] = useState(false);
  const Icon = (
    <div
      className="my-auto mx-2 align  cursor-pointer z-10"
      onClick={() => setVisibility((visibility) => !visibility)}
    >
      {visibility ? <IoEye /> : <FaEyeSlash />}
    </div>
  );
  const inputType = visibility ? "Text" : "Password";

  return [Icon, inputType];
}

export default passwordToogle;
