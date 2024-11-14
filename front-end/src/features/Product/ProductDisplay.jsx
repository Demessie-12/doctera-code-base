import React, { useEffect, useState } from "react";

import { SlCallOut } from "react-icons/sl";

import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import UpdateItemQuantity from "./../Cart/UpdateItemQuantity.jsx";
import DeleteItem from "./../Cart/DeleteItem.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

function ProductDisplay({ product, handleAddToCart, isInCart }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [selectedImage, setSelectedImage] = useState(product.coverImage);

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
        <h2
          data-aos="zoom-in"
          className="hidden pt-1 text-lg font-bold capitalize sm:flex"
        >
          {product.name}
        </h2>
        <p data-aos="zoom-in">
          {product.description.split("\n").map((oneLine, i) => (
            <p key={i} className="block">
              {oneLine}
            </p>
          ))}
        </p>
        <div className="Star flex items-center">
          {["Placeholder"].map((placeholder) => {
            // console.log(product);
            let reviewStars = [];
            let emptyStar = [];
            for (let index = 1; index <= product.ratingsAverage; index++) {
              reviewStars.push("star");
            }
            for (let index = 5; index > product.ratingsAverage; index--) {
              emptyStar.push("star");
            }
            return (
              <div className="flex gap-1.5">
                {reviewStars.map((star, i) => (
                  <p
                    key={i}
                    data-aos="zoom-in"
                    className="h-fit w-5 text-2xl text-yellow-500"
                  >
                    <FaStar />
                  </p>
                ))}
                {emptyStar.map((star, i) =>
                  i == 0 && !Number.isInteger(product.ratingsAverage) ? (
                    <p
                      data-aos="zoom-in"
                      className="h-fit w-5 text-2xl text-yellow-500"
                    >
                      <FaStarHalfAlt />
                    </p>
                  ) : (
                    <p
                      data-aos="zoom-in"
                      className="h-fit w-5 text-2xl text-gray-400"
                    >
                      <FaStar />
                    </p>
                  ),
                )}
              </div>
            );
          })}
          <p data-aos="zoom-in" className="ml-2 text-center font-semibold">
            {product.ratingsAverage}
          </p>
          <p className="ml-2 text-center">{`(${
            product.ratingsQuantity || 0
          })`}</p>
        </div>
        <div data-aos="zoom-in" className="Condition flex">
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
        <div data-aos="zoom-in" className="Price flex text-xl">
          <p className="mr-2 font-bold capitalize">Price:</p>
          <p className="mr-2 text-gray-400 line-through">{`${
            product.oldPrice
              ? product.oldPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : (product.newPrice.toFixed(2) * 1.2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }`}</p>
          <p className="font-bold">{`${product.newPrice
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Birr`}</p>
        </div>
        <div data-aos="zoom-in" className="Contact flex text-xl">
          <p className="mr-2 font-bold capitalize">Contact:</p>
          <a href={`tel:${product.creatorPhone || "0900763647"}`}>
            <p className="inline-flex rounded-full bg-blue-700 px-2 py-1 text-base font-semibold uppercase tracking-wide text-white hover:bg-blue-400 hover:text-black focus:outline-none focus:ring focus:ring-blue-700 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-3 sm:py-2">
              <SlCallOut className="h-fit pt-1" /> &nbsp;{" "}
              {product.creatorPhone || "0900763647"}
            </p>
          </a>
        </div>
        <div>
          {isInCart ? (
            <div className="flex gap-2">
              <UpdateItemQuantity
                productId={product.productId}
                quantity={product.quantity}
              />
              <DeleteItem productId={product.productId} />
            </div>
          ) : (
            <button
              className={`${product.quantity > 0 ? "bg-DocOrange text-white hover:bg-DocOrange/65" : "bg-red-700 text-gray-400 hover:bg-red-700/65"} inline-block rounded-full px-2.5 py-1 text-lg font-semibold uppercase tracking-wide text-white hover:bg-DocOrange/65 focus:outline-none focus:ring focus:ring-teal-800 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-3 sm:py-2`}
              onClick={handleAddToCart}
            >
              {product.quantity > 0 ? "Add To Cart" : "Out OF Stock"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
