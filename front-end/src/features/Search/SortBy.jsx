import React, { useState } from "react";

function SortBy({ selctedSort, setSelectedSort }) {
  const handleChange = (e) => {
    setSelectedSort(e.target.value);
  };
  return (
    <div className="flex gap-1">
      <p className="text-gray-400 pt-0.5">SortBy</p>
      <select
        value={selctedSort}
        onChange={handleChange}
        className="text-center align-middle text-gray-900 w-fit"
      >
        <option className="bg-gray-500 text-white" value="A-Z">
          A to Z
        </option>
        <option className="bg-gray-500 text-white" value="Z-A">
          Z to A
        </option>
        <option className="bg-gray-500 text-white" value="Low-High">
          Low to High
        </option>
        <option className="bg-gray-500 text-white" value="High-Low">
          High to Low
        </option>
      </select>
    </div>
  );
}

export default SortBy;
