import React from "react";
import { LogoutApi } from "../Services/apiAuthentication";
import { Link, useParams } from "react-router-dom";
import { useDocteraContext } from "../context/Doctera.Context";
import Item from "../ui/Item";

function Category() {
  const { category } = useParams();

  const { allproducts } = useDocteraContext();

  return (
    <div>
      Items by category
      <div>
        <div className=" mx-auto grid grid-cols-2 min-[480px]:grid-cols-3 md:grid-cols-4 md:max-w-4xl gap-x-2 gap-y-4">
          {allproducts.map((product) => {
            if (product.category.includes(category))
              return <Item item={product} key={product.productId} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
