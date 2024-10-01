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
    condition: ["Brand New", "Used"],
    priceRange: [100, 50000],
  });
  const [selctedSort, setSelectedSort] = useState("A-Z");

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
  searchName = searchName.replaceAll("_", " ");
  const { allproducts } = useDocteraContext();

  return (
    <div className="flex flex-col gap-2 xl:max-w-7xl mx-auto">
      <div className="flex justify-between">
        <h2 className="font-bold text-lg text-gray-900 flex">
          Filltered By{" "}
          <span
            className={` pt-1.5 pl-2 font-extrabold text-black ${
              filterOpened && "hidden"
            }`}
            onClick={() => {
              setFilterOpened(true);
              console.log("hi");
            }}
          >
            {<IoFilterOutline />}
          </span>
        </h2>
        <SortBy selctedSort={selctedSort} setSelectedSort={setSelectedSort} />
      </div>
      <div className="flex gap-3">
        <FillterSection
          filterObject={filterObject}
          setFilterObject={setFilterObject}
          filterOpened={filterOpened}
          setFilterOpened={setFilterOpened}
        />
        <div className=" mx-auto grid grid-cols-2 min-[480px]:grid-cols-3 md:grid-cols-3 md:max-w-4xl lg:grid-cols-4 gap-x-2 gap-y-4">
          {allproducts
            .map((product) => {
              if (
                (product.name
                  .toLocaleLowerCase()
                  .includes(searchName.toLocaleLowerCase()) ||
                  product.productId
                    .toLocaleLowerCase()
                    .includes(searchName.toLocaleLowerCase())) &
                // Filter search
                (filterObject.condition.length > 0
                  ? filterObject.condition.includes(product.condition)
                  : true) &
                (product.newPrice >= filterObject.priceRange[0] &&
                filterObject.priceRange === 50000
                  ? true
                  : product.newPrice <= filterObject.priceRange[1])
              )
                return <Item item={product} key={product.productId} />;
            })
            .sort(sortingHandler)}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
