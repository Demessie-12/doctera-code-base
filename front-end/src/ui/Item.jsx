import React from "react";
import { Link } from "react-router-dom";
import discountTag from "./../Assets/discount-tag.jpg";

function Item(props) {
  const { item } = props;
  return (
    <div className="relative rounded-md cursor-pointer hover:scale-105 hover:p-2 hover:transition hover:bg-blue-700 bg-gray-800 hover:text-black text-white border-gray-400 border hover:z-10">
      <div className="absolute top-0 left-0 w-1/3 h-auto">
        {item.category.includes("discount") && (
          <img src={discountTag} alt="discount tag" />
        )}
      </div>
      <Link
        to={`/product/${item.productId}_${item.slug}`}
        className="block w-full lg:max-w-64 xl:w-full"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={item.coverImage}
          className="mx-auto rounded-md w-auto h-32 sm:h-40 md:h-44 lg:h-52"
        />
        <div className=" capitalize font-semibold text-lg p-2 line-clamp-2 h-16">
          {item.name}
        </div>
        <div className="flex justify-between p-2">
          <div className="flex-col ">
            <p className="font-semibold">{item.newPrice}</p>
            <p className=" text-gray-400 line-through">
              {item.oldPrice ? item.oldPrice : item.newPrice.toFixed(2) * 1.2}
            </p>
          </div>
          <p
            className={` hover:text-red-600 sm:text-lg font-medium mr-3 ${
              item.condition === "Brand New" ? "text-green-500" : "text-red-600"
            }`}
          >
            {item.condition}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Item;
