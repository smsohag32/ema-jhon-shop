import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Banner from "../Banner/Banner";
import CartList from "../CartList/CartList";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [addCart, setAddToCart] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const handleAddCart = (product) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product added",
      showConfirmButton: false,
      timer: 1000,
    });
    // console.log(product);
    setIsAdded(true);
    const newCart = [...addCart, product];
    setAddToCart(newCart);
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-5">
      <div className="products-container mt-10 col-span-4">
        {/* banner */}
        <Banner />
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-12">
          {products.map((product) => (
            <Product product={product} handleAddCart={handleAddCart}></Product>
          ))}
        </div>
      </div>
      <div className="cart-container col-span-1 fixed top-20 right-0 h-screen border-1 border-blue-200 border p-6">
        <CartList addCart={addCart} />
      </div>
    </div>
  );
};

export default Shop;
