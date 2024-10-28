import React from "react";
import { LogoutApi } from "../Services/apiAuthentication";
import { Link, useParams } from "react-router-dom";
import { useDocteraContext } from "../context/Doctera.Context";
import Item from "../ui/Item";

function Category() {
  const { category } = useParams();

  const { allproducts } = useDocteraContext();

  return (
    <div className="px-2 sm:px-3">
      <div>
        <div className="mx-auto grid grid-cols-2 gap-x-2 gap-y-4 min-[480px]:grid-cols-3 md:max-w-4xl md:grid-cols-4">
          {allproducts.map((product) => {
            if (category === "Used" && product.condition === "Used")
              return <Item item={product} key={product.productId} />;

            if (category === "Brand_New" && product.condition === "Brand New")
              return <Item item={product} key={product.productId} />;
            if (product.category.includes(category))
              return <Item item={product} key={product.productId} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
