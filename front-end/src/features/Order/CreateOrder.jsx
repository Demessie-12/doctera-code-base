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
import { clearItem, getCart, getTotalCartPrice } from "../../hooks/CartSlice";
import EmptyCart from "./../Cart/EmptyCart";
import store from "./../../store.js";
import { fetchAddress } from "./../../Services/apiProducts";

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
  } = {
    username: "Dems",
    position: "hi",
    address: "Addis Ababa",
    error: "",
    status: "find",
  };

  const isLoadingAddress = addressStatus === "loading";

  const [withPriority, setWithPriority] = useState(false);

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  console.log(totalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6 bg-gray-200">
      <h2 className=" mb-6 text-xl font-semibold">Ready to order? Let's go!</h2>
      {/* React form navigate away */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <div className="grow">
            <input
              className="input w-full "
              type="text"
              name="customer"
              defaultValue={username}
              required
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full " type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-200 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
              className="input w-full "
            />
            {addressStatus === "error" && (
              <p className="mt-2 rounded-md bg-red-200 p-2 text-xs text-red-700">
                {errorAddress} error
              </p>
            )}
          </div>
          {!position.latitude && !position.longtitude && (
            <span className="absolute right-1 top-9 z-10 sm:top-1">
              <button
                type="small"
                className="inline-block rounded-full bg-gray-800 font-semibold uppercase tracking-wide text-white hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-800 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 text-xs md:px-5 md:py-2.5"
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
            {isSubmitting ? "Placing Order..." : `Order Now ${totalPrice} Birr`}
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
