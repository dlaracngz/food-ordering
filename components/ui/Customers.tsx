"use client";
import React from "react";
import Slider from "react-slick";
import CustomerItem from "./CustomerItem";
import cust1 from "@/public/cust1.jpg";
import cust2 from "@/public/cust2.jpg";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface BtnProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Customers = () => {
  const NextBtn: React.FC<BtnProps> = ({ onClick }) => {
    return (
      <button
        className="bg-primary text-white rounded-full w-10 h-10 text-2xl flex justify-center items-center absolute left-1/2 -bottom-12"
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    );
  };
  const PrevBtn: React.FC<BtnProps> = ({ onClick }) => {
    return (
      <button
        className="bg-primary text-white rounded-full w-10 h-10 text-2xl flex justify-center items-center absolute right-1/2 -bottom-12 mr-2"
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
    );
  };
  const settings = {
    dots: false,
    infinite: true, // Slider'ın sonsuz döngüde çalışıp çalışmadığını belirtir.
    speed: 500, // Slayt geçişlerinin hızını belirtir.
    slidesToShow: 2, // Slider içerisinde kaç tane ögenin yan yana gösterileceğini belirtir.
    slidesToScroll: 1, // Slider her kaydığında kaç ögenin birden kaydırılacağını belirtir.
    autoplay: true, // Slider'ın otomatik olarak geçiş yapıp yapmadığını belirtir.
    autoplaySpeed: 3500, // autoplay açıksa , her geçişin ne kadar sürede yapılacağını belirtir.
    arrows: true,
    prevArrow: <PrevBtn />, // Slider için özelleştirilmiş prev butonu
    nextArrow: <NextBtn />, // Slider için özelleştirilmiş next butonu
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto px-2 my-20">
      <h2 className="font-dancing text-[2.5rem] font-bold text-center mb-5">
        What Says Our Customers
      </h2>
      <div>
        <Slider {...settings}>
          <CustomerItem imgSrc={cust1} />
          <CustomerItem imgSrc={cust2} />
        </Slider>
      </div>
    </div>
  );
};

export default Customers;
