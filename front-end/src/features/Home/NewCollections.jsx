import React from "react";
import Item from "../../ui/Item";

function NewCollections({ allproducts }) {
  return (
    <div className="rounded-2xl py-4">
      <p className="mb-2 flex justify-center text-2xl font-bold text-white">
        New Arrival
      </p>
      <div className="mx-auto grid grid-cols-2 gap-x-2 gap-y-4 min-[480px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {allproducts
          .sort((a, b) => (a.productId > b.productId ? -1 : 1))
          .map((product, i) => {
            if (i < 8) return <Item key={product.name} item={product} />;
          })}
      </div>
    </div>
  );
}

export default NewCollections;
