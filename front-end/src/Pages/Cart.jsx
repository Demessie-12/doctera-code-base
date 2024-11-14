import CartItem from "./../features/Cart/CartItem";
import EmptyCart from "./../features/Cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getCart } from "./../hooks/CartSlice";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import OrderList from "../features/Order/OrderLists";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-10 px-6 py-3 md:mx-auto md:max-w-2xl">
      {cart.length == 0 ? (
        <EmptyCart />
      ) : (
        <div className="">
          <Link to="/" className="text-gray-300">
            &larr; Back to Menu
          </Link>

          <h2 className="mt-6 text-xl font-semibold text-DocOrange">
            Your cart
          </h2>
          <ul className="my-2 divide-y divide-stone-300 border-b border-stone-300">
            {cart.map((item) => (
              <CartItem item={item} key={item.productId} />
            ))}
          </ul>
          <div className="mt-6 space-x-2">
            <Link
              className="text-balck inline-block rounded-full bg-DocOrange px-4 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-DocOrange/70 hover:text-white focus:outline-none focus:ring focus:ring-DocOrange focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4"
              to="/order/new"
            >
              Proceed To Order
            </Link>
            <button
              className="inline-block rounded-full border-2 border-stone-300 bg-transparent px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5"
              onClick={() => dispatch(clearItem())}
              type="secondary"
            >
              Clear cart
            </button>
          </div>
        </div>
      )}
      <OrderList />
    </div>
  );
}

export default Cart;
