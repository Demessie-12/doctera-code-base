import { useState } from "react";
import secureLocalStorage from "react-secure-storage";

export async function GetAllProducts() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);

  if (!res.ok) throw Error("Failed to get products");

  const { data } = await res.json();
  console.log("fetched", data);
  secureLocalStorage.setItem("products", data);
  // console.log("stored", secureLocalStorage.getItem("products"));

  return data;
}

// should place in order Api
export async function createOrder() {}
