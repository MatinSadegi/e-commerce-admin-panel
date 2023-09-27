"use client";
import React, { useState } from "react";
import downIcon from "@/public/icons/down-arrow-5-svgrepo-com.svg";
import Image from "next/image";

interface DropDownProps {
  items: string[];
}

const DropDown: React.FC<DropDownProps> = ({ items }) => {
  const [dropDown, setDropDown] = useState(true);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  return (
    <div
      className={`w-2/3 relative rounded text-gray-500 text-sm font-light ${
        dropDown ? "overflow-hidden" : " overflow-visible"
      } `}
    >
      <div
        className="flex justify-between p-2.5 cursor-pointer bg-gray-100 relative z-0 overflow-hidden"
        onClick={() => setDropDown((prev) => !prev)}
      >
        <p className="">{selectedItem}</p>
        <div className="  flex ">
          <Image
            src={downIcon}
            alt="down-icon"
            className={`${dropDown ? "rotate-0" : "rotate-180"} transition-all`}
          />
        </div>
      </div>

      <ul
        className={`flex flex-col w-full absolute z-10 max-h-[150px] overflow-y-auto scrollbar `}
      >
        {items.map((item: string) => (
          <li
            className="text-gray-400 bg-white p-2 hover:bg-teal-600 hover:text-white font-medium transition-all "
            onClick={() => {
              setSelectedItem(item);
              setDropDown(true);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
