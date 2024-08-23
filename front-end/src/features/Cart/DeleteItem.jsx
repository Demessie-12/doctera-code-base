import React from "react";
import { useDispatch } from "react-redux";
import { deleteToCart } from "./../../hooks/CartSlice";

function DeleteItem({ productId }) {
  const dispatch = useDispatch();
  return (
    <button
      className="inline-block rounded-full bg-red-800 font-semibold uppercase tracking-wide text-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-800 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 text-xs md:px-5 md:py-2.5"
      onClick={() => dispatch(deleteToCart(productId))}
    >
      Delete
    </button>
  );
}

export default DeleteItem;
