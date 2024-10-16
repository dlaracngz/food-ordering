import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-secondary text-white pt-[75px] pb-[40px]">
      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-14">
          <div className="flex flex-col items-center flex-1">
            <h4 className="font-dancing font-semibold text-[28px] mb-5">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-y-3 text-[#dbdbdb]">
              <li>
                <a
                  href=""
                  className="flex items-center justify-center gap-x-2 hover:text-primary font-medium transition-all duration-200 ease-in"
                >
                  <FaLocationDot />
                  <span>Location</span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center justify-center gap-x-2 hover:text-primary font-medium transition-all duration-200 ease-in"
                >
                  <FaPhone />
                  <span>Call +01 123456789</span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center justify-center gap-x-2 hover:text-primary font-medium transition-all duration-200 ease-in"
                >
                  <HiMail className="text-xl" />
                  <span>demo@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center flex-1">
            <a href="/" className="font-dancing font-bold text-[28px] mb-5">
              Feane
            </a>
            <p className="text-center text-[#dbdbdb] mb-5">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="flex gap-2">
              <FaFacebookF className="text-3xl bg-white text-black rounded-lg p-1 hover:text-primary cursor-pointer" />
              <FaTwitter className="text-3xl bg-white text-black rounded-lg p-1 hover:text-primary cursor-pointer" />
              <FaLinkedinIn className="text-3xl bg-white text-black rounded-lg p-1 hover:text-primary cursor-pointer" />
              <FaInstagram className="text-3xl bg-white text-black rounded-lg p-1 hover:text-primary cursor-pointer" />
              <FaPinterest className="text-3xl bg-white text-black rounded-lg p-1 hover:text-primary cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <h4 className="font-dancing font-semibold text-[28px] mb-5">
              Opening Hours
            </h4>
            <p className="text-[#dbdbdb] mb-3">Everyday</p>
            <p className="text-[#dbdbdb]">10.00 Am -10.00 Pm</p>
          </div>
        </div>
        <div className="w-full text-center">
          © 2024 All Rights Reserved By Free Html Templates
        </div>
      </div>
    </div>
  );
};

export default Footer;
