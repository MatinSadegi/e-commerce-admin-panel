import React from "react";
import Image from "next/image";
import NotifIcon from "@/public/icons/notification-svgrepo-com.svg";
import SearchIcon from "@/public/icons/search-svgrepo-com.svg";
import menu from '@/public/icons/menu-alt-1-svgrepo-com.svg'

const TopBar = () => {
  return (
    <section className="bg-white flex justify-between items-center w-full p-7 ">
      <div className=" lg:w-[40%] flex items-center   h-10">
        <div className="flex lg:hidden items-center pr-9 mr-4 border-r">
          <Image src={menu} alt="menu-icon" />
          <h3 className=" text-xl ml-1 font-semibold text-teal-600">
            Koal<span className=" text-black">shop</span>
          </h3>
        </div>
        <input
          type="text"
          placeholder="Search ..."
          className="bg-gray-100 rounded-l-md w-full h-full outline-none p-3 placeholder:text-sm "
        />
        <Image
          src={SearchIcon}
          alt="search-icon"
          className=" h-full w-12 bg-orange-400 p-2 rounded-r-md"
        />
      </div>
      <div className=" flex items-center">
        <div className="relative">
          <Image src={NotifIcon} alt="notification-icon" />
          <span className="bg-red-400 text-[11px] w-4 h-4 rounded-full flex justify-center items-center text-white absolute -top-2.5 -right-0.5">
            4
          </span>
        </div>
        <div className=" w-10 h-10 rounded-full bg-red-300 mr-3 ml-5"></div>
        <div>
          <h3>Walter White</h3>
          <p className="text-xs">Admin</p>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
