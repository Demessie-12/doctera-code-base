import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCart,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./../../hooks/CartSlice";

function UpdateItemQuantity({ productId }) {
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(productId));

  return (
    <div className="flex items-center gap-2">
      <button
        className="inline-block rounded-full bg-gray-800 text-sm font-semibold uppercase tracking-wide text-white hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-800 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 sm:px-3 sm:py-2"
        onClick={() => dispatch(decreaseItemQuantity(productId))}
        type="round"
      >
        -
      </button>
      <p>{currentQuantity}</p>
      <button
        className="inline-block rounded-full bg-gray-800 text-sm font-semibold uppercase tracking-wide text-white hover:bg-gray-600 focus:outline-none focus:ring focus:ring-teal-800 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 sm:px-3 sm:py-2"
        onClick={() => dispatch(increaseItemQuantity(productId))}
        type="round"
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
