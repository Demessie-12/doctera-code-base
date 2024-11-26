import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { GetMyProductsHook } from "../../Services/apiContributor";
import ProductList from "./ProductList";
import { useDocteraContext } from "../../context/Doctera.Context";

function Products() {
  const { setMyproducts } = useDocteraContext();
  const loadedData = useLoaderData();
  setMyproducts(loadedData);
  return (
    <div>
      <div className="my-3 flex pl-1 text-lg font-semibold text-white lg:justify-center">
        <p>
          Boost Your Income by{" "}
          <span>
            <Link
              to="/control/product/upload"
              className="rounded-xl bg-DocOrange px-2 py-1 font-bold"
            >
              Upload
            </Link>{" "}
          </span>{" "}
          New Product
        </p>
      </div>
      <ProductList />
    </div>
  );
}

export async function loader() {
  let Allproducts = await GetMyProductsHook();
  // Add serianl No
  Allproducts = Allproducts?.map((product, i) => ({ ...product, no: i + 1 }));
  return Allproducts;
}

export default Products;
