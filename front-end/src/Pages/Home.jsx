import { Link, useLoaderData } from "react-router-dom";
import { useDocteraContext } from "../context/Doctera.Context";
import { useSelector } from "react-redux";
import { getCart } from "../hooks/CartSlice";
import Popular from "../features/Home/Popular";
import NewCollections from "../features/Home/NewCollections";
import HeroSection from "../features/Home/HeroSection";
import TrustedBy from "../features/Home/TrustedBy";
import FaqSection from "../features/Home/FaqSection";
import CheckCategories from "../features/Home/CheckCategories";

function Home() {
  const cart = useSelector(getCart);
  const { allproducts } = useDocteraContext();
  // console.log(allproducts.length);
  return (
    <div className="mx-auto flex flex-col gap-4 md:max-w-4xl xl:max-w-7xl">
      <HeroSection />
      <CheckCategories />
      <NewCollections allproducts={allproducts} />
      <TrustedBy />
      <Popular allproducts={allproducts} />
      <FaqSection />
    </div>
  );
}

export default Home;
