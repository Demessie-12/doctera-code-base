import React, { useState } from "react";
import Slider from "react-slider";

function FillterSection({
  filterObject,
  setFilterObject,
  filterOpened,
  setFilterOpened,
}) {
  const handleConditionChange = (cond) => {
    let conditions = filterObject.condition;
    setFilterObject({
      ...filterObject,
      condition: conditions.includes(cond)
        ? conditions.filter((item) => item !== cond)
        : conditions.unshift(cond) > 0 && conditions,
    });
  };

  return (
    <div
      className={`absolute md:relative mx-auto text-center w-full  h-dvh md:w-64 md:h-fit xl:w-68 z-10 ${
        filterOpened && "no-doc-scroll"
      } ${!filterOpened && "hidden md:flex"}`}
    >
      <div
        className={`absolute w-full h-dvh top-0 bg-gray-500 bg-opacity-60 ${
          !filterOpened && "hidden"
        }`}
        onClick={() => setFilterOpened(false)}
      ></div>
      <div className="relative flex flex-col gap-3 mx-auto w-4/5 md:w-full pb-5 pt-2 px-1 bg-gray-200 bg-opacity-90 md:bg-opacity-100 rounded-r-xl ">
        <div
          className={`absolute ${
            !filterOpened && "hidden"
          } md:hidden right-5 top-2 bg-white rounded-xl px-2 text-red-600 font-extrabold cursor-pointer h-7`}
          onClick={() => setFilterOpened(false)}
        >
          Close
        </div>
        <div className="Conditions flex flex-col">
          <h1 className="font-bold text-gray-800">Condition</h1>
          <div className="flex flex-col pl-2">
            <label>
              <input
                type="checkBox"
                value="Brand New"
                onChange={() => handleConditionChange("Brand New")}
                checked={
                  filterObject.condition.length > 0 &&
                  filterObject.condition?.includes("Brand New")
                }
              />
              &nbsp;New
            </label>
            <label>
              <input
                type="checkBox"
                onChange={() => handleConditionChange("Used")}
                value="Used"
                checked={
                  filterObject.condition.length > 0 &&
                  filterObject.condition.includes("Used")
                }
              />
              &nbsp;Used
            </label>
          </div>
        </div>
        <div className="Price-range flex flex-col ">
          <h1 className="font-bold text-gray-800">Price Range</h1>
          <Slider
            className="slider h-3 w-11/12 px-1 mx-auto mt-3 border rounded-full"
            onChange={(e) =>
              setFilterObject({ ...filterObject, priceRange: e })
            }
            value={filterObject.priceRange}
            min={20}
            max={50000}
            trackClassName="example-track"
          />
          <div className="relative flex justify-between mt-2">
            <input
              className="w-12 bg-transparent border border-gray-400"
              onChange={(e) => {
                let targetValue = Number(e.target.value.replace(",", ""));
                if (targetValue >= filterObject.priceRange[1])
                  targetValue = filterObject.priceRange[1] - 10;
                setFilterObject({
                  ...filterObject,
                  priceRange: [targetValue, filterObject.priceRange[1]],
                });
              }}
              value={filterObject.priceRange[0]
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            />
            <input
              className="w-14 text-right pr-1 bg-transparent border border-gray-400"
              onChange={(e) => {
                let targetValue = Number(e.target.value.replace(",", ""));
                if (targetValue > 50000) targetValue = 50000;
                if (targetValue <= filterObject.priceRange[0])
                  targetValue = filterObject.priceRange[0] + 500;
                setFilterObject({
                  ...filterObject,
                  priceRange: [filterObject.priceRange[0], targetValue],
                });
              }}
              value={filterObject.priceRange[1]
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            />
            {filterObject.priceRange[1] >= 50000 && (
              <p className="absolute text-red-600 bg-white rounded-full h-7 right-0 bottom-5 font-bold text-xl">
                +
              </p>
            )}
          </div>
        </div>

        <div
          className={` ${
            !filterOpened && "hidden"
          } md:hidden  bg-white rounded-xl px-2 text-blue-600 font-bold cursor-pointer h-7 w-fit mx-auto`}
          onClick={() => setFilterOpened(false)}
        >
          See Filtered
        </div>
      </div>
    </div>
  );
}

export default FillterSection;
