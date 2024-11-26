import toast from "react-hot-toast";

export async function GetMyProductsHook() {
  const res = await fetch(
    "https://api1.docteramarket.com/api/contributor/products",
    {
      credentials: "include",
    },
  );
  // console.log(res);
  if (!res.ok) {
    // location.replace("/");
    throw Error(res);
  }

  const { data } = await res.json();
  console.log(data);

  return data;
}

export async function UploadProductHook(data) {
  try {
    const res = await fetch(
      "https://api1.docteramarket.com/api/contributor/product/new",
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
    location.replace(`/control/product`);
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function UpdateProductHook(productId, data) {
  try {
    const res = await fetch(
      `https://api1.docteramarket.com/api/contributor/product/${productId}`,
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
    toast.success("product updated Successfully");
    location.replace(`/control/products`);
    return updatedData.data;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function HideProductStatusHook(productId, data, IdWithSlug) {
  try {
    const res = await fetch(
      `https://api1.docteramarket.com/api/contributor/product/status/${productId}`,
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
    location.replace(`/control/product`);
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function DeleteMyProductHook(ProductID) {
  try {
    const res = await fetch(
      `https://api1.docteramarket.com/api/contributor/product/${ProductID}`,
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
    location.replace("/control/product");
  } catch (error) {
    toast.error(error.message);
  }
}

export async function GetMyOrders() {
  try {
    const res = await fetch(
      "https://api1.docteramarket.com/api/contributor/orders",
      {
        credentials: "include",
      },
    );
    const updatedData = await res.json();

    if (updatedData.error) {
      throw new Error(updatedData.error);
    }

    return updatedData.data;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function GetMyOrderHook(orderId) {
  try {
    // console.log("api reached");
    const res = await fetch(
      `https://api1.docteramarket.com/api/contributor/orders/${orderId}`,
      {
        credentials: "include",
      },
    );

    if (!res.ok) throw Error("Failed to get Order");

    const { data, paymentStatus } = await res.json();
    const order = data;

    if (res.error) {
      throw new Error(orderData.error);
    }

    return { order, paymentStatus };
  } catch (error) {
    toast.error(error.message);
  }
}

export async function UpdateMyOrderStatusHook(orderId, data) {
  try {
    // console.log("api reached");
    const res = await fetch(
      `https://api1.docteramarket.com/api/contributor/orders/${orderId}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data }),
        credentials: "include",
      },
    );

    if (!res.ok) throw Error("Failed to update status of Order");

    const updatedData = await res.json();

    if (updatedData.error) {
      throw new Error(updatedData.error);
    }
    toast.success("Order's Status Updated Successfully");
    location.replace(`/control/order/${orderId}`);

    return null;
  } catch (error) {
    toast.error(error.message);
  }
}
