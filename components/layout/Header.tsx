"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import SearchModal from "../ui/SearchModal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const toggleModal = () => {
    setIsSearchModal(!isSearchModal);
  };
  const menuToggleModal = () => {
    setIsMenuModal(!isMenuModal);
  };
  const router = usePathname();
  const quantity = useSelector((state: RootState) => state.card.quantity);

  return (
    <div>
      <div
        className={`${
          router === "/" ? "bg-transparent" : "bg-secondary"
        }  text-white h-[5.5rem] z-40 relative`}
      >
        <div className="container mx-auto h-full px-2">
          <div className="flex justify-between items-center h-full">
            <Link href="/" className="font-dancing font-bold text-[32px]">
              Feane
            </Link>
            <nav className="hidden sm:block">
              <ul className="flex gap-6">
                <li>
                  <Link
                    href="/"
                    className={`hover:text-primary transition-text duration-200 ease-in ${
                      router === "/" ? "text-primary" : ""
                    }`}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className={`hover:text-primary transition-text duration-200 ease-in ${
                      router === "/menu" ? "text-primary" : ""
                    }`}
                  >
                    MENU
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`hover:text-primary transition-text duration-200 ease-in ${
                      router === "/about" ? "text-primary" : ""
                    }`}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bookTable"
                    className={`hover:text-primary transition-text duration-200 ease-in ${
                      router === "/bookTable" ? "text-primary" : ""
                    }`}
                  >
                    BOOK TABLE
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex gap-2 items-center">
              <Link href="/auth/login">
                <FaUser className="hover:text-primary cursor-pointer" />
              </Link>
              <Link href="/cart" className="relative">
                <FaShoppingCart className="hover:text-primary cursor-pointer" />
                <div className="absolute -top-2 -right-2 text-black text-xs bg-primary text-center align-middle rounded-full w-4 h-4">
                  {quantity}
                </div>
              </Link>
              <a onClick={toggleModal}>
                <FaSearch className="hover:text-primary cursor-pointer" />
              </a>
              <button className="btn hidden md:block">Order Online</button>
              <a onClick={menuToggleModal} className="block sm:hidden">
                <IoMenu className="text-2xl hover:text-primary cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <SearchModal
        isSearchModal={isSearchModal}
        setIsSearchModal={setIsSearchModal}
      />
    </div>
  );
};

export default Header;
