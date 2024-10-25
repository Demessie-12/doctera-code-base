import React from "react";
import { useParams } from "react-router-dom";
import { UpdateProductStatusHook } from "../../Services/apiProducts";

function ProductVerification() {
  const { IdWithSlug } = useParams();
  const productId = IdWithSlug.slice(0, IdWithSlug.indexOf("_"));

  const verifyProduct = async () => {
    console.log("button worked");
    const updatedData = await UpdateProductStatusHook(
      productId,
      {
        status: "Verified",
      },
      IdWithSlug,
    );
    console.log("button correct");
  };
  return (
    <div className="mt-3 flex items-center justify-center gap-3">
      <p className="text-center text-xl font-semibold capitalize text-gray-400 md:text-2xl">
        This product need verification
      </p>
      <button
        className="rounded-2xl bg-yellow-500 px-3 py-2 text-center text-xl font-semibold capitalize text-gray-900 md:text-2xl"
        onClick={verifyProduct}
      >
        Verify
      </button>
    </div>
  );
}

export default ProductVerification;
