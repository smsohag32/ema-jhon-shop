import React from "react";
import AddItems from "../AddItems/AddItems";

const CartList = (props) => {
  const handleRemove = props.handleRemove;
  const addCart = props.addCart;
  return (
    <div>
      <h1 className="text-xl font-semibold">Products Summary</h1>
      <hr />
      <p>Total Added : {props.addCart.length}</p>
      <div className="max-h-96 overflow-y-scroll">
        {addCart.map((cart) => {
          return (
            <AddItems item={cart} handleRemove={handleRemove} key={cart.id} />
          );
        })}
      </div>
      <div>
        <p className="text-md text-right mt-6 font-bold">Sub Total: $55</p>
      </div>
    </div>
  );
};

export default CartList;
