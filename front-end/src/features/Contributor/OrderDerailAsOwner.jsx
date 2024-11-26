import React, { useState } from "react";
import { Form, useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import OrderProductList from "./OrderProductList";
import {
  GetMyOrderHook,
  UpdateMyOrderStatusHook,
} from "../../Services/apiContributor";

function OrderDetailAsOwner() {
  const { order, paymentStatus } = useLoaderData();
  const [status, setStatus] = useState();

  return (
    <div>
      <OrderProductList order={order} />
      <div
        className={`${
          order.status === "Delivered" && "hidden"
        } mx-auto my-2 flex justify-center md:max-w-3xl`}
      >
        {/* Update order Status */}
        <Form method="POST" className="my-10 flex">
          <p className="md:text-xl">Mark as</p>
          <input
            type="checkbox"
            name="ongoing"
            id="ongoing"
            checked={status === "On delivery"}
            onChange={() => setStatus("On delivery")}
            className="ml-5"
          />
          <label htmlFor="ongoing" className="ml-1 inline md:text-xl">
            On delivery
          </label>
          <input
            type="checkbox"
            name="delivered"
            id="delivered"
            checked={status === "Delivered"}
            onChange={() => setStatus("Delivered")}
            className="ml-5"
          />
          <label
            htmlFor="delivered"
            className="ml-1 mr-5 inline text-DocOrange md:text-xl"
          >
            Delivered
          </label>
          {status && (
            <button className="rounded-2xl bg-white px-3 py-1 font-semibold text-black">
              Update
            </button>
          )}
          <div>
            <input
              type="hidden"
              name="status"
              value={status}
              className="ml-5"
            />
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const updatedOrder = await UpdateMyOrderStatusHook(params.orderId, data);

  // console.log(data);

  return null;
}

export async function loader({ params }) {
  const { order, paymentStatus } = await GetMyOrderHook(params.orderId);
  // console.log(order);
  return { order, paymentStatus };
}

export default OrderDetailAsOwner;
