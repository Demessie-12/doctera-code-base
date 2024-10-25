import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import discountTag from "./../Assets/discount-tag.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Item(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { item } = props;
  return (
    <div
      data-aos="fade-up"
      className="item relative cursor-pointer rounded-md border border-gray-400 bg-DocOrange text-black duration-500 hover:z-10 hover:scale-105 hover:bg-DocBlue hover:p-2 hover:text-black hover:transition hover:duration-500"
    >
      <div className="absolute left-0 top-0 h-auto w-1/3">
        {item.category.includes("discount") && (
          <img src={discountTag} alt="discount tag" />
        )}
      </div>
      <Link
        to={`/product/${item.productId}_${item.slug}`}
        className="block w-full lg:max-w-64 xl:w-full"
      >
        <img
          src={item.coverImage}
          className="mx-auto h-32 w-auto rounded-md sm:h-40 md:h-44 lg:h-52"
        />
        <div className="line-clamp-2 h-16 p-2 text-lg font-semibold capitalize">
          {item.name}
        </div>
        <div className="flex justify-between p-2">
          <div className="flex-col">
            <p className="font-semibold">{item.newPrice}</p>
            <p className="text-gray-400 line-through">
              {item.oldPrice ? item.oldPrice : item.newPrice.toFixed(2) * 1.2}
            </p>
          </div>
          <p
            className={`mr-3 font-medium hover:text-red-600 sm:text-lg ${
              item.condition === "Brand New"
                ? "h-fit rounded-xl bg-white px-2 text-green-700"
                : "h-fit rounded-xl bg-red-600 px-2 text-white"
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
