import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Order() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <div className="mx-auto mt-5 flex justify-center gap-3 px-2 sm:px-3 md:max-w-3xl">
      <p className="pt-1 text-xl font-semibold">
        Check your order using OrderId
      </p>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search Order #"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-44 rounded-full bg-blue-500 px-4 py-2 font-semibold text-white transition-all duration-300 placeholder:font-semibold placeholder:text-white focus:outline-none focus:ring focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 sm:focus:w-52"
          />
        </form>
      </div>
    </div>
  );
}

export default Order;
