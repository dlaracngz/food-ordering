"use client";
import React from "react";
import hero from "@/public/images/hero-bg.jpg";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="h-screen -mt-[5.5rem]">
      <div className="relative h-full w-full">
        <Image src={hero} alt="" layout="fill" objectFit="cover" />
        <div className="absolute top-60 left-0 text-white w-full h-full">
          <div className="container mx-auto px-2 w-full h-full">
            <h1 className="font-dancing text-[3.5rem]">Fast Food Restaurant</h1>
            <p className="text-[14px] mt-6 mb-8 max-w-[550px] w-full">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <button className="btn">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
