import React, { useState } from "react";
import { DeleteProductHook } from "../../Services/apiProducts";

function DeleteProduct({ product_ID, model, setModel }) {
  // console.log(product_ID);
  const handleDeleteButton = async () => {
    const deltedata = await DeleteProductHook(product_ID);
  };

  return (
    <div className="mt-10 flex justify-center gap-2 md:gap-3">
      <p>Delete this product permanently</p>
      <button
        className="rounded-2xl bg-red-700 px-3 py-2 text-white md:px-4"
        onClick={() => setModel(true)}
      >
        Delete
      </button>
      <div
        className={`${model === true ? "no-doc-scroll fixed top-0 flex h-dvh w-dvw flex-col justify-center text-center backdrop-blur-md" : "hidden"} `}
      >
        <p className="text-xl">Are you sure to Delete? </p>
        <div className="mx-auto mt-5 flex w-full justify-center gap-10">
          <button
            onClick={() => setModel(false)}
            className="rounded-2xl bg-DocOrange px-3 py-2 text-black"
          >
            NO, Cancel it
          </button>
          <button
            onClick={handleDeleteButton}
            className="rounded-2xl bg-red-800 px-3 py-2 text-white"
          >
            YES, Sure
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
