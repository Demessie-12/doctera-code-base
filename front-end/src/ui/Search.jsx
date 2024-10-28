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
    product.name.toLocaleLowerCase(),
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
    if (inputValue.length === 0) return null;
    navigate(`/search/${inputValue.replaceAll(" ", "_")}`);
  };
  return (
    <div className="relative">
      <form onSubmit={FilterProducts} className="flex h-8 md:h-10">
        <IoSearch className="h-8 w-9 rounded-s-3xl bg-white px-2 text-xl md:h-10" />
        <input
          type="text"
          placeholder="Search product"
          value={inputValue}
          onChange={onchange}
          onSubmit={FilterProducts}
          minLength={2}
          className={`h-8 w-20 bg-white pb-1 outline-none md:h-10 md:w-28 lg:w-36 ${
            inputValue.length <= 1 && "w-28 rounded-e-3xl md:w-36 lg:w-44"
          }`}
        />
        {inputValue.length > 1 && (
          <MdClear
            className="h-8 w-8 cursor-pointer rounded-e-3xl bg-white px-1 text-xl text-red-600 md:h-10"
            onClick={(e) => {
              setInputValue("");
              setoptiOnvisibility(false);
            }}
          />
        )}
      </form>
      <div
        className={`absolute top-9 flex max-h-44 w-full flex-col gap-2 overflow-hidden rounded-xl border border-gray-400 bg-gray-400 py-2 ${
          optionvisibility ? "" : "hidden"
        }`}
      >
        {ListOfAutocomplete.map((suggestion, i) => {
          if (suggestion.includes(inputValue))
            return (
              <option
                key={i}
                className="h-6 w-full cursor-pointer bg-gray-100 pl-2"
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
