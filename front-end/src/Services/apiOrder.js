import { useState } from "react";
import toast from "react-hot-toast";

export const CreateOrderHook = async (orderData) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
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
