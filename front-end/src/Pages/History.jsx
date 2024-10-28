import React from "react";
import OrderList from "../features/Order/OrderLists";

function History() {
  return (
    <div className="px-2 text-white sm:px-3">
      <h1 className="flex justify-center pt-3 text-lg font-semibold text-DocOrange lg:text-xl">
        Your Order History
      </h1>
      <OrderList />
    </div>
  );
}

export default History;
