"use client";
import React from "react";
import "../globals.css";


const AddNewCategory = () => {
  return (
    <div className=" bg-gray-100 p-5 pt-32 min-h-screen">
      <form>
        <section className=" bg-white w-[60%] p-4 rounded-xl mx-auto ">
          <h2>Category Information</h2>
          <div className="input-div-style">
            <p className="text-gray-600 font-medium">Category Name</p>
            <input
              type="text"
              placeholder="Category Name"
              className="input-style"
            />
          </div>
          <div className="input-div-style">
            <p className="text-gray-600 font-medium">Category Image</p>
            <input
              type="image"
              alt="choose an image file"
              className=" outline-dashed outline-gray-200 w-2/3 h-[100px] flex  justify-center items-center text-gray-500 text-sm hover:bg-gray-200"
            />
          </div>
        </section>
      </form>
    </div>
  );
}

export default AddNewCategory;