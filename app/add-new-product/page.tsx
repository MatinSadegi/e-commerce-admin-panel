"use client";
import React, { useState } from "react";
import "../globals.css";
import DropDown from "@/components/DropDown";

const AddNewProduct = () => {
  const [productType, setProductType] = useState("");
  const productTypes = ["Simple","Classified"];
  const category = ['Men','Women','Shoes','Bags','Pants','Socks','Kids','Accessories']
  const inventory = ['In Stock','Out Of Stock']

  return (
    <div className=" bg-gray-100 p-5 flex flex-col items-center gap-5">
      <section className=" bg-white w-[60%] p-4 rounded-xl ">
        <h2>Product Information</h2>
        <div className="input-div-style">
          <p className="text-gray-600 font-medium">Product Name</p>
          <input
            type="text"
            placeholder="Product Name"
            className="input-style"
          />
        </div>
        <div className="input-div-style">
          <p className="text-gray-600 font-medium">Product Type</p>
          <DropDown items={productTypes} />
        </div>
        <div className="input-div-style">
          <p className="text-gray-600 font-medium">Category</p>
          <DropDown items={category} />
        </div>
      </section>
      <section className=" bg-white w-[60%] p-4 rounded-xl ">
        <h2>Product Information</h2>
        <div className="flex justify-between  mt-5">
          <p className="text-gray-600 font-medium">Product Description</p>
          <textarea
            className="bg-gray-100 rounded-sm w-2/3 h-48 outline-none p-4 font-light text-sm text-gray-600 placeholder:text-gray-600"
            placeholder="product description ..."
          />
        </div>
      </section>
      <section className=" bg-white w-[60%] p-4 rounded-xl ">
        <h2>Product Image</h2>
        <div className="input-div-style">
          <p className="text-gray-600 font-medium">Image</p>
          <input
            type="file"
            className="text-sm bg-gray-100 text-gray-500  w-2/3 input cursor-pointer"
          />
        </div>
      </section>
      <section className=" bg-white w-[60%] p-4 rounded-xl ">
        <h2>Product Price</h2>
        <div className="input-div-style">
          <p className="text-gray-600 font-medium">price</p>
          <input type="text" placeholder="0" className="input-style" />
        </div>
      </section>
      <section className=" bg-white w-[60%] p-4 rounded-xl ">
        <h2>Product Inventory</h2>
        <div className="flex justify-between  mt-5">
          <p className="text-gray-600 font-medium">Stock Status</p>
          <DropDown items={inventory} />
        </div>
      </section>
    </div>
  );
};

export default AddNewProduct;
