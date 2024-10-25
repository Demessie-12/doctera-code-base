import React, { useContext, useState } from "react";
import { DocteraContext } from "../context/Doctera.Context.jsx";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCurrentQuantityById } from "../hooks/CartSlice.js";
import Breadcrumb from "../features/Breadcrumb/Breadcrumb.jsx";
import ProductDisplay from "../features/Product/ProductDisplay.jsx";
import SimilarProducts from "../features/Product/SimilarProducts.jsx";
import ReviewsAndDescription from "../features/Product/ReviewsAndDescription.jsx";

function Product() {
  const dispatch = useDispatch();
  const { allproducts } = useContext(DocteraContext);
  const { IdWithSlug } = useParams();

  const productId = IdWithSlug.slice(0, IdWithSlug.indexOf("_"));

  const product = allproducts.find(
    (value, index, array) => value.productId === productId,
  );

  const QuantityInCart = useSelector(getCurrentQuantityById(productId));

  const isInCart = QuantityInCart > 0;

  function handleAddToCart() {
    const newItem = {
      productId,
      name: product.name,
      coverImage: product.coverImage,
      quantity: 1,
      unitPrice: product.newPrice,
      totalPrice: product.newPrice,
    };
    dispatch(addToCart(newItem));
  }

  return (
    <div className="relative flex w-full flex-col gap-2 overflow-hidden px-2 sm:gap-4 sm:px-3">
      <Breadcrumb product={product} />
      <ProductDisplay
        product={product}
        handleAddToCart={handleAddToCart}
        isInCart={isInCart}
      />
      <ReviewsAndDescription
        reviews={product.reviews}
        detail={product.detail}
        productId={product._id}
      />
      <SimilarProducts category={product.category[0]} />
    </div>
  );
}

export default Product;
