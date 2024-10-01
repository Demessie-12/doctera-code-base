import React from "react";
// import { PiGreaterThanFill } from "react-icons/pi";
import { SiShopee } from "react-icons/si";

import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const { product } = props;

  return (
    <div className="flex gap-1 mt-2 md:mt-4 pl-2 md:pl-5 lg:pl-8 xl:pl-10">
      <Link to="/" className="flex gap-1 font-bold text-blue-800">
        <p className="text-xl">
          <SiShopee />
        </p>
        SHOP
      </Link>
      <p className="text-gray-900 font-extrabold">&#62;</p>
      <Link
        to={`/c/${product.category[0]}`}
        className="text-gray-900 font-bold"
      >
        <p>{product.category[0]}</p>
      </Link>
      <p className="text-gray-900 font-extrabold">&#62;</p>
      <p className=" capitalize">{product.name}</p>
    </div>
    // <Link to="/"></Link>
  );
};

export default Breadcrumb;
