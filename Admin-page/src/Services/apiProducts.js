import { useState } from "react";
import toast from "react-hot-toast";

export async function GetAllProducts() {
  const res = await fetch("/api/admin/products");
  console.log(res);
  if (!res.ok) {
    location.replace("/login");
    throw Error(res);
  }

  const { data } = await res.json();

  return data;
}

export async function UpdateProductHook(productId, data) {
  try {
    const res = await fetch(`/api/products/${productId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...data }),
    });

    const updatedData = await res.json();

    if (updatedData.error) {
      throw new Error(updatedData.error);
    }
    toast.success("product updagted Successfully");
    location.replace(
      `/products/${updatedData.data.productId.concat("_", updatedData.data.slug)}`,
    );
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function UploadProductHook(data) {
  try {
    const res = await fetch("/api/products/new", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...data }),
    });

    const newData = await res.json();

    if (newData.error) {
      throw new Error(newData.error);
    }
    toast.success("product uploaded Successfully");
    location.replace(
      `/products/${newData.data.productId.concat("_", newData.data.slug)}`,
    );
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
}
