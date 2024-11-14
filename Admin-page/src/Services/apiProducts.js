import { useState } from "react";
import toast from "react-hot-toast";

export async function GetAllProductsHook() {
  const res = await fetch(
    "https://apidoctera.yeshisolutions.com/api/admin/products",
    {
      credentials: "include",
    },
  );
  // console.log(res);
  if (!res.ok) {
    location.replace("/login");
    throw Error(res);
  }

  const { data } = await res.json();

  return data;
}

export async function UpdateProductHook(productId, data) {
  try {
    const res = await fetch(
      `https://apidoctera.yeshisolutions.com/api/products/${productId}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data }),
        credentials: "include",
      },
    );

    const updatedData = await res.json();

    if (updatedData.error) {
      throw new Error(updatedData.error);
    }
    toast.success("product updagted Successfully");
    location.replace(`/products`);
    return updatedData.data;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function UpdateProductStatusHook(productId, data, IdWithSlug) {
  try {
    const res = await fetch(
      `https://apidoctera.yeshisolutions.com/api/admin/products/status/${productId}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data }),
        credentials: "include",
      },
    );

    const updatedData = await res.json();

    if (updatedData.error) {
      throw new Error(updatedData.error);
    }
    toast.success(updatedData.message);
    location.replace(`/products`);
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function DeleteProductHook(product_ID) {
  try {
    const res = await fetch(
      `https://apidoctera.yeshisolutions.com/api/admin/products/delete/${product_ID}`,
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        credentials: "include",
      },
    );

    const deletedData = await res.json();

    if (deletedData.error) {
      throw new Error(deletedData.error);
    }
    toast.success("product Deleted Successfully");
    location.replace("/products");
  } catch (error) {
    toast.error(error.message);
  }
}

export async function UploadProductHook(data) {
  try {
    const res = await fetch(
      "https://apidoctera.yeshisolutions.com/api/products/new",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data }),
        credentials: "include",
      },
    );

    const newData = await res.json();

    if (newData.error) {
      throw new Error(newData.error);
    }
    toast.success("product uploaded Successfully");
    location.replace(`/products/`);
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
}
