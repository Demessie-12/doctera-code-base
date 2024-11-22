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
      className={`xl:w-68 absolute z-10 mx-auto h-dvh w-full text-center md:relative md:h-fit md:w-64 ${
        filterOpened && "no-doc-scroll"
      } ${!filterOpened && "hidden md:flex"}`}
    >
      <div
        className={`absolute top-0 h-dvh w-full bg-gray-500 bg-opacity-60 md:hidden ${
          !filterOpened && "hidden"
        }`}
        onClick={() => setFilterOpened(false)}
      ></div>
      <div className="relative mx-auto flex w-4/5 flex-col gap-3 rounded-r-xl bg-gray-200 bg-opacity-90 px-1 pb-5 pt-2 md:w-full md:bg-opacity-100">
        <div
          className={`absolute ${
            !filterOpened && "hidden"
          } right-5 top-2 h-7 cursor-pointer rounded-xl bg-white px-2 font-extrabold text-red-600 md:hidden`}
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
            <label>
              <input
                type="checkBox"
                onChange={() => handleConditionChange("Slightly Used")}
                value="Slightly Used"
                checked={
                  filterObject.condition.length > 0 &&
                  filterObject.condition.includes("Slightly Used")
                }
              />
              &nbsp;Slightly Used
            </label>
          </div>
        </div>
        <div className="Price-range flex flex-col">
          <h1 className="font-bold text-gray-800">Price Range</h1>
          <Slider
            className="slider mx-auto mt-3 h-3 w-11/12 rounded-full border px-1"
            onChange={(e) =>
              setFilterObject({ ...filterObject, priceRange: e })
            }
            value={filterObject.priceRange}
            min={20}
            max={50000}
            trackClassName="example-track"
          />
          <div className="relative mt-2 flex justify-between">
            <input
              className="w-12 border border-gray-400 bg-transparent"
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
              className="w-14 border border-gray-400 bg-transparent pr-1 text-right"
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
              <p className="absolute bottom-5 right-0 h-7 rounded-full bg-white text-xl font-bold text-red-600">
                +
              </p>
            )}
          </div>
        </div>

        <div
          className={` ${
            !filterOpened && "hidden"
          } mx-auto h-7 w-fit cursor-pointer rounded-xl bg-white px-2 font-bold text-blue-600 md:hidden`}
          onClick={() => setFilterOpened(false)}
        >
          See Filtered
        </div>
      </div>
    </div>
  );
}

export default FillterSection;
