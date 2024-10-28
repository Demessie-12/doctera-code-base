import { useState } from "react";
import {
  Form,
  Link,
  // json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
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
import { CreateOrderHook, GetMineOrderHook } from "../../Services/apiOrder.js";
import OrderItem from "./OrderItem.jsx";
import { useDocteraContext } from "../../context/Doctera.Context.jsx";
import secureLocalStorage from "react-secure-storage";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();
  const dispatch = useDispatch();
  const {
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const { loggedUser } = useDocteraContext();

  const [place, city, country] = address.split(", ");

  const isLoadingAddress = addressStatus === "loading";

  const [showDetail, setShowDetail] = useState(false);
  const [showShippingDetail, setShowShippingDetail] = useState(false);

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  if (!cart.length) return <EmptyCart />;
  // console.log(loggedUser);

  return (
    <div className="px-2 sm:px-3">
      <div className="px-4 py-6 md:mx-auto md:max-w-2xl md:px-0 xl:flex xl:max-w-6xl xl:gap-8">
        <div className="flex-1">
          <h2 className="mb-6 text-xl font-semibold text-DocOrange">
            Checkout
          </h2>
          <div className="Checkout-section flex flex-col gap-2 rounded-md border border-gray-300 bg-gray-200 px-4 py-3">
            <div className="flex flex-col gap-2 border-b border-gray-400 pb-2">
              <div className="flex justify-between">
                <p className="font-semibold">
                  {totalCartQuantity} item{totalCartQuantity > 1 && "s"}
                </p>
                <button
                  className="font-semibold text-blue-700"
                  onClick={() => setShowDetail(() => !showDetail)}
                >
                  {showDetail ? "Hide Details" : "Show details"}
                </button>
              </div>
              <div
                className={`mb-2 flex flex-col gap-2 transition duration-500 ${
                  showDetail ? "block" : "hidden"
                }`}
              >
                {cart.map((item) => (
                  <OrderItem item={item} />
                ))}
              </div>
            </div>
            <div>
              <button className="font-semibold text-blue-700">
                Have a promo code?
              </button>
            </div>
            <div className="flex justify-between border-t border-gray-400 pt-2">
              <p>Sub-total</p>
              <p className="font-semibold">{totalCartPrice} Birr</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
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
                  className={`rounded-lg" absolute bottom-8 right-5 w-64 flex-col rounded bg-white p-2 ${
                    showShippingDetail ? "flex" : "hidden"
                  }`}
                >
                  <p>
                    <span className="text-center font-semibold">
                      In Addis Ababa -
                    </span>
                    20 Birr per Km
                  </p>
                  <p>
                    <span className="font-semibold">Remote Area - </span> fixed
                    300 Birr
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between border-t border-gray-400 pt-2">
              <p className="font-semibold">Total</p>
              <p className="font-bold text-DocOrange">
                {/* {totalCartPrice + ClientDistance * 20} Birr */}
                {totalCartPrice} Birr
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="my-6 text-xl font-semibold text-DocOrange xl:mt-0">
            Personal Information
          </h2>

          <Form
            method="POST"
            className="rounded-md border border-gray-300 bg-gray-200 p-5 font-semibold"
          >
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-32">Full Name</label>
              <div className="grow">
                <input
                  className="input h-9 w-full rounded-xl pl-2"
                  type="text"
                  name="customer"
                  defaultValue={loggedUser?.fullname}
                  minLength="3"
                  required
                />
              </div>
            </div>

            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
              <label className="sm:basis-32">Phone number</label>
              <div className="grow">
                <input
                  className="input h-9 w-full rounded-xl pl-2"
                  type="tel"
                  name="phone"
                  defaultValue={loggedUser?.phoneNumber}
                  minLength="10"
                  maxLength="13"
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
                  placeholder="Please Click This Button ➡"
                  defaultValue={address || ""}
                  // value={address || ""}
                  required
                  className="input h-9 w-full rounded-xl rounded-r-3xl pl-2"
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
                    className="inline-block rounded-full bg-gray-800 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-800 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-3"
                    disabled={isLoadingAddress}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(fetchAddress());
                      // to render checkout section after updating distance value
                      setShowShippingDetail(true);
                      setTimeout(() => {
                        setShowShippingDetail(false);
                      }, 5000);
                    }}
                  >
                    Get Position
                  </button>
                </span>
              )}
            </div>

            <div>
              <input type="hidden" name="cart" value={JSON.stringify(cart)} />
              <input type="hidden" name="distance" id="distance" />
              <input type="hidden" name="duration" id="duration" />
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
                className="text-balck inline-block rounded-full bg-DocOrange/90 px-4 py-3 text-sm font-semibold tracking-wide hover:bg-DocOrange focus:outline-none focus:ring focus:ring-DocOrange focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4"
              >
                {isSubmitting
                  ? "Placing Order..."
                  : `Order Now ${totalCartPrice} Birr`}
              </button>
              <Link
                to="/cart"
                className={`${isSubmitting || isLoadingAddress ? "hidden" : ""} ml-5 inline-block rounded-full bg-gray-500 px-4 py-3 text-sm font-semibold tracking-wide text-black hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4`}
              >
                Back To Cart
              </Link>
            </div>
          </Form>
        </div>
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
  };

  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please  give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await CreateOrderHook(order);

  const loggedUser = secureLocalStorage.getItem("logged-user");
  loggedUser
    ? await GetMineOrderHook(loggedUser.username)
    : secureLocalStorage.setItem(
        "local-orders",
        [].concat(secureLocalStorage.getItem("local-orders"), newOrder),
      );
  store.dispatch(clearItem());
  console.log(secureLocalStorage.getItem("local-orders"));

  setTimeout(() => {
    console.log("redirected");
    window.location = `/order/${newOrder.orderId}`;
  }, 0.001);

  return null;
}

export default CreateOrder;
