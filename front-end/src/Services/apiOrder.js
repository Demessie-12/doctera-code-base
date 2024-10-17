import { useState } from "react";
import toast from "react-hot-toast";

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

  if (!res.ok) throw Error("Failed to get Order");

  const { data, paymentStatus } = await res.json();
  const order = data;
  return { order, paymentStatus };
};
