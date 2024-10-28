import { useState } from "react";
import toast from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";

export const CreateOrderHook = async (orderData) => {
  try {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...orderData }),
    });

    const CreateOrderdata = await res.json();

    if (CreateOrderdata.error) {
      throw new Error(CreateOrderdata.error);
    }
    const { data } = CreateOrderdata;
    toast.success("Order Created successfully");
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const GetOrderHook = async (orderId) => {
  console.log("get hook runned");
  const res = await fetch(`/api/orders/${orderId}`);
  console.log("get hook finished");

  if (!res.ok) throw Error("Failed to get Order with this ID");

  const { data, paymentStatus } = await res.json();
  const order = data;
  return { order, paymentStatus };
};

export const GetMineOrderHook = async (username) => {
  const res = await fetch(`/api/start/${username}`);

  if (!res.ok) throw Error("Failed to get your Orders");

  const { mineOrders } = await res.json();
  secureLocalStorage.setItem("orders", mineOrders);
  return { mineOrders };
};
