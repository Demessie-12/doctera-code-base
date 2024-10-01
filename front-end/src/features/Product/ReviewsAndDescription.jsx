import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function ReviewsAndDescription({ detail, reviews }) {
  const [selected, setSelcted] = useState("detail");
  return (
    <div className="flex flex-col gap-0 px-3 my-2">
      <div className="flex">
        <p
          className={`p-5 px-7 border border-r-0 border-b-0 border-gray-400 font-semibold cursor-pointer ${
            selected === "detail" ? "bg-transparent" : "bg-gray-300"
          }`}
          onClick={() => setSelcted("detail")}
        >
          Detail
        </p>
        <p
          className={`p-5 border border-b-0 border-gray-400 font-semibold cursor-pointer ${
            selected === "reviews" ? "bg-transparent" : "bg-gray-300"
          }`}
          onClick={() => setSelcted("reviews")}
        >
          Reviews
        </p>
      </div>
      <div className="border border-gray-400 max-h-96 overflow-y-auto">
        {selected == "detail" ? (
          <p className="p-3 md:p-5 lg:p-7 xl:p-8 ">{detail}</p>
        ) : [2, 5, 5]?.length > 0 ? (
          [
            { star: 3 },
            { star: 5 },
            { star: 4 },
            { star: 3 },
            { star: 5 },
            { star: 4 },
          ].map((review, i) => {
            let reviewStars = [];
            let emptyStar = [];
            for (let index = 0; index < review.star; index++) {
              reviewStars.push("star");
            }
            for (let index = 5; index > review.star; index--) {
              emptyStar.push("star");
            }
            return (
              <div className={`flex gap-2 p-3 md:p-5 lg:p-7 xl:p-8 `}>
                <img
                  src="https://avatar.iran.liara.run/public/boy?username=new"
                  alt="reviewer photo"
                  className="w-10 h-fit"
                />
                <div className="flex flex-col w-full">
                  <div className="flex justify-between">
                    <p className="font-semibold text-black">Demessie Wondimu</p>
                    <p>September 4, 2024</p>
                  </div>
                  <div className="flex gap-1">
                    {reviewStars.map((star) => (
                      <p className="text-yellow-500 w-5 h-fit">
                        <FaStar />
                      </p>
                    ))}
                    {emptyStar.map((star) => (
                      <p className="text-gray-400 w-5 h-fit">
                        <FaStar />
                      </p>
                    ))}
                  </div>
                  <p>This is amazing product. I loved it.</p>
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
