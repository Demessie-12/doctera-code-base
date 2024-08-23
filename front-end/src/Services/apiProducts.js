import { useState } from "react";

export async function GetAllProducts() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);

  if (!res.ok) throw Error("Failed to get products");

  const { data } = await res.json();
  console.log(data);
  localStorage.setItem("products", JSON.stringify(data));

  return data;
}

// should place in order Api
export async function createOrder() {}
export async function fetchAddress() {}
