import React, { useContext } from "react";
import { DocteraContext } from "../../context/Doctera.Context";
import Item from "../../ui/Item";

function SimilarProducts(props) {
  const { selectedProduct } = props;
  const { allproducts } = useContext(DocteraContext);
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <h2 className="mx-auto flex w-fit justify-center rounded-t-2xl border-b border-dashed bg-gradient-to-b from-DocOrange to-DocOrange/65 px-4 py-1 text-xl font-bold text-black md:px-5 md:py-2 md:text-2xl">
        Similar Products
      </h2>
      <div className="mx-auto grid grid-cols-2 gap-x-2 gap-y-4 rounded-2xl bg-yellow-200 px-2 py-4 min-[480px]:grid-cols-3 md:max-w-4xl md:grid-cols-4 md:px-4 xl:max-w-7xl xl:grid-cols-5">
        {allproducts.map((product) => {
          // if (category === "Used" && product.condition === "Used")
          //   return <Item item={product} key={product.productId} />;

          // if (category === "Brand_New" && product.condition === "Brand New")
          //   return <Item item={product} key={product.productId} />;
          console.log(
            "1",
            product.mainCategory,
            "and",
            selectedProduct.mainCategory,
          );
          if (
            product.category.includes(selectedProduct.mainCategory) &&
            product.productId != selectedProduct.productId
          )
            return <Item item={product} key={product.productId} />;
        })}
      </div>
    </div>
  );
}

export default SimilarProducts;
