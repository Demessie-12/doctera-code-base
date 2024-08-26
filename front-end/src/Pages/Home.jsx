import { Link, useLoaderData } from "react-router-dom";
import { useDocteraContext } from "../context/Doctera.Context";
import Item from "../ui/Item";
import { useSelector } from "react-redux";
import { getCart } from "../hooks/CartSlice";

function Home() {
  const cart = useSelector(getCart);
  const { allproducts } = useDocteraContext();
  // console.log(allproducts.length);
  return (
    <div className="mx-auto md:max-w-4xl xl:max-w-7xl">
      <p className="text-2xl font-bold">Home Page</p>
      <div className=" mx-auto grid grid-cols-2 min-[480px]:grid-cols-3 md:grid-cols-4  gap-x-2 gap-y-4 xl:grid-cols-5 ">
        {allproducts.map((product) => {
          return <Item key={product.name} item={product} />;
        })}
      </div>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/Signup">signup</Link>
      <br />
      <Link to="/product">product</Link>
      <br />
      <Link to="/cart">cart</Link>
      <br />
      <Link to="/order">order</Link>
      <br />
      <Link to="/search">search</Link>
      <br />
      <Link to="/profile">profile</Link>
      <br />
      <Link to="/admin">admin</Link>
    </div>
  );
}

export default Home;
