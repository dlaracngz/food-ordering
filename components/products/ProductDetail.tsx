import Image from "next/image";
import product from "@/public/pizzza2.png";
import size from "@/public/images/size.png";
import React from "react";

const ProductDetail = () => {
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center my-16">
        <div>
          <Image
            src={product}
            alt=""
            className="max-w-[600px] w-full"
            objectFit="contain"
          />
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
            <div className="my-6 flex gap-12">
              <div className="relative cursor-pointer">
                <Image
                  src={size}
                  alt=""
                  width={30}
                  height={30}
                  className="relative"
                />
                <span className="absolute -top-2 -right-6 text-xs px-1 rounded-xl bg-primary">
                  Small
                </span>
              </div>
              <div className="relative cursor-pointer">
                <Image
                  src={size}
                  alt=""
                  width={45}
                  height={45}
                  className="relative"
                />
                <span className="absolute -top-2 -right-8 text-xs px-1 rounded-xl bg-primary">
                  Medium
                </span>
              </div>
              <div className="relative cursor-pointer">
                <Image
                  src={size}
                  alt=""
                  width={60}
                  height={60}
                  className="relative"
                />
                <span className="absolute -top-2 -right-4 text-xs px-1 rounded-xl bg-primary">
                  Large
                </span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-lg">Choose additional ingredients</h2>
            <div className="my-5 flex gap-x-2 items-center">
              <label
                htmlFor="ketchup"
                className="flex items-center gap-x-1 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="ketchup"
                  id="ketchup"
                  className="w-5 h-5 accent-primary"
                />
                <span className="text-sm font-semibold">Ketçap</span>
              </label>
              <label
                htmlFor="mayonnaise"
                className="flex items-center gap-x-1 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="mayonnaise"
                  id="mayonnaise"
                  className="w-5 h-5 accent-primary"
                />
                <span className="text-sm font-semibold">Mayanez</span>
              </label>
              <label
                htmlFor="hotSauce"
                className="flex items-center gap-x-1 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="hotSauce"
                  id="hotSauce"
                  className="w-5 h-5 accent-primary"
                />
                <span className="text-sm font-semibold">Acı Sos</span>
              </label>
            </div>
          </div>
          <button className="btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
