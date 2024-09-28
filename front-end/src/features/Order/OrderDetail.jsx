import React from "react";
import { SlCallOut } from "react-icons/sl";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { useLoaderData, useParams } from "react-router-dom";
import { GetOrderHook } from "../../Services/apiOrder";
import OrderItem from "./OrderItem";

function OrderDetail() {
  const order = useLoaderData();
  console.log(order);
  const orderDate = new Date(order.createdAt);
  const deliveryDate = new Date(order.dateOfDelivery);
  return (
    <div className=" px-3 sm:px-5 my-2 md:max-w-3xl mx-auto  flex flex-col gap-2">
      <div className="flex justify-between">
        <h1 className="font-bold text-sm sm:text-xl pt-1">
          Order ID: {order.orderId}
        </h1>
        <h1 className="font-bold text-sm sm:text-xl h-8 sm:h-10 rounded-xl py-1 bg-gray-600 text-gray-200 pl-2">
          Status{" "}
          <span
            className={` px-2 pt-2 pb-1.5 align-middle
              rounded-r-xl ${
                order.status === "Delivered" && "bg-green-800 text-white"
              } ${
              order.status === "On delivery" && "bg-orange-600 text-white"
            } ${order.status === "Waiting" && "bg-yellow-500 text-black"}`}
          >
            {order.status}
          </span>
        </h1>
        <a href="tel:0900763648">
          <p className="flex bg-blue-700 py-1 sm:py-2 px-2 sm:px-3 rounded-2xl text-black">
            <SlCallOut className="pt-1 h-fit " /> &nbsp; Call
          </p>
        </a>
      </div>
      <div className="flex flex-col gap-1 h-14 sm:h-fit sm:flex-row sm:gap-3 pb-2 border-b border-gray-400">
        <div>
          <p className="text-base text-gray-600">
            Order Date:{" "}
            <span className="text-black">{orderDate.toDateString()}</span>
          </p>
        </div>
        <p className="hidden sm:flex">|</p>
        <div>
          <p className="flex absolute right-5 sm:relative sm:pl-5 h-7 text-base text-blue-600 font-bold">
            <CiDeliveryTruck className="h-full" />
            &nbsp;Estimated Delivery:&nbsp;
            <span>{deliveryDate.toDateString()}</span>
          </p>
        </div>
      </div>

      <div
        className="flex flex-col gap-2 p-5
     mb-2 bg-gray-200 border border-gray-300 rounded-md my-2"
      >
        {order.products.map((item) => (
          <OrderItem item={item} />
        ))}
      </div>
      <div className="grid grid-cols-2 w-full mx-auto px-5 gap-5 border-t border-gray-400  my-2 pt-2">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-center underline">Delivery</h2>
          <p className="text-gray-500 pl-3 text-sm">Address</p>
          <h2 className="flex text-gray-900 pl-5">
            <CiLocationOn className="h-full text-red-700 text-xl" /> &nbsp;
            {order.address}
          </h2>
          <p className="text-gray-500 pl-3 text-sm">Distance</p>
          <h2 className="flex text-gray-900 pl-5">
            <GiPathDistance className="h-full text-red-700 text-xl" />
            &nbsp; {"3"} Km away from our Store
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-center underline">Order Summary</h2>
          <div className="flex justify-between">
            <p className="text-gray-500 pl-3">Subtotal</p>
            <h2>{order.totalPrice} Birr</h2>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 pl-3 ">Delivery</p>
            <h2>{"15"} Birr</h2>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 pl-3">Discount</p>
            <h2>{"0.00"} Birr</h2>
          </div>
          <div className="flex justify-between pt-2 mt-2 border-t border-gray-300 border-dashed	">
            <p className="text-gray-900 pl-3 ">Total</p>
            <h2>{order.totalPrice} Birr</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  console.log("hi from loader");
  const Order = GetOrderHook(params.orderId);
  return Order;
}

export default OrderDetail;
