import Image from "next/image";
import React from "react";
import { ImCross } from "react-icons/im";
import image from "@/public/image1.png";

interface SearchModalProps {
  isSearchModal: boolean;
  setIsSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal: React.FC<SearchModalProps> = ({
  isSearchModal,
  setIsSearchModal,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[999] flex justify-center px-4 items-center transition-all duration-700 ease-in-out ${
        isSearchModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="relative bg-white px-6 py-8 rounded-3xl z-10 w-[500px]">
        <ImCross
          onClick={() => setIsSearchModal(false)}
          className="absolute top-3 right-3 border-2 border-black p-1 w-6 h-6 rounded-full cursor-pointer"
        />
        <h4 className="font-dancing text-[32px] font-bold mt-3 mb-5 text-center">
          Search
        </h4>
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-primary outline-none rounded-[5px] pl-4 py-2"
        />
        <ul className="flex flex-col gap-y-2 my-3">
          <li className="flex justify-between items-center cursor-pointer hover:bg-primary rounded-[5px] transition-all duration-300 ease-in">
            <Image
              src={image}
              height={50}
              width={50}
              alt="pizza1"
              className="pt-1"
            />
            <span className="font-bold">Good Pizza</span>
            <span className="font-bold">$10</span>
          </li>
          <li className="flex justify-between items-center cursor-pointer hover:bg-primary rounded-[5px] transition-all duration-300 ease-in">
            <Image
              src={image}
              height={50}
              width={50}
              alt="pizza1"
              className="pt-1"
            />
            <span className="font-bold">Good Pizza</span>
            <span className="font-bold">$10</span>
          </li>
          <li className="flex justify-between items-center cursor-pointer hover:bg-primary rounded-[5px] transition-all duration-300 ease-in">
            <Image
              src={image}
              height={50}
              width={50}
              alt="pizza1"
              className="pt-1"
            />
            <span className="font-bold">Good Pizza</span>
            <span className="font-bold">$10</span>
          </li>
        </ul>
      </div>
      <div
        className="fixed top-0 left-0 h-full w-full bg-black opacity-50 cursor-pointer"
        onClick={() => setIsSearchModal(false)}
      ></div>
    </div>
  );
};

export default SearchModal;
