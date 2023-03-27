import React from "react";

const AddItems = (props) => {
  const handleRemove = props.handleRemove;
  const { id, name, img, price } = props.item;
  return (
    <div className="card w-full bg-base-100 border my-2 border-blue-200 border-1">
      <div className="card-body p-2">
        <div className="card-actions justify-end">
          <button
            onClick={() => handleRemove(props.item)}
            className="btn btn-square btn-xs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-1 items-center ">
          <img className="w-8 h-6" src={img} alt="" />
          <p className="text-xs inline-block">Name: {name}</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-xs font-bold">Price: $ {price}</p>
          <button className="">+</button>
          <input
            className="w-[15%] text-center border border-stone-700"
            type="text"
            placeholder="1"
            required
          />
          <button className="font-bold">-</button>
          <p className="text-xs">Total: $ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
