import React, { useState } from "react";
import NoImagePlaceholder from "../../Assets/NO_Image_Available.png";

import { Link, useParams } from "react-router-dom";
import CloudinaryUpload from "../../Services/CloudinaryUpload";
function ImageEditor({
  selectedImage,
  setSelectedImage,
  allImages,
  setAllImages,
}) {
  const remove = (imageLink) => {
    setAllImages(
      allImages.filter(function (letter) {
        return letter !== imageLink;
      }),
    );
  };
  return (
    <div className="relative mx-auto mt-8 flex w-full max-w-7xl flex-1 flex-col overflow-y-auto sm:flex-row sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6">
      <div className="left block sm:w-full lg:w-[500px]">
        <div className="bg-gray-700 p-2 lg:w-[500px]">
          <div className="h-64 sm:h-72 md:h-80">
            <img
              src={selectedImage || NoImagePlaceholder}
              className="mx-auto aspect-auto h-full w-auto rounded-md"
            />
          </div>
          <div className="sm:fit relative flex gap-2 overflow-x-auto py-2 sm:py-3">
            <p className="placeholder w-full"></p>
            {allImages.length > 0 &&
              allImages.map((links) => (
                <div className="relative">
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
                  <button
                    className="absolure right-0 top-1 rounded-full bg-red-600 px-2 py-1 text-white"
                    onClick={() => remove(links)}
                  >
                    x
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div>
        <CloudinaryUpload allImages={allImages} setAllImages={setAllImages} />
      </div>
    </div>
  );
}

export default ImageEditor;
