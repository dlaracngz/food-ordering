"use client";
import { useState } from "react";
import Image from "next/image";
import profilePhoto from "@/public/images/cust2.jpg";
import { FaHome } from "react-icons/fa";
import { MdOutlineExitToApp, MdDirectionsBike } from "react-icons/md";
import { IoKeySharp } from "react-icons/io5";
import Account from "./Account";
import Password from "./Password";
import Orders from "./Orders";

const Profile = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="container mx-auto px-2 min-h-[calc(100vh_-_475px)]">
      <div className="flex flex-col lg:flex-row gap-10 my-6">
        <div className="bg-[#e5e7eb] h-full border border-secondary">
          <div className="flex flex-col gap-2 justify-center items-center w-full px-20 py-6">
            <Image
              src={profilePhoto}
              alt=""
              width={100}
              height={100}
              className="rounded-full"
            />
            <span className="font-bold text-xl whitespace-nowrap">
              Dilara Cengiz
            </span>
          </div>
          <ul>
            <li>
              <a
                onClick={() => setTabs(0)}
                className={`flex items-center gap-2 border-y border-white py-3 px-4 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer ${
                  tabs == 0 ? "bg-primary text-white" : ""
                }`}
              >
                <FaHome className="text-2xl" />
                <span className="text-lg">Account</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setTabs(1)}
                className={`flex items-center gap-2 border-y border-white py-3 px-4 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer ${
                  tabs == 1 ? "bg-primary text-white" : ""
                }`}
              >
                <IoKeySharp className="text-2xl" />
                <span className="text-lg">Password</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setTabs(2)}
                className={`flex items-center gap-2 border-y border-white py-3 px-4 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer ${
                  tabs === 2 ? "bg-primary text-white" : ""
                }`}
              >
                <MdDirectionsBike className="text-2xl" />
                <span className="text-lg">Orders</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => setTabs(3)}
                className={`flex items-center gap-2 border-y border-white py-3 px-4 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in cursor-pointer ${
                  tabs === 3 ? "bg-primary text-white" : ""
                }`}
              >
                <MdOutlineExitToApp className="text-2xl" />
                <span className="text-lg">Exit</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          {tabs === 0 && <Account />} {tabs === 1 && <Password />}{" "}
          {tabs === 2 && <Orders />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
