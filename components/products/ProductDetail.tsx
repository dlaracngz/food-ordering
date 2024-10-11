import Image from "next/image";
import product from "@/public/pizzza2.png";
import React from "react";

const ProductDetail = () => {
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center my-16">
        <div>
          <Image src={product} alt="" className="max-w-[1000px] w-full" />
        </div>
        <div>
          <h1 className="font-dancing text-[40px] font-bold mb-4">
            Good Pizza
          </h1>
          <u className="text-primary text-xl font-bold">$10</u>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
            aspernatur, nisi reprehenderit ad natus nesciunt distinctio nostrum
            amet quisquam fugiat.
          </p>
          <div className="mb-4">
            <h2 className="font-bold text-lg">Choose the size</h2>
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-lg">Choose additional ingredients</h2>
          </div>
          <button className="btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
