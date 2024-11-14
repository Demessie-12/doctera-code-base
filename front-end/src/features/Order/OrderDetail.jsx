import React from "react";
import { SlCallOut } from "react-icons/sl";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { useLoaderData, useParams } from "react-router-dom";
import { GetOrderHook } from "../../Services/apiOrder";
import OrderItem from "./OrderItem";
import { Link } from "react-router-dom";

function OrderDetail() {
  const { order, paymentStatus } = useLoaderData();
  // console.log(order, paymentStatus);
  const orderDate = new Date(order.createdAt);
  const deliveryDate = new Date(order.dateOfDelivery);

  // setTimeout(() => {
  //   if (paymentStatus !== "success") {
  //     window.location.href = order.chapaUrl;
  //   }
  // }, "3000");

  return (
    <div className="mx-auto my-2 flex flex-col gap-2 px-5 sm:px-8 md:max-w-3xl">
      {/* <div
        className={`fixed left-1/2 top-14 -translate-x-1/2 rounded-xl bg-gray-950 ${paymentStatus === "success" ? "hidden" : ""}`}
      >
        <p className="z-50 mx-auto cursor-pointer rounded-l-2xl px-4 py-2 text-sm font-semibold text-white md:text-xl">
          You didn't finish{" "}
          <span className="text-yellow-600">your payment</span>
        </p>
      </div> */}
      <div className="flex justify-between">
        <h1 className="pt-1 text-sm font-bold text-gray-400 sm:text-xl">
          Order ID: <span className="text-white">{order.orderId}</span>
        </h1>
        <h1 className="h-8 rounded-xl bg-gray-600 py-1 pl-2 text-sm font-bold text-gray-200 sm:h-10 sm:text-xl">
          Status{" "}
          <span
            className={`rounded-r-xl px-2 pb-1.5 pt-2 align-middle ${
              order.status === "Delivered" && "bg-green-800 text-white"
            } ${
              order.status === "On delivery" && "bg-orange-600 text-white"
            } ${order.status === "Waiting" && "bg-yellow-500 text-black"}`}
          >
            {order.status}
          </span>
        </h1>
        <a href="tel:0900763648">
          <p className="flex rounded-2xl bg-DocOrange px-2 py-1 text-black sm:px-3 sm:py-2">
            <SlCallOut className="h-fit pt-1" /> &nbsp; Call
          </p>
        </a>
      </div>
      <div className="flex h-14 flex-col gap-1 border-b border-gray-400 pb-2 sm:h-fit sm:flex-row sm:gap-3">
        <div>
          <p className="text-base text-white">
            Order Date:{" "}
            <span className="font-semibold text-DocOrange">
              {orderDate.toDateString()}
            </span>
          </p>
        </div>
        <p className="hidden sm:flex">|</p>
        <div>
          <p className="absolute right-5 flex h-7 text-base font-bold text-white sm:relative sm:pl-5">
            <CiDeliveryTruck className="h-full text-xl text-DocOrange" />
            &nbsp;Estimated Delivery:&nbsp;
            <span className="text-DocOrange">
              {deliveryDate.toDateString()}
            </span>
          </p>
        </div>
      </div>

      <div className="my-2 mb-2 flex flex-col gap-2 rounded-md border border-gray-500 bg-gray-500 p-5">
        {order.products.map((item) => (
          <OrderItem item={item} />
        ))}
      </div>
      <div className="mx-auto my-2 grid w-full grid-cols-2 gap-5 border-t border-gray-400 px-5 pt-2 text-white">
        <div className="flex flex-col gap-2">
          <h2 className="text-center font-semibold text-DocOrange underline">
            Delivery
          </h2>
          <p className="pl-3 text-sm text-DocOrange">Address</p>
          <h2 className="flex pl-5 text-white">
            <CiLocationOn className="h-full text-xl text-white" /> &nbsp;
            {order.address}
          </h2>
          {/* <p className="pl-3 text-sm text-DocOrange">Distance</p>
          <h2 className="flex pl-5 text-white">
            <GiPathDistance className="h-full text-xl text-white" />
            &nbsp; {"3"} Km away from our Store
          </h2> */}
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-center font-semibold text-DocOrange underline">
            Order Summary
          </h2>
          <div className="flex justify-between">
            <p className="pl-3 text-DocOrange">Subtotal</p>
            <h2>
              {order.totalPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              Birr
            </h2>
          </div>
          {/* <div className="flex justify-between">
            <p className="pl-3 text-DocOrange">Delivery</p>
            <h2>{"15"} Birr</h2>
          </div> */}
          <div className="flex justify-between">
            <p className="pl-3 text-DocOrange">Discount</p>
            <h2>{"0"} Birr</h2>
          </div>
          <div className="mt-2 flex justify-between border-t border-dashed border-gray-300 pt-2">
            <p className="pl-3 text-white">Total</p>
            <h2 className="font-bold text-DocOrange">
              {order.totalPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              Birr
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  // console.log("hi from loader");
  const { order, paymentStatus } = await GetOrderHook(params.orderId);
  return { order, paymentStatus };
}

export default OrderDetail;
