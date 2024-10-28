import React from "react";
import ProductList from "../features/product/ProductList";
import { GetAllProductsHook } from "../Services/apiProducts";
import { useAdminContext } from "../context/Admin.context";
import { useLoaderData } from "react-router-dom";

function Products() {
  const { setAllproducts } = useAdminContext();
  const loadedData = useLoaderData();
  setAllproducts(loadedData);
  return (
    <div>
      <ProductList />
    </div>
  );
}

export async function loader() {
  let Allproducts = await GetAllProductsHook();
  // Add serianl No
  Allproducts = Allproducts.map((product, i) => ({ ...product, no: i + 1 }));
  return Allproducts;
}

export default Products;
