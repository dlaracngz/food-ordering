import Image from "next/image";
import Link from "next/link";
import React from "react";
import pizzaPicture from "@/public/pizzza2.png";
import { FaShoppingCart } from "react-icons/fa";

const ProductItem = () => {
  return (
    <div className="bg-secondary text-white rounded-2xl">
      <Link href="/product">
        <div className="bg-[#f1f2f3] rounded-t-xl rounded-bl-[40px] py-[40px] flex justify-center">
          <Image
            src={pizzaPicture}
            alt=""
            width={160}
            height={160}
            className="hover:scale-110 transition-all duration-200 ease-in cursor-pointer"
          />
        </div>
      </Link>
      <div className="px-6 py-8">
        <h5 className="text-[1.25rem] font-bold">Delicious Pizza</h5>
        <p className="text-[15px] my-2">
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque
        </p>
        <div className="flex justify-between items-center">
          <span>$20</span>
          <FaShoppingCart className="bg-primary p-[5px] rounded-lg text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
