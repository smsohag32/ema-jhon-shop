import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-5">
      <div className="products-container mt-10 col-span-4 grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-12">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
      <div className="cart-container col-span-1 h-screen bg-slate-600">
        <h4>Order Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
