import React from "react";
import Item from "../../ui/Item";

function Popular({ allproducts }) {
  return (
    <div className="bg-blue-200 rounded-2xl  pb-4">
      <p className="flex text-2xl font-bold justify-center mb-2 text-gray-800">
        Popular Products
      </p>
      <div className="mx-auto  grid grid-cols-2 min-[480px]:grid-cols-3 md:grid-cols-4  gap-x-2 gap-y-4 xl:grid-cols-5 ">
        {allproducts.map((product) => {
          if (product.category.includes("popular"))
            return <Item key={product.name} item={product} />;
        })}
      </div>
    </div>
  );
}

export default Popular;
