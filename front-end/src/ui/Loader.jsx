import React from "react";

function Loader() {
  return (
    <div className="no-doc-scroll fixed top-0 z-50 flex h-dvh w-dvw flex-col justify-center text-center text-lg font-bold backdrop-blur-md lg:text-xl">
      <button disabled>Loading...</button>
    </div>
  );
}

export default Loader;
