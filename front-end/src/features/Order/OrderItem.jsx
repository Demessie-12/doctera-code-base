import React from "react";

function OrderItem(props) {
  const { item } = props;

  return (
    <div>
      <li
        key={item.name}
        className="py-3 flex items-center justify-between  pl-3 sm:pl-5 md:pl-7 pr-3 bg-white"
      >
        <div className="flex gap-2 w-1/2">
          <img
            src={item.coverImage}
            className="h-8 border border-gray-400 rounded-md"
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
