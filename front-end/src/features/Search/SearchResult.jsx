import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDocteraContext } from "../../context/Doctera.Context";
import Item from "../../ui/Item";
import FillterSection from "./FillterSection";
import SortBy from "./SortBy";
import { IoFilterOutline } from "react-icons/io5";

function SearchResult() {
  const [filterOpened, setFilterOpened] = useState(false);
  const [filterObject, setFilterObject] = useState({
    condition: ["Brand New", "Slightly Used", "Used"],
    priceRange: [100, 500000],
  });
  const [selctedSort, setSelectedSort] = useState("A-Z");
  const [filteredProductNo, setFilteredProductNo] = useState(0);

  const sortingHandler = (a, b) => {
    if (selctedSort === "A-Z") {
      return a.name > b.name ? 1 : -1;
    } else if (selctedSort === "A-Z") {
      return a.name > b.name ? -1 : 1;
    } else if (selctedSort === "Low-High") {
      return a.props.item.newPrice - b.props.item.newPrice;
    } else if (selctedSort === "High-Low") {
      return b.props.item.newPrice - a.props.item.newPrice;
    }
  };

  let { searchName } = useParams();
  searchName = searchName.replaceAll("_", " ").replaceAll("-", "/");
  const { allproducts } = useDocteraContext();

  let searchedProduct = [];
  let filteredProduct = [];
  allproducts.map((product) => {
    if (
      product.name.toLowerCase().includes(searchName.toLowerCase()) ||
      product.productId.toLowerCase().includes(searchName.toLowerCase())
    ) {
      searchedProduct.push(product);
    }

    if (
      (product.name.toLowerCase().includes(searchName.toLowerCase()) ||
        product.productId.toLowerCase().includes(searchName.toLowerCase())) &
      // Filter search
      (filterObject.condition.length > 0
        ? filterObject.condition.includes(product.condition)
        : true) &
      (product.newPrice >= filterObject.priceRange[0] &&
      filterObject.priceRange === 50000
        ? true
        : product.newPrice <= filterObject.priceRange[1])
    ) {
      filteredProduct.push(product);
      return null;
    }
  });

  // console.log("hi", filteredProduct);

  return (
    <div className="mx-auto flex flex-col gap-2 px-2 sm:px-3 xl:max-w-7xl">
      <div
        className={`flex justify-between ${searchedProduct.length == 0 && "hidden"}`}
      >
        <h2 className="flex text-lg font-bold text-gray-900">
          Filltered By{" "}
          <span
            className={`pl-2 pt-1.5 font-extrabold text-black`}
            onClick={() => {
              setFilterOpened(true);
              // console.log("hi");
            }}
          >
            {<IoFilterOutline />}
          </span>
        </h2>
        <SortBy selctedSort={selctedSort} setSelectedSort={setSelectedSort} />
      </div>
      <div className={`flex gap-3 ${searchedProduct.length == 0 && "hidden"}`}>
        <FillterSection
          filterObject={filterObject}
          setFilterObject={setFilterObject}
          filterOpened={filterOpened}
          setFilterOpened={setFilterOpened}
        />
        <div className="mx-auto grid grid-cols-2 gap-x-2 gap-y-4 min-[480px]:grid-cols-3 md:max-w-4xl md:grid-cols-3 lg:grid-cols-4">
          {filteredProduct.sort(sortingHandler).map((product) => {
            return <Item item={product} key={product.productId} />;
          })}
        </div>
      </div>

      {/* if no product found */}
      <div
        className={`${filteredProduct.length > 0 && "hidden"} mt-5 text-center font-semibold text-DocOrange md:text-xl`}
      >
        {`No product found. Please ${searchedProduct.length > 0 ? "check your filter" : " search with other key"}`}
      </div>
    </div>
  );
}

export default SearchResult;
