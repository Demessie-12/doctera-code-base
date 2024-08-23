import React from "react";
import UpdateItemQuantity from "./UpdateItemQuantity";
import DeleteItem from "./DeleteItem";

function CartItem({ item }) {
  const { productId, name, quantity, totalPrice } = item;
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{totalPrice}</p>
        <UpdateItemQuantity productId={productId} quantity={quantity} />
        <DeleteItem productId={productId} />
      </div>
    </li>
  );
}

export default CartItem;