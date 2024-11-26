import React from "react";
import { useLoaderData } from "react-router-dom";
import { GetMyOrders } from "../../Services/apiContributor";
import { useDocteraContext } from "../../context/Doctera.Context";
import OrderList from "./OrderList";

function Orders() {
  const { setMyorders } = useDocteraContext();
  const loadedData = useLoaderData();
  setMyorders(loadedData);

  return (
    <div className="flex flex-col">
      <OrderList />
    </div>
  );
}

export async function loader() {
  let AllOrders = await GetMyOrders();
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
