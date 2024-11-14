import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

function OrderList() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const UserOrders = secureLocalStorage.getItem("orders");
  const LocalOrders = secureLocalStorage.getItem("local-orders")?.slice(1);
  const previousOrders = UserOrders ? UserOrders : LocalOrders;

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <div className="mx-auto flex flex-col gap-2 md:max-w-3xl">
      <div className="mx-auto mt-5 flex justify-center gap-3 border-t-2 border-gray-500 px-2 pt-5 sm:px-3 md:max-w-3xl">
        <p className="pt-1 text-base font-semibold text-gray-300">
          Check your order using OrderId
        </p>

        <div>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Search Order #"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-44 rounded-full bg-blue-500 px-4 py-2 font-semibold text-black transition-all duration-300 placeholder:font-semibold placeholder:text-gray-700 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 sm:focus:w-52"
            />
          </form>
        </div>
      </div>
      <div className="mx-auto mt-5 flex w-4/5 flex-col justify-center gap-1 text-lg text-DocOrange lg:text-xl">
        <div
          className={`${(!previousOrders || previousOrders?.length == 0) && "hidden"} flex justify-between pb-2 font-semibold`}
        >
          <p className="pl-2">No</p>
          <p>Order Id</p>
          <p className="pr-5">Price</p>
          <p className="pr-5">Link</p>
        </div>
        {previousOrders?.map((order, i) => (
          <div
            key={i}
            className="my-auto flex justify-between bg-gray-600 py-1 align-middle text-white"
          >
            <p className="py-2 pl-2">{i + 1},</p>
            <p className="py-2 font-bold text-DocOrange">{order.orderId}</p>
            <p className="py-2">
              {order.totalPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <Link
              to={`/order/${order.orderId}`}
              className="border-1 rounded-full border-gray-400 bg-DocOrange/85 px-3 py-2 align-top text-gray-900 hover:bg-DocOrange hover:text-black"
            >
              Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderList;
