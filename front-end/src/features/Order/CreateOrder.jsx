import { useState } from "react";
import {
  Form,
  Link,
  // json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "./../../Services/apiProducts";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  clearItem,
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../../hooks/CartSlice";
import EmptyCart from "./../Cart/EmptyCart";
import store from "./../../store.js";
import { fetchAddress } from "../../hooks/UserSlice.js";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import MapfromHtml from "./MapfromHtml.jsx";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();
  const dispatch = useDispatch();
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);

  const isLoadingAddress = addressStatus === "loading";

  const [withPriority, setWithPriority] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [shippingPrice, setShippingPrice] = useState();
  const [showShippingDetail, setShowShippingDetail] = useState(false);

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <div className="px-4 py-6 md:px-0 md:mx-auto md:max-w-2xl xl:flex xl:gap-8 xl:max-w-6xl">
        <div className="flex-1">
          <h2 className=" mb-6 text-xl font-semibold text-gray-900">
            Checkout
          </h2>
          <div className="Checkout-section flex flex-col gap-2 border bg-gray-200 border-gray-300 px-4 py-3 rounded-md">
            <div className="flex flex-col gap-2 border-b pb-2 border-gray-400">
              <div className="flex justify-between">
                <p className="font-semibold">
                  {totalCartQuantity} item{totalCartQuantity > 1 && "s"}
                </p>
                <button
                  className="text-blue-700 font-semibold"
                  onClick={() => setShowDetail(() => !showDetail)}
                >
                  {showDetail ? "Hide Details" : "Show details"}
                </button>
              </div>
              <div
                className={`flex flex-col gap-2 transition mb-2 ${
                  showDetail ? "block" : "hidden"
                }`}
              >
                {cart.map((item) => (
                  <li
                    key={item.name}
                    className="py-3 flex items-center justify-between  pl-3 sm:pl-5 md:pl-7 pr-3 bg-white"
                  >
                    <div className="flex gap-2 ">
                      <img src={item.coverImage} className="h-8" alt="" />
                      <p className="capitalize">{item.name}</p>
                    </div>
                    <p>
                      {item.quantity} x {item.unitPrice}
                    </p>
                    <p className="text-sm font-bold">{item.totalPrice} Birr</p>
                  </li>
                ))}
              </div>
            </div>
            <div>
              <button
                className="text-blue-700 font-semibold"
                onClick={() => setShippingPrice(true)}
              >
                Have a promo code?
              </button>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-400">
              <p>Sub-total</p>
              <p className="font-semibold">{totalCartPrice} Birr</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              {shippingPrice ? (
                <p className="font-semibold">{shippingPrice} Birr</p>
              ) : (
                <div className="relative flex gap-2">
                  <p>Based on your location</p>
                  <span>
                    <InformationCircleIcon
                      className="h-7"
                      onClick={() => {
                        setShowShippingDetail(true);
                        setTimeout(() => {
                          setShowShippingDetail(false);
                        }, 5000);
                      }}
                    />
                  </span>
                  <div
                    className={`absolute bottom-8 right-5 flex-col bg-white p-2 w-64 rounded rounded-lg" ${
                      showShippingDetail ? "flex" : "hidden"
                    }`}
                  >
                    <p>
                      <span className="font-semibold text-center">
                        In addis ababa -
                      </span>
                      30 Birr per Km
                    </p>
                    <p>
                      <span className="font-semibold">Remote Area - </span>{" "}
                      fixed 300 Birr
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-400">
              <p className="font-semibold">Total</p>
              <p className="font-bold">2120 Birr</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className=" my-6 xl:mt-0 text-xl font-semibold text-gray-900">
            Personal Information
          </h2>

          <Form
            method="POST"
            className="p-5 bg-gray-200 border border-gray-300 rounded-md font-semibold"
          >
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center ">
              <label className="sm:basis-32">Full Name</label>
              <div className="grow">
                <input
                  className="input w-full h-9 pl-2 rounded-xl"
                  type="text"
                  name="customer"
                  defaultValue={username}
                  required
                />
              </div>
            </div>

            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-32">Phone number</label>
              <div className="grow">
                <input
                  className="input w-full  h-9 pl-2 rounded-xl"
                  type="tel"
                  name="phone"
                  required
                />
                {formErrors?.phone && (
                  <p className="mt-2 rounded-md bg-red-200 p-2 text-xs text-red-700">
                    {formErrors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-32">Address</label>
              <div className="grow">
                <input
                  type="text"
                  name="address"
                  disabled={isLoadingAddress}
                  defaultValue={address}
                  required
                  className="input w-full h-9 pl-2 rounded-xl"
                />
                {addressStatus === "error" &&
                  (toast.error("Please allow Location access"),
                  (
                    <p className="mt-2 rounded-md bg-red-200 p-2 text-xs text-red-700">
                      {errorAddress} error
                    </p>
                  ))}
              </div>
              {!position.latitude && !position.longtitude && (
                <span className="absolute right-0 top-9 z-10 sm:top-0">
                  <button
                    type="small"
                    id="getAddress"
                    className="inline-block rounded-full bg-gray-800 font-semibold uppercase tracking-wide text-white hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-800 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 text-xs md:px-5 md:py-3"
                    disabled={isLoadingAddress}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(fetchAddress());
                    }}
                  >
                    Get Position
                  </button>
                </span>
              )}
            </div>

            <div className="mb-10 flex items-center gap-2">
              <input
                type="checkbox"
                name="priority"
                id="priority"
                className="h-6 w-6 accent-gray-800 focus:outline-none focus:ring focus:ring-gray-800 focus:ring-offset-2"
                value={withPriority}
                onChange={(e) => setWithPriority(e.target.checked)}
              />
              <label htmlFor="priority" className="font-medium">
                Want to yo give your order priority?
              </label>
            </div>

            <div>
              <input type="hidden" name="cart" value={JSON.stringify(cart)} />
              <input
                type="hidden"
                name="position"
                value={
                  position.latitude && position.longitude
                    ? `${position.latitude}, ${position.longitude}`
                    : ""
                }
              />
              <button
                disabled={isSubmitting || isLoadingAddress}
                type="primary"
                className="inline-block rounded-full bg-gray-800 text-sm font-semibold tracking-wide text-white hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-800 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4"
              >
                {isSubmitting
                  ? "Placing Order..."
                  : `Order Now ${totalPrice} Birr`}
              </button>
              <Link
                to="/cart"
                className="inline-block rounded-full ml-5 bg-gray-500 text-sm font-semibold tracking-wide text-black hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4"
              >
                Back To Cart
              </Link>
            </div>
          </Form>
        </div>
      </div>
      <div className="block">
        <MapfromHtml />{" "}
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority,
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please  give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  store.dispatch(clearItem());

  return redirect(`/order/${newOrder.id}`);

  // return null;
}

export default CreateOrder;
