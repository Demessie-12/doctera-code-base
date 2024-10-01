import React, { useState } from "react";

import { SlCallOut } from "react-icons/sl";

import StarIcon from "./../../Assets/star_icon.png";
import StarIconHalf from "./../../Assets/star_dull_icon.png";
import UpdateItemQuantity from "./../Cart/UpdateItemQuantity.jsx";
import DeleteItem from "./../Cart/DeleteItem.jsx";
function ProductDisplay({ product, handleAddToCart, isInCart }) {
  const [selectedImage, setSelectedImage] = useState(product.coverImage);
  console.log(product._id);
  return (
    <div className="relative flex flex-1 flex-col sm:flex-row sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 mx-auto w-full max-w-7xl overflow-y-auto">
      <div className="left block sm:w-full  lg:w-[500px]">
        <h2 className="block sm:hidden font-bold capitalize text-2xl shadow-sm py-1">
          {product.name}
        </h2>
        <div className="lg:w-[500px] bg-gray-700 p-2">
          <div className="h-64 sm:h-72 md:h-80">
            <img
              src={selectedImage}
              className=" rounded-md mx-auto aspect-auto  h-full w-auto"
            />
          </div>
          <div className="flex gap-2 sm:fit overflow-x-auto py-2 sm:py-3">
            <p className="placeholder w-full"></p>
            {product.images.length > 0 &&
              product.images.map((links) => (
                <img
                  key={links}
                  src={links}
                  className={` h-20 sm:h-24 w-auto ${
                    selectedImage !== links
                      ? "grayscale border"
                      : "border-2 border-red-700"
                  }`}
                  onClick={() => setSelectedImage(links)}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="right flex flex-col gap-2 text-lg pl-2 w-full text-gray-800">
        <h2 className="hidden sm:flex font-bold capitalize text-lg pt-1 ">
          {product.name}
        </h2>
        <p>{product.description}</p>
        <div className="Star flex">
          <img src={StarIcon} alt="star icon" className="h-full" />
          <img src={StarIcon} alt="star icon" className="h-full" />
          <img src={StarIcon} alt="star icon" className="h-full" />
          <img src={StarIcon} alt="star icon" className="h-full" />
          <img src={StarIconHalf} alt="star icon" className="h-full" />
          <p className="ml-2 text-center">{`(${
            product.reviews.length || 26
          })`}</p>
        </div>
        <div className="Condition flex">
          <p className="font-bold">Condition:- </p>
          <p
            className={` font-bold ${
              product.condition === "Brand New"
                ? "text-green-500"
                : "text-red-600"
            }`}
          >
            {product.condition}
          </p>
        </div>
        <div className="Price flex text-xl">
          <p className="font-bold capitalize mr-2">Price:</p>
          <p className="text-gray-400 line-through mr-2">{`${
            product.oldPrice
              ? product.oldPrice
              : product.newPrice.toFixed(2) * 1.2
          }`}</p>
          <p className="font-bold ">{`${product.newPrice} Birr`}</p>
        </div>
        <div className="Price flex text-xl">
          <p className="font-bold capitalize mr-2">Contact:</p>
          <a href={`tel:${product.creatorPhone || "0900763647"}`}>
            <p className="inline-flex rounded-full bg-blue-700 text-sm font-semibold uppercase tracking-wide text-white hover:bg-blue-400 hover:text-black focus:outline-none focus:ring focus:ring-blue-700 focus:ring-offset-2 disabled:cursor-not-allowed px-2 py-1 sm:px-3 sm:py-2">
              <SlCallOut className="pt-1 h-fit " /> &nbsp;{" "}
              {product.creatorPhone || "0900763647"}
            </p>
          </a>
        </div>
        <div>
          {isInCart ? (
            <div className="flex gap-2">
              <UpdateItemQuantity productId={productId} />
              <DeleteItem productId={productId} />
            </div>
          ) : (
            <button
              className="inline-block rounded-full bg-teal-800 text-sm font-semibold uppercase tracking-wide text-white hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-800 focus:ring-offset-2 disabled:cursor-not-allowed px-2.5 py-1 sm:px-3 sm:py-2"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
