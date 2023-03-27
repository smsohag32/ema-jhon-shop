import React, { useEffect, useState } from "react";
import CartList from "../CartList/CartList";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [addCart, setAddToCart] = useState([]);
  const handleAddCart = (product) => {
    // console.log(product);
    const newCart = [...addCart, product];
    setAddToCart(newCart);
  };
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-5">
      <div className="products-container mt-10 col-span-4 grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-12">
        {products.map((product) => (
          <Product product={product} handleAddCart={handleAddCart}></Product>
        ))}
      </div>
      <div className="cart-container col-span-1 fixed top-20 right-0 h-screen border-1 border-blue-200 border p-3">
        <CartList addCart={addCart} />
      </div>
    </div>
  );
};

export default Shop;
