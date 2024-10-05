import React from "react";
import ImageAndDescription from "../features/product/ImageAndDescription";
import ReviewsAndDescription from "../features/product/ReviewsAndDescription";
import { useAdminContext } from "../context/Admin.context";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { allproducts } = useAdminContext();
  const { IdWithSlug } = useParams();
  const productId = IdWithSlug.slice(0, IdWithSlug.indexOf("_"));

  const product = allproducts.find(
    (value, index) => value.productId === productId,
  );
  return (
    <div className="mb-10 flex flex-col gap-5">
      <ImageAndDescription product={product} />
      <ReviewsAndDescription product={product} />
    </div>
  );
}

export default ProductDetail;
