"use client";
import Image from "next/image";
import avatar from "@/public/images/avatar.webp";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdDirectionsBike, MdOutlineExitToApp } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaRegWindowMaximize } from "react-icons/fa";
import { useState } from "react";
import Products from "./Products";
import Orders from "./Orders";
import Categories from "@/components/admin/Categories";
import Footer from "./Footer";

const Admin = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="container mx-auto px-2 min-h-[calc(100vh_-_465px)]">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 my-6">
        <div className="bg-[#e5e7eb] h-full border border-secondary rounded-t-xl">
          <div className="flex flex-col items-center justify-center gap-2 px-20 py-6 w-full">
            <Image src={avatar} alt="" height={100} width={100} />
            <span className="font-bold text-xl whitespace-nowrap">
              Dilara Cengiz
            </span>
          </div>
          <ul>
            <li>
              <a
                onClick={() => setTabs(0)}
                className={`flex items-center gap-2 border-y border-white py-3 px-4 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer ${
                  tabs === 0 ? "bg-primary text-white" : ""
                }`}
              >
                <IoFastFoodOutline className="text-2xl" />
                <span className="text-lg">Products</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setTabs(1)}
                className={`flex items-center gap-2 border-y border-white py-3 px-4 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer ${
                  tabs === 1 ? "bg-primary text-white" : ""
                }`}
              >
                <MdDirectionsBike className="text-2xl" />
                <span className="text-lg">Orders</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setTabs(2)}
                className={`flex items-center gap-2 border-y border-white py-3 px-4 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer ${
                  tabs === 2 ? "bg-primary text-white" : ""
                }`}
              >
                <BiCategoryAlt className="text-2xl" />
                <span className="text-lg">Categories</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setTabs(3)}
                className={`flex items-center gap-2 border-y border-white py-3 px-4 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer ${
                  tabs === 3 ? "bg-primary text-white" : ""
                }`}
              >
                <FaRegWindowMaximize className="text-2xl" />
                <span className="text-lg">Footer</span>
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 border-y border-white py-3 px-4 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer ">
                <MdOutlineExitToApp className="text-2xl" />
                <span className="text-lg">Exit</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          {tabs === 0 && <Products />} {tabs === 1 && <Orders />}
          {tabs === 2 && <Categories />} {tabs === 3 && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
