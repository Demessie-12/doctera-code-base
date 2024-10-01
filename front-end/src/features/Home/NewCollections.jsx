import React from "react";
import Item from "../../ui/Item";

function NewCollections({ allproducts }) {
  return (
    <div className="bg-yellow-200 rounded-2xl pb-4">
      <p className="flex text-2xl font-bold justify-center mb-2 text-blue-700">
        New Arrival
      </p>
      <div className="mx-auto  grid grid-cols-2 min-[480px]:grid-cols-3 md:grid-cols-4  gap-x-2 gap-y-4 xl:grid-cols-5 ">
        {allproducts.map((product) => {
          if (product.category.includes("New-Arrival"))
            return <Item key={product.name} item={product} />;
        })}
      </div>
    </div>
  );
}

export default NewCollections;
