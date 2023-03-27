import React from "react";

const CartList = (props) => {
  console.log(props.addCart);
  const addCart = props.addCart;
  return (
    <div>
      <h1 className="text-xl font-semibold">Products Summary</h1>
      <hr />
      <p>Total Added : {props.addCart.length}</p>
      {addCart.map((cart) => {
        console.log(cart);
      })}
    </div>
  );
};

export default CartList;
