import React from "react";

function OrderItem(props) {
  const { item } = props;

  return (
    <div>
      <li
        key={item.name}
        className="flex items-center justify-between bg-gray-300 py-3 pl-3 pr-3 font-semibold text-black sm:pl-5 md:pl-7"
      >
        <div className="flex w-1/2 gap-2">
          <img
            src={item.coverImage}
            className="h-8 rounded-md border border-gray-400"
            alt=""
          />
          <p className="capitalize">{item.name}</p>
        </div>
        <p>
          {item.quantity} x {item.unitPrice}
        </p>
        <p className="text-sm font-bold">{item.totalPrice} Birr</p>
      </li>
    </div>
  );
}

export default OrderItem;
