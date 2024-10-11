import React from "react";
import ProductItem from "./ProductItem";

const ProductWrapper = () => {
  return (
    <div className="container mx-auto px-2">
      <div>
        <h1 className="font-dancing font-bold text-center text-[2.5rem]">
          Our Menu
        </h1>
        <ul className="py-7 flex gap-3 w-full justify-center">
          <li className="hover:bg-secondary hover:text-white cursor-pointer p-2 w-20 text-center rounded-3xl transition-all duration-300 ease-in">
            <a href="/">All</a>
          </li>
          <li className="hover:bg-secondary hover:text-white cursor-pointer p-2 w-20 text-center rounded-3xl transition-all duration-300 ease-in">
            <a href="/">Burger</a>
          </li>
          <li className="hover:bg-secondary hover:text-white cursor-pointer p-2 w-20 text-center rounded-3xl transition-all duration-300 ease-in">
            <a href="/">Pizza</a>
          </li>
          <li className="hover:bg-secondary hover:text-white cursor-pointer p-2 w-20 text-center rounded-3xl transition-all duration-300 ease-in">
            <a href="/">Pasta</a>
          </li>
          <li className="hover:bg-secondary hover:text-white cursor-pointer p-2 w-20 text-center rounded-3xl transition-all duration-300 ease-in">
            <a href="/">Fries</a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-7">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <div className="w-full flex justify-center">
        <button className="btn mb-7">View More</button>
      </div>
    </div>
  );
};

export default ProductWrapper;
