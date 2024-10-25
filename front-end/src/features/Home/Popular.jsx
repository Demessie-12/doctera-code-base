import React, { useEffect } from "react";
import Item from "../../ui/Item";
import AOS from "aos";
import "aos/dist/aos.css";

function Popular({ allproducts }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="Popular rounded-2xl bg-blue-200 pb-4">
      <p className="mb-2 flex justify-center text-2xl font-bold text-gray-800">
        Popular Products
      </p>
      <div className="mx-auto grid grid-cols-2 gap-x-2 gap-y-4 min-[480px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {allproducts.map((product) => {
          if (product.category.includes("popular"))
            return <Item key={product.name} item={product} />;
        })}
      </div>
    </div>
  );
}

export default Popular;
