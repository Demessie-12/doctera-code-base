import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import AddReview from "./AddReview";
import Aos from "aos";
import "aos/dist/aos.css";

function ReviewsAndDescription({ detail, reviews, productId }) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const [selected, setSelcted] = useState("detail");
  console.log(reviews);
  return (
    <div className="my-2 flex flex-col gap-0 px-3">
      <div className="flex">
        <p
          className={`cursor-pointer border border-b-0 border-r-0 border-gray-400 p-5 px-7 font-semibold ${
            selected === "detail"
              ? "bg-transparent text-xl text-DocOrange"
              : "bg-gray-600 text-gray-800"
          }`}
          onClick={() => setSelcted("detail")}
        >
          Detail
        </p>
        <p
          className={`cursor-pointer border border-b-0 border-gray-400 p-5 font-semibold ${
            selected === "reviews"
              ? "bg-transparent text-xl text-DocOrange"
              : "bg-gray-600 text-gray-800"
          }`}
          onClick={() => setSelcted("reviews")}
        >
          Reviews
        </p>
      </div>
      <div className="max-h-96 overflow-y-auto border border-gray-400">
        {selected == "detail" ? (
          <p className="p-3 text-white md:p-5 lg:p-7 xl:p-8">{detail}</p>
        ) : (
          <div data-aos="fade-up" className="relative">
            <div data-aos="zoom-in" className="sticky top-0">
              <AddReview product={productId} />
            </div>
            {reviews?.length > 0 ? (
              reviews.map((singleReview, i) => {
                let reviewStars = [];
                let emptyStar = [];
                for (let index = 0; index < singleReview.rating; index++) {
                  reviewStars.push("star");
                }
                for (let index = 5; index > singleReview.rating; index--) {
                  emptyStar.push("star");
                }
                return (
                  <div className={`flex gap-2 p-3 md:p-5 lg:p-7 xl:p-8`}>
                    <img
                      src={singleReview.reviewer.profilePic}
                      alt="reviewer photo"
                      className="h-fit w-10"
                    />
                    <div className="flex w-full flex-col">
                      <div className="flex justify-between">
                        <p className="font-semibold text-white">
                          {singleReview.reviewer.fullname}
                        </p>
                        <p className="text-white">
                          {new Date(singleReview.createdAt).toDateString()}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {reviewStars.map((star) => (
                          <p className="h-fit w-5 text-yellow-500">
                            <FaStar />
                          </p>
                        ))}
                        {emptyStar.map((star) => (
                          <p className="h-fit w-5 text-gray-400">
                            <FaStar />
                          </p>
                        ))}
                      </div>
                      <p className="text-DocOrange">{singleReview.review}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="py-3 pl-2 font-bold text-DocOrange">
                No one review this product! 😢😢 be the first
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewsAndDescription;
