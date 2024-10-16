import Image from "next/image";
import { StaticImageData } from "next/image";
import React from "react";

interface CustomerItemProps {
  imgSrc: StaticImageData;
}

const CustomerItem: React.FC<CustomerItemProps> = ({ imgSrc }) => {
  return (
    <div>
      <div className="bg-secondary rounded-xl p-6 mx-4 text-white">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero magni
          alias quaerat eligendi quos quidem hic at dolores maiores aperiam,
          corporis quis dolore similique aut.
        </p>
        <h6 className="font-bold mt-5 mb-1">Moana Michell</h6>
        <p>magna aliqua</p>
      </div>
      <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-6 before:content-[''] before:absolute before:top-0 flex justify-center before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5">
        <Image
          src={imgSrc}
          alt=""
          layout="fill"
          className="rounded-full"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
