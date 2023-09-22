"use client";
import React from "react";
import Image from "next/image";
import increase from "@/public/icons/trending-up-svgrepo-com.svg";
import decrease from "@/public/icons/trending-down-svgrepo-com.svg";
import coin from "@/public/icons/coin-svgrepo-com.svg";
import bag from "@/public/icons/bag-smile-svgrepo-com.svg";
import chatIcon from "@/public/icons/chat-round-svgrepo-com.svg";
import userPlus from "@/public/icons/user-plus-svgrepo-com.svg";
const Static = () => {
  return (
    <section className="grid grid-cols-4  gap-4">
      <div className="bg-white p-6 rounded-lg flex justify-between items-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 ">
        <div className="border-l-[3px] border-green-600 pl-4">
          <h3 className=" text-gray-400">Total Revenue</h3>
          <div className="flex gap-4 items-center">
            <p className=" text-gray-600 text-2xl font-semibold">$6659</p>
            <div className="text-xs bg-gray-100 py-0.5 px-2 rounded-sm text-green-600 flex items-center gap-1 font-semibold">
              <Image src={increase} alt="increase-icon" />
              <span>8.5%</span>
            </div>
          </div>
        </div>
        <div className="bg-green-100 p-2 rounded">
          <Image className="" src={coin} alt="coin-icon" />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg flex justify-between items-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 ">
        <div className="border-l-[3px] border-indigo-500 pl-4">
          <h3 className=" text-gray-400">Total Orders</h3>
          <div className="flex gap-4 items-center">
            <p className=" text-gray-600 text-2xl font-semibold">2546</p>
            <div className="text-xs bg-gray-100 py-0.5 px-2 rounded-sm text-indigo-500 flex items-center gap-1 font-semibold">
              <Image src={decrease} alt="increase-icon" />
              <span>8.5%</span>
            </div>
          </div>
        </div>
        <div className="bg-indigo-50 p-2 rounded">
          <Image className="" src={bag} alt="bag-icon" />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg flex justify-between items-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 ">
        <div className="border-l-[3px] border-red-500 pl-4">
          <h3 className=" text-gray-400">Total Products</h3>
          <div className="flex gap-4 items-center">
            <p className=" text-gray-600 text-2xl font-semibold">892</p>
            <p className="text-xs bg-gray-100 py-0.5 px-2 rounded-sm text-red-500 flex items-center gap-1 font-semibold">
              ADD NEW
            </p>
          </div>
        </div>
        <div className="bg-red-50 p-2 rounded">
          <Image className="" src={chatIcon} alt="chat-icon" />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg flex justify-between items-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5  ">
        <div className="border-l-[3px] border-violet-500 pl-4">
          <h3 className=" text-gray-400">Total Customers</h3>
          <div className="flex gap-4 items-center">
            <p className=" text-gray-600 text-2xl font-semibold">4.5K</p>
            <div className="text-xs bg-gray-100 py-0.5 px-2 rounded-sm text-violet-500 flex items-center gap-1 font-semibold">
              <Image src={decrease} alt="decrease-icon" />
              <span>8.5%</span>
            </div>
          </div>
        </div>
        <div className="bg-indigo-50 p-2 rounded">
          <Image className="" src={userPlus} alt="user-icon" />
        </div>
      </div>
    </section>
  ); 
};

export default Static;
