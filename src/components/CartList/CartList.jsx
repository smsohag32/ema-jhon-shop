import React from "react";
import AddItems from "../AddItems/AddItems";

const CartList = (props) => {
  const addCart = props.addCart;
  return (
    <div>
      <h1 className="text-xl font-semibold">Products Summary</h1>
      <hr />
      <p>Total Added : {props.addCart.length}</p>
      {addCart.map((cart) => {
        return <AddItems item={cart} key={cart.id} />;
      })}
    </div>
  );
};

export default CartList;
