import React from "react";
// import { PiGreaterThanFill } from "react-icons/pi";
import { SiShopee } from "react-icons/si";

import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const { product } = props;

  return (
    <div className="mt-2 flex gap-1 pl-2 md:mt-4 md:pl-5 lg:pl-8 xl:pl-10">
      <Link to="/" className="flex gap-1 font-bold text-blue-800">
        <p className="text-xl">
          <SiShopee />
        </p>
        SHOP
      </Link>
      <p className="font-extrabold text-gray-900">&#62;</p>
      <Link
        to={`/c/${product.category[0]}`}
        className="font-bold text-gray-900"
      >
        <p>{product.category[0]}</p>
      </Link>
      <p className="font-extrabold text-gray-900">&#62;</p>
      <p className="capitalize">{product.name}</p>
    </div>
    // <Link to="/"></Link>
  );
};

export default Breadcrumb;
