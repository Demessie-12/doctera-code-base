import React, { useContext } from "react";
import { DocteraContext } from "../../context/Doctera.Context";
import Item from "../../ui/Item";

function SimilarProducts({ category }) {
  const { allproducts } = useContext(DocteraContext);
  return (
    <div className=" flex flex-col gap-0 overflow-hidden ">
      <h2 className="flex justify-center font-bold text-xl md:text-2xl bg-gradient-to-b from-gray-900 to-gray-700 text-yellow-200 rounded-t-2xl w-fit mx-auto px-4 py-1 md:py-2 md:px-5 border-b border-dashed">
        Similar Products
      </h2>
      <div className=" mx-auto grid grid-cols-2 min-[480px]:grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-4 xl:grid-cols-5 md:max-w-4xl xl:max-w-7xl  bg-yellow-200 rounded-2xl px-2 py-4 md:px-4 ">
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
  );
}

export default SimilarProducts;
