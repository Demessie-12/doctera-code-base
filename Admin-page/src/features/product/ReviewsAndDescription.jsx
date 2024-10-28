import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function ReviewsAndDescription({ product }) {
  const [selected, setSelcted] = useState("detail");
  console.log(product);
  return (
    <div className="my-2 flex flex-col gap-0 px-3">
      <div className="flex">
        <p
          className={`cursor-pointer border border-b-0 border-r-0 border-gray-400 p-5 px-7 font-semibold ${
            selected === "detail"
              ? "bg-transparent"
              : "bg-gray-700 text-gray-500"
          }`}
          onClick={() => setSelcted("detail")}
        >
          Detail
        </p>
        <p
          className={`cursor-pointer border border-b-0 border-gray-400 p-5 font-semibold ${
            selected === "reviews"
              ? "bg-transparent"
              : "bg-gray-700 text-gray-500"
          }`}
          onClick={() => setSelcted("reviews")}
        >
          Reviews
        </p>
      </div>
      <div className="max-h-96 overflow-y-auto border border-gray-400 bg-transparent">
        {selected == "detail" ? (
          <p className="p-3 md:p-5 lg:p-7 xl:p-8">{product?.detail}</p>
        ) : product.reviews?.length > 0 ? (
          product.reviews.map((SingleReview, i) => {
            let reviewStars = [];
            let emptyStar = [];
            for (let index = 0; index < SingleReview.rating; index++) {
              reviewStars.push("star");
            }
            for (let index = 5; index > SingleReview.rating; index--) {
              emptyStar.push("star");
            }
            return (
              <div className={`relative flex gap-2 p-3 md:p-5 lg:p-7 xl:p-8`}>
                <img
                  src={SingleReview.reviewer.profilePic}
                  alt="reviewer photo"
                  className="h-fit w-10"
                />
                <div className="flex w-full flex-col pr-14">
                  <div className="flex justify-between">
                    <p className="font-semibold text-gray-100">
                      {SingleReview.reviewer.fullname}
                    </p>
                    <p>{new Date(SingleReview.createdAt).toDateString()}</p>
                  </div>
                  <div className="flex gap-1">
                    {reviewStars.map((star, i) => (
                      <p key={i} className="h-fit w-5 text-yellow-500">
                        <FaStar />
                      </p>
                    ))}
                    {emptyStar.map((star, i) => (
                      <p key={i} className="h-fit w-5 text-gray-400">
                        <FaStar />
                      </p>
                    ))}
                  </div>
                  <p>{SingleReview.review}</p>
                </div>
                <div className="absolute right-1 pl-2">
                  <button className="rounded-full bg-red-700 px-2 py-1 font-bold text-white">
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No one review this product! 😢😢</p>
        )}
      </div>
    </div>
  );
}

export default ReviewsAndDescription;
