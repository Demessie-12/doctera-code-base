import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div>
      <Link to="/">&larr; Back to Menu</Link>
      <p className="mt-7 font-semibold">
        Your cart is empty. Start adding some items :
      </p>
    </div>
  );
}

export default EmptyCart;
