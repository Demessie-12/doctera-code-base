import CartItem from "./../features/Cart/CartItem";
import EmptyCart from "./../features/Cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, getCart } from "./../hooks/CartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  console.log("cart page", cart);
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3 md:max-w-2xl md:mx-auto">
      <Link to="/">&larr; Back to menu</Link>

      <h2 className="mt-6 text-xl font-semibold">Your cart</h2>
      <ul className=" my-2 divide-y divide-stone-300 border-b border-stone-300">
        {cart.map((item) => (
          <CartItem item={item} key={item.productId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Link
          className="inline-block rounded-full bg-teal-800 text-sm font-semibold uppercase tracking-wide text-white hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-800 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4"
          to="/order/new"
        >
          Proceed To Order
        </Link>
        <button
          className="inline-block rounded-full bg-transparent border-2 border-stone-300 text-sm font-semibold uppercase tracking-wider text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 "
          onClick={() => dispatch(clearItem())}
          type="secondary"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
