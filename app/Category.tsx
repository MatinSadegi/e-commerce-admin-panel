import React from 'react'
import Image from 'next/image'
import shoeIcon from '@/public/icons/1540183692.svg'
import tshirt from '@/public/icons/t-shirt-svgrepo-com.svg'
import pant from '@/public/icons/pants-2-svgrepo-com.svg'
import socks from '@/public/icons/socks-3-svgrepo-com.svg'
import bag from '@/public/icons/bag-2-svgrepo-com.svg'
import kid from '@/public/icons/baby-clothes-illustrations-svgrepo-com.svg'
import accessories from '@/public/icons/round-glasses-svgrepo-com.svg'
import jacket from '@/public/icons/jacket-illustration-2-svgrepo-com.svg'

const Category = () => {
  return (
    <section className=" section-style">
      <h3 className="text-gray-700 mb-1">Category</h3>
      <ul className="text-gray-600 flex justify-between text-center">
        <li className=' cursor-pointer'>
          <div className="p-4 my-2 rounded-lg bg-gray-100 w-fit group hover:bg-gradient-teal">
            <Image
              src={shoeIcon}
              alt="shoe"
              className="group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <span className="text-sm">Shoes</span>
        </li>
        <li className=' cursor-pointer'>
          <div className="p-4 my-2 rounded-lg bg-gray-100 w-fit group hover:bg-gradient-teal ">
            <Image
              src={tshirt}
              alt="tshirt"
              className="p-1 group-hover:brightness-0 group-hover:invert "
            />
          </div>
          <span className="text-sm">T Shirt</span>
        </li>
        <li className=" cursor-pointer">
          <div className="p-4 my-2 rounded-lg bg-gray-100 w-fit group hover:bg-gradient-teal">
            <Image
              src={pant}
              alt="pant-icon"
              className="p-1 group-hover:brightness-0 group-hover:invert "
            />
          </div>
          <span className="text-sm">Pants</span>
        </li>
        <li className=" cursor-pointer">
          <div className="p-4 my-2 rounded-lg bg-gray-100 w-fit group hover:bg-gradient-teal">
            <Image
              src={socks}
              alt="socks-icon"
              className="p-1 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <span className="text-sm">Socks</span>
        </li>
        <li className=" cursor-pointer">
          <div className="p-4 my-2 rounded-lg bg-gray-100 w-fit group hover:bg-gradient-teal">
            <Image
              src={bag}
              alt="bag-icon"
              className="p-1 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <span className="text-sm">Bags</span>
        </li>
        <li className=" cursor-pointer">
          <div className="p-4 my-2 rounded-lg bg-gray-100 w-fit group hover:bg-gradient-teal">
            <Image
              src={kid}
              alt="kid-icon"
              className="p-1 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <span className="text-sm">Kids</span>
        </li>
        <li className=" cursor-pointer">
          <div className="p-4 my-2 rounded-lg bg-gray-100 w-fit group hover:bg-gradient-teal">
            <Image
              src={accessories}
              alt="accessories-icon"
              className="p-1 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <span className="text-sm">Accessories</span>
        </li>
        <li className=" cursor-pointer">
          <div className="p-5 my-2 rounded-lg bg-gray-100 w-fit group hover:bg-gradient-teal">
            <Image
              src={jacket}
              alt="jacket-icon"
              className="p-1 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <span className="text-sm">Jacket</span>
        </li>
      </ul>
    </section>
  );
}

export default Category