import React from "react";
import { GetAllOrders } from "../Services/apiOrders";
import { useAdminContext } from "../context/Admin.context";
import { useLoaderData } from "react-router-dom";
import OrderList from "../features/order/OrderList";

function Orders() {
  const { setAllorders } = useAdminContext();
  const loadedData = useLoaderData();
  setAllorders(loadedData);

  return (
    <div className="flex flex-col">
      <OrderList />
    </div>
  );
}

export async function loader() {
  let AllOrders = await GetAllOrders();
  // Add serianl No
  AllOrders = AllOrders.map((order, i) => ({
    ...order,
    no: i + 1,
    customerName: order.customerName || "Unknown",
    customerUsername: order.customerUsername || "Undefined",
    timeGap: Math.round(
      (Date.now() - new Date(order.createdAt)) / (1000 * 3600 * 24),
    ),
  }));
  return AllOrders;
}

export default Orders;
