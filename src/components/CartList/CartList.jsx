import React from "react";

const CartList = (props) => {
  console.log(props.addCart);
  const { name, price, seller, quantity } = props.addCart;
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default CartList;
