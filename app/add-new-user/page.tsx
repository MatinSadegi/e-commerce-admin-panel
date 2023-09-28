"use client";
import React, { useState } from "react";
import "../globals.css";

const AddNewUser = () => {
  const [userStep, setUserStep] = useState("Account");
  return (
    <div className=" bg-gray-100 p-5 pt-32 min-h-screen">
      <form className=" bg-white w-[60%] p-4 rounded-xl mx-auto ">
        <h2>Add New User</h2>
        <div className="border-b flex my-2 text-sm font-medium gap-4">
          <p
            className={`  w-fit p-4 cursor-pointer ${
              userStep === "Account"
                ? "border-teal-600 border-b-2"
                : "hover:border-b-2 hover:border-teal-500"
            } `}
            onClick={() => setUserStep("Account")}
          >
            Account
          </p>
          <p
            className={`  w-fit p-4 cursor-pointer ${
              userStep === "Permission"
                ? "border-teal-600 border-b-2"
                : "hover:border-b-2 hover:border-teal-500"
            } `}
            onClick={() => setUserStep("Permission")}
          >
            Permission
          </p>
        </div>
        <div
          className={`${
            userStep === "Account" ? "block " : "hidden "
          } mt-7 transition-all`}
        >
          <h3>User Information</h3>
          <div className="input-div-style">
            <p className="text-gray-600 font-medium">First Name</p>
            <input type="text" className="input-style" />
          </div>
          <div className="input-div-style">
            <p className="text-gray-600 font-medium">Email Address</p>
            <input type="text" className="input-style" />
          </div>
          <div className="input-div-style">
            <p className="text-gray-600 font-medium">Password</p>
            <input type="text" className="input-style" />
          </div>
          <div className="input-div-style">
            <p className="text-gray-600 font-medium">Confirm Password</p>
            <input type="text" className="input-style" />
          </div>
        </div>
        <div
          className={`${userStep === "Permission" ? "block" : "hidden"} mt-7`}
        >
          <div>
            <h3>Product Related Permission</h3>
            <ul className="">
              <li className="custom-radio-li">
                <p>Add Product</p>
                <div className="flex items-center gap-8">
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="add-radio"
                      className="custom-radio"
                    />
                    Allow
                  </label>
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="add-radio"
                      className="custom-radio"
                    />
                    Deny
                  </label>
                </div>
              </li>
              <li className="custom-radio-li">
                <p>Update Product</p>
                <div className="flex items-center gap-8">
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="update-radio"
                      className="custom-radio"
                    />
                    Allow
                  </label>
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="update-radio"
                      className="custom-radio"
                    />
                    Deny
                  </label>
                </div>
              </li>
              <li className="custom-radio-li">
                <p>Delete Product</p>
                <div className="flex items-center gap-8">
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="delete-radio"
                      className="custom-radio"
                    />
                    Allow
                  </label>
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="delete-radio"
                      className="custom-radio"
                    />
                    Deny
                  </label>
                </div>
              </li>
              <li className="custom-radio-li">
                <p>Apply Discount</p>
                <div className="flex items-center gap-8">
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="apply-radio"
                      className="custom-radio"
                    />
                    Allow
                  </label>
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="apply-radio"
                      className="custom-radio"
                    />
                    Deny
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-7">
            <h3>Category Related Permission</h3>
            <ul className="">
              <li className="custom-radio-li">
                <p>Add Category</p>
                <div className="flex items-center gap-8">
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="add-radio"
                      className="custom-radio"
                    />
                    Allow
                  </label>
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="add-radio"
                      className="custom-radio"
                    />
                    Deny
                  </label>
                </div>
              </li>
              <li className="custom-radio-li">
                <p>Update Category</p>
                <div className="flex items-center gap-8">
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="update-radio"
                      className="custom-radio"
                    />
                    Allow
                  </label>
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="update-radio"
                      className="custom-radio"
                    />
                    Deny
                  </label>
                </div>
              </li>
              <li className="custom-radio-li">
                <p>Delete Category</p>
                <div className="flex items-center gap-8">
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="delete-radio"
                      className="custom-radio"
                    />
                    Allow
                  </label>
                  <label className=" cursor-pointer">
                    <input
                      type="radio"
                      name="delete-radio"
                      className="custom-radio"
                    />
                    Deny
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;
