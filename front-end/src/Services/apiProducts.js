import { useState } from "react";
import secureLocalStorage from "react-secure-storage";

export async function GetAllProducts() {
  const res = await fetch("/api/products");

  if (!res.ok) throw Error("Failed to get products");

  const { data } = await res.json();
  console.log("fetched", data);
  secureLocalStorage.setItem("products", data);
  secureLocalStorage.setItem("lastTime", Date.now());
  // console.log("stored", secureLocalStorage.getItem("products"));

  return data;
}
