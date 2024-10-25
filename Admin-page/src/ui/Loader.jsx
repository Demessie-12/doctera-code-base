import React from "react";

function Loader() {
  return (
    <div className="no-doc-scroll fixed top-0 z-50 flex h-dvh w-dvw flex-col justify-center text-center backdrop-blur-md">
      <button disabled>Processing...</button>
    </div>
  );
}

export default Loader;
