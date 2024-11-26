import React, { useState } from "react";
import { DeleteMyProductHook } from "../../Services/apiContributor";

function DeleteProduct({ ProductID, model, setModel }) {
  // console.log(product_ID);
  const [deleting, setDeleting] = useState(false);
  const handleDeleteButton = async () => {
    setDeleting(true);
    const deltedata = await DeleteMyProductHook(ProductID);
    console.log("product deleted");
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
        className={`${model === true ? "no-doc-scroll fixed top-0 z-50 flex h-dvh w-dvw flex-col justify-center text-center backdrop-blur-md" : "hidden"} ${deleting ? "cursor-wait" : ""}`}
      >
        <p className="text-xl font-semibold">Are you sure to Delete? </p>
        <div className="mx-auto mt-5 flex w-full justify-center gap-10">
          <button
            onClick={() => setModel(false)}
            className={`rounded-2xl bg-white px-3 py-2 text-black ${deleting ? "cursor-not-allowed" : ""}`}
          >
            NO, Cancel it
          </button>
          <button
            onClick={handleDeleteButton}
            className={`rounded-2xl bg-red-800 px-3 py-2 text-white ${deleting ? "cursor-not-allowed" : ""}`}
          >
            YES, Sure
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
