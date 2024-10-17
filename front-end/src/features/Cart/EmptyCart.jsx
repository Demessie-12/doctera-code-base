import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="px-4 py-3 md:mx-auto md:max-w-2xl">
      <Link to="/">&larr; Back to Menu</Link>
      <p className="ml-5 mt-7 font-semibold">
        Your cart is empty. Start adding some items :
      </p>
    </div>
  );
}

export default EmptyCart;
