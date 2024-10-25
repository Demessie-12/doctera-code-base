import React, { useState } from "react";

import { SlCallOut } from "react-icons/sl";

import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import UpdateItemQuantity from "./../Cart/UpdateItemQuantity.jsx";
import DeleteItem from "./../Cart/DeleteItem.jsx";

function ProductDisplay({ product, handleAddToCart, isInCart }) {
  const [selectedImage, setSelectedImage] = useState(product.coverImage);
  console.log(product._id);
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-y-auto sm:flex-row sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6">
      <div className="left block sm:w-full lg:w-[500px]">
        <h2 className="block py-1 text-2xl font-bold capitalize shadow-sm sm:hidden">
          {product.name}
        </h2>
        <div className="bg-gray-700 p-2 lg:w-[500px]">
          <div className="h-64 sm:h-72 md:h-80">
            <img
              src={selectedImage}
              className="mx-auto aspect-auto h-full w-auto rounded-md"
            />
          </div>
          <div className="sm:fit flex gap-2 overflow-x-auto py-2 sm:py-3">
            <p className="placeholder w-full"></p>
            {product.images.length > 0 &&
              product.images.map((links) => (
                <img
                  key={links}
                  src={links}
                  className={`h-20 w-auto sm:h-24 ${
                    selectedImage !== links
                      ? "border grayscale"
                      : "border-2 border-red-700"
                  }`}
                  onClick={() => setSelectedImage(links)}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="right flex w-full flex-col gap-2 pl-2 text-lg text-gray-300">
        <h2 className="hidden pt-1 text-lg font-bold capitalize sm:flex">
          {product.name}
        </h2>
        <p>{product.description}</p>
        <div className="Star flex items-center">
          {["Placeholder"].map((placeholder) => {
            console.log(23);
            let reviewStars = [];
            let emptyStar = [];
            for (let index = 1; index <= product.ratingsAverage; index++) {
              reviewStars.push("star");
            }
            for (let index = 5; index > product.ratingsAverage; index--) {
              emptyStar.push("star");
            }
            console.log(product.ratingsAverage);
            return (
              <div className="flex gap-1.5">
                {reviewStars.map((star) => (
                  <p className="h-fit w-5 text-2xl text-yellow-500">
                    <FaStar />
                  </p>
                ))}
                {emptyStar.map((star, i) =>
                  i == 0 && !Number.isInteger(product.ratingsAverage) ? (
                    <p className="h-fit w-5 text-2xl text-yellow-500">
                      <FaStarHalfAlt />
                    </p>
                  ) : (
                    <p className="h-fit w-5 text-2xl text-gray-400">
                      <FaStar />
                    </p>
                  ),
                )}
              </div>
            );
          })}
          <p className="ml-2 text-center font-semibold">
            {product.ratingsAverage}
          </p>
          <p className="ml-2 text-center">{`(${
            product.ratingsQuantity || 0
          })`}</p>
        </div>
        <div className="Condition flex">
          <p className="font-bold">Condition:- </p>
          <p
            className={`font-bold ${
              product.condition === "Brand New"
                ? "text-DocOrange"
                : "text-red-600"
            }`}
          >
            {product.condition}
          </p>
        </div>
        <div className="Price flex text-xl">
          <p className="mr-2 font-bold capitalize">Price:</p>
          <p className="mr-2 text-gray-400 line-through">{`${
            product.oldPrice
              ? product.oldPrice
              : product.newPrice.toFixed(2) * 1.2
          }`}</p>
          <p className="font-bold">{`${product.newPrice} Birr`}</p>
        </div>
        <div className="Price flex text-xl">
          <p className="mr-2 font-bold capitalize">Contact:</p>
          <a href={`tel:${product.creatorPhone || "0900763647"}`}>
            <p className="inline-flex rounded-full bg-blue-700 px-2 py-1 text-sm font-semibold uppercase tracking-wide text-white hover:bg-blue-400 hover:text-black focus:outline-none focus:ring focus:ring-blue-700 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-3 sm:py-2">
              <SlCallOut className="h-fit pt-1" /> &nbsp;{" "}
              {product.creatorPhone || "0900763647"}
            </p>
          </a>
        </div>
        <div>
          {isInCart ? (
            <div className="flex gap-2">
              <UpdateItemQuantity productId={product.productId} />
              <DeleteItem productId={product.productId} />
            </div>
          ) : (
            <button
              className="inline-block rounded-full bg-DocOrange px-2.5 py-1 text-sm font-semibold uppercase tracking-wide text-white hover:bg-DocOrange/65 focus:outline-none focus:ring focus:ring-teal-800 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-3 sm:py-2"
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
