import React, { useEffect, useRef, useState } from "react";

export default function CloudinaryUpload({ allImages, setAllImages }) {
  const [uploadedLink, setUploadedLink] = useState();
  const cloudinaryRef = useRef();
  const widgeRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgeRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dx1cyrkdk",
        uploadPreset: "doctera",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          setUploadedLink(result.info.url);
        }
      },
    );
    console.log(cloudinaryRef.current);
  }, []);
  // console.log("worked", uploadedLink);
  if (uploadedLink != 0 && uploadedLink != undefined) {
    setAllImages([...allImages, uploadedLink]);
    // console.log(allImages);
    setUploadedLink(0);
  }
  return (
    <div>
      <button
        onClick={() => widgeRef.current.open()}
        className="mx-auto w-full rounded-xl bg-blue-600 px-5 py-3 align-middle"
      >
        Upload
      </button>
    </div>
  );
}
