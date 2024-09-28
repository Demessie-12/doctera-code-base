import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDocteraContext } from "../context/Doctera.Context";

function Search() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [optionvisibility, setoptiOnvisibility] = useState(false);

  const { allproducts } = useDocteraContext();
  const ListOfAutocomplete = allproducts.map((product) =>
    product.name.toLocaleLowerCase()
  );

  const onchange = function (event) {
    event.preventDefault();
    setInputValue(event.target.value);
    if (event.target.value.length > 1) {
      setoptiOnvisibility(true);
    } else setoptiOnvisibility(false);
  };
  const FilterProducts = function (e, suggestion) {
    e.preventDefault();
    setoptiOnvisibility(false);
    if (suggestion) {
      return navigate(`/search/${suggestion.replaceAll(" ", "_")}`);
    }
    console.log(inputValue);
    navigate(`/search/${inputValue.replaceAll(" ", "_")}`);
  };
  return (
    <div className="relative ">
      <form onSubmit={FilterProducts} className="flex h-8 md:h-10 ">
        <IoSearch className="h-8 md:h-10  w-9 text-xl rounded-s-3xl bg-white px-2" />
        <input
          type="text"
          placeholder="Search product"
          value={inputValue}
          onChange={onchange}
          onSubmit={FilterProducts}
          className={`h-8 md:h-10 w-20 md:w-28 lg:w-36 bg-white pb-1 outline-none ${
            inputValue.length <= 1 && "rounded-e-3xl w-28 md:w-36 lg:w-44"
          }`}
        />
        {inputValue.length > 1 && (
          <MdClear
            className="h-8 md:h-10 w-8 text-xl rounded-e-3xl bg-white text-red-600 px-1 cursor-pointer"
            onClick={(e) => {
              setInputValue("");
              setoptiOnvisibility(false);
            }}
          />
        )}
      </form>
      <div
        className={`absolute top-9 w-full flex flex-col gap-2 py-2 max-h-44 overflow-hidden border border-gray-400 rounded-xl bg-gray-400 ${
          optionvisibility ? "" : "hidden"
        }`}
      >
        {ListOfAutocomplete.map((suggestion) => {
          if (suggestion.includes(inputValue))
            return (
              <option
                className="w-full h-6 pl-2 bg-gray-100 cursor-pointer"
                onClick={(e) => {
                  onchange(e);
                  FilterProducts(e, suggestion);
                }}
                value={suggestion}
              >
                {suggestion}
              </option>
            );
        })}
      </div>
    </div>
  );
}

export default Search;
