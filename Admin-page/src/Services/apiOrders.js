import toast from "react-hot-toast";

export async function GetAllOrders() {
  try {
    const res = await fetch("https://api1.docteramarket.com/api/admin/orders", {
      credentials: "include",
    });
    const updatedData = await res.json();

    if (updatedData.error) {
      throw new Error(updatedData.error);
    }

    return updatedData.data;
  } catch (error) {
    toast.error(error.message);
  }
}

export async function GetSingleOrderHook(orderId) {
  try {
    // console.log("api reached");
    const res = await fetch(
      `https://api1.docteramarket.com/api/admin/orders/${orderId}`,
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

export async function UpdateOrderStatusHook(orderId, data) {
  try {
    // console.log("api reached");
    const res = await fetch(
      `https://api1.docteramarket.com/api/admin/orders/${orderId}`,
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
    location.replace(`/orders/${orderId}`);

    return null;
  } catch (error) {
    toast.error(error.message);
  }
}
