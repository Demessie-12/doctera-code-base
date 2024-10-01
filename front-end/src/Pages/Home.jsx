import { Link, useLoaderData } from "react-router-dom";
import { useDocteraContext } from "../context/Doctera.Context";
import { useSelector } from "react-redux";
import { getCart } from "../hooks/CartSlice";
import Popular from "../features/Home/Popular";
import NewCollections from "../features/Home/NewCollections";

function Home() {
  const cart = useSelector(getCart);
  const { allproducts } = useDocteraContext();
  // console.log(allproducts.length);
  return (
    <div className="flex flex-col gap-4 mx-auto md:max-w-4xl xl:max-w-7xl">
      <NewCollections allproducts={allproducts} />
      <Popular allproducts={allproducts} />
    </div>
  );
}

export default Home;
