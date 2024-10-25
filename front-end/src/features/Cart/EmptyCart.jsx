import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function EmptyCart() {
  return (
    <div className="mx-auto flex w-fit flex-col justify-center px-4 py-3 md:max-w-2xl">
      <p className="my-7 flex gap-2 text-center font-semibold text-gray-400 md:text-xl">
        <span className="text-3xl text-DocOrange">
          <FaShoppingCart />
        </span>
        Your cart is empty.
      </p>
      <Link
        to="/"
        className="w-fit rounded-full bg-DocOrange/80 px-3 py-2 font-semibold text-gray-900 hover:bg-DocOrange hover:text-black"
      >
        Check our Products
      </Link>
    </div>
  );
}

export default EmptyCart;
