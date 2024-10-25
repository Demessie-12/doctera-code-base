import React from "react";

function Model(question, onclickfunction, setModel) {
  return (
    <div>
      <div className="no-doc-scroll fixed top-0 flex h-dvh w-dvw flex-col justify-center text-center backdrop-blur-md">
        <p className="text-xl">Are you sure to Delete? </p>
        <div className="mx-auto mt-5 flex w-full justify-center gap-10">
          <button
            // onClick={() => setModel(false)}
            className="rounded-2xl bg-DocOrange px-3 py-2 text-black"
          >
            NO, Cancel it
          </button>
          <button
            // onClick={handleDeleteButton}
            className="rounded-2xl bg-red-800 px-3 py-2 text-white"
          >
            YES, Sure
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;
