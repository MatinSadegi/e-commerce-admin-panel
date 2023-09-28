"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import homeIcon from "@/public/icons/home.svg";
import productIcon from "@/public/icons/product.svg";
import categoryIcon from "@/public/icons/category.svg";
import attributeIcon from "@/public/icons/attribute.svg";
import userIcon from "@/public/icons/user-alt-1-svgrepo-com.svg";
import roleIcon from "@/public/icons/user-check-alt-1-svgrepo-com.svg";
import orderIcon from "@/public/icons/order-svgrepo-com.svg";
import couponsIcon from "@/public/icons/coupon-3-svgrepo-com.svg";
import taxIcon from "@/public/icons/discount-svgrepo-com.svg";
import productReviewIcon from "@/public/icons/star-svgrepo-com.svg";
import settingIcon from "@/public/icons/setting-gear-svgrepo-com.svg";
import dashboardIcon from "@/public/icons/dashboard-svgrepo-com.svg";
import negativeIcon from "@/public/icons/negative-sign-svgrepo-com.svg";

const SideBar = () => {
  const [openProduct, setOpenProduct] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openAttribute, setOpenAttribute] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [openRole, setOpenRole] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [openCoupon, setOpenCoupon] = useState(false);
  return (
    <div className=" h-screen absolute w-[250px] lg:static lg:w-full overflow-hidden bg-gradient-teal p-5 ">
      <div className="flex justify-between">
        <h1 className="text-white">Koal</h1>
        <Image src={dashboardIcon} alt="dashboard-icon" />
      </div>

      <ul className="text-white my-4 flex flex-col gap-3">
        <li className=" p-2 rounded-md bg-[rgba(255,255,255,0.1)] ">
          <Link href="/" className="flex items-center gap-1">
            <Image src={homeIcon} alt="home-icon" />
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="" onClick={() => setOpenProduct(!openProduct)}>
          <div className="p-2.5 rounded-md bg-cursor-pointer flex justify-between items-center transition-all duration-500 hover:bg-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-2.5">
              <Image src={productIcon} alt="product-icon" />
              <span>Product</span>
            </div>
            <div
              className={` transition-all duration-500 ${
                openProduct ? "rotate-90" : "rotate-0"
              }`}
            >
              <span className="w-2 rotate-45 h-0.5 mb-[3px] bg-white flex"></span>
              <span className="w-2 h-0.5 -rotate-45 bg-white flex"></span>
            </div>
          </div>
          <div
            className={`text-[13px] transition-all duration-500 overflow-hidden font-semibold block pl-4   ${
              openProduct ? "h-12 mt-2" : " h-0 mt-0"
            }`}
          >
            <Link className="flex items-center gap-3" href="/products">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>Products</span>
            </Link>
            <Link className="flex items-center gap-3 mt-1.5" href="/add-new-product">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>Add New Product</span>
            </Link>
          </div>
        </li>
        <li className="" onClick={() => setOpenCategory(!openCategory)}>
          <div className="p-2.5 rounded-md bg-cursor-pointer flex justify-between items-center transition-all duration-500 hover:bg-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-2.5">
              <Image src={categoryIcon} alt="category-icon" />
              <span>Category</span>
            </div>
            <div
              className={` transition-all duration-500 ${
                openCategory ? "rotate-90" : "rotate-0"
              }`}
            >
              <span className="w-2 rotate-45 h-0.5 mb-[3px] bg-white flex"></span>
              <span className="w-2 h-0.5 -rotate-45 bg-white flex"></span>
            </div>
          </div>
          <div
            className={`text-[13px] transition-all duration-500 overflow-hidden font-semibold block pl-4   ${
              openCategory ? "h-12 mt-2" : " h-0 mt-0"
            }`}
          >
            <Link className="flex items-center gap-3" href="/#">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>Category List</span>
            </Link>
            <Link className="flex items-center gap-3 mt-1.5" href="/add-new-category">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>Add New Category</span>
            </Link>
          </div>
        </li>
        <li className="" onClick={() => setOpenAttribute(!openAttribute)}>
          <div className="p-2.5 rounded-md bg-cursor-pointer flex justify-between items-center transition-all duration-500 hover:bg-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-2.5">
              <Image src={attributeIcon} alt="attributes-icon" />
              <span>Attributes</span>
            </div>
            <div
              className={` transition-all duration-500 ${
                openAttribute ? "rotate-90" : "rotate-0"
              }`}
            >
              <span className="w-2 rotate-45 h-0.5 mb-[3px] bg-white flex"></span>
              <span className="w-2 h-0.5 -rotate-45 bg-white flex"></span>
            </div>
          </div>
          <div
            className={`text-[13px] transition-all duration-500 overflow-hidden font-semibold block pl-4   ${
              openAttribute ? "h-12 mt-2" : " h-0 mt-0"
            }`}
          >
            <Link className="flex items-center gap-3" href="/#">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>Attributes</span>
            </Link>
            <Link className="flex items-center gap-3 mt-1.5" href="/#">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>Add Attributes</span>
            </Link>
          </div>
        </li>
        <li className="" onClick={() => setOpenUser(!openUser)}>
          <div className="p-2.5 rounded-md bg-cursor-pointer flex justify-between items-center transition-all duration-500 hover:bg-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-2.5">
              <Image src={userIcon} alt="user-icon" />
              <span>Users</span>
            </div>
            <div
              className={` transition-all duration-500 ${
                openUser ? "rotate-90" : "rotate-0"
              }`}
            >
              <span className="w-2 rotate-45 h-0.5 mb-[3px] bg-white flex"></span>
              <span className="w-2 h-0.5 -rotate-45 bg-white flex"></span>
            </div>
          </div>
          <div
            className={`text-[13px] transition-all duration-500 overflow-hidden font-semibold block pl-4   ${
              openUser ? "h-12 mt-2" : " h-0 mt-0"
            }`}
          >
            <Link className="flex items-center gap-3" href="/users">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>All Users</span>
            </Link>
            <Link className="flex items-center gap-3 mt-1.5" href="/add-new-user">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>Add New User</span>
            </Link>
          </div>
        </li>
        <li className="" onClick={() => setOpenRole(!openRole)}>
          <div className="p-2.5 rounded-md bg-cursor-pointer flex justify-between items-center transition-all duration-500 hover:bg-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-2.5">
              <Image src={roleIcon} alt="role-icon" />
              <span>Roles</span>
            </div>
            <div
              className={` transition-all duration-500 ${
                openRole ? "rotate-90" : "rotate-0"
              }`}
            >
              <span className="w-2 rotate-45 h-0.5 mb-[3px] bg-white flex"></span>
              <span className="w-2 h-0.5 -rotate-45 bg-white flex"></span>
            </div>
          </div>
          <div
            className={`text-[13px] transition-all duration-500 overflow-hidden font-semibold block pl-4   ${
              openRole ? "h-12 mt-2" : " h-0 mt-0"
            }`}
          >
            <Link className="flex items-center gap-3" href="/#">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>All Roles</span>
            </Link>
            <Link className="flex items-center gap-3 mt-1.5" href="/#">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>Create New Role</span>
            </Link>
          </div>
        </li>
        <li className="" onClick={() => setOpenOrder(!openOrder)}>
          <div className="p-2.5 rounded-md bg-cursor-pointer flex justify-between items-center transition-all duration-500 hover:bg-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-2.5">
              <Image src={orderIcon} alt="order-icon" />
              <span>Orders</span>
            </div>
            <div
              className={` transition-all duration-500 ${
                openOrder ? "rotate-90" : "rotate-0"
              }`}
            >
              <span className="w-2 rotate-45 h-0.5 mb-[3px] bg-white flex"></span>
              <span className="w-2 h-0.5 -rotate-45 bg-white flex"></span>
            </div>
          </div>
          <div
            className={`text-[13px] transition-all duration-500 overflow-hidden font-semibold block pl-4   ${
              openOrder ? "h-20 mt-2" : " h-0 mt-0"
            }`}
          >
            <Link className="flex items-center gap-3" href="/#">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>Order List</span>
            </Link>
            <Link className="flex items-center gap-3 mt-1.5" href="/#">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>Order Detail</span>
            </Link>
            <Link className="flex items-center gap-3 mt-1.5" href="/#">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>Order Tracking</span>
            </Link>
          </div>
        </li>
        <li className="" onClick={() => setOpenCoupon(!openCoupon)}>
          <div className="p-2.5 rounded-md bg-cursor-pointer flex justify-between items-center transition-all duration-500 hover:bg-[rgba(255,255,255,0.1)]">
            <div className="flex items-center gap-2.5">
              <Image src={couponsIcon} alt="coupons-icon" />
              <span>Coupons</span>
            </div>
            <div
              className={` transition-all duration-500 ${
                openCoupon ? "rotate-90" : "rotate-0"
              }`}
            >
              <span className="w-2 rotate-45 h-0.5 mb-[3px] bg-white flex"></span>
              <span className="w-2 h-0.5 -rotate-45 bg-white flex"></span>
            </div>
          </div>
          <div
            className={`text-[13px] transition-all duration-500 overflow-hidden font-semibold block pl-4   ${
              openCoupon ? "h-12 mt-2" : " h-0 mt-0"
            }`}
          >
            <Link className="flex items-center gap-3" href="/#">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>Coupon List</span>
            </Link>
            <Link className="flex items-center gap-3 mt-1.5" href="/#">
              <Image src={negativeIcon} alt="negative-icon" />
              <span>Create Coupon</span>
            </Link>
          </div>
        </li>

        <li className=" p-2.5 rounded-md transition-all hover:bg-[rgba(255,255,255,0.1)]">
          <Link href="/#" className="flex items-center gap-2.5">
            <Image src={taxIcon} alt="tax-icon" />
            <span>Tax</span>
          </Link>
        </li>
        <li className=" p-2.5 rounded-md transition-all hover:bg-[rgba(255,255,255,0.1)]">
          <Link href="/#" className="flex items-center gap-2.5">
            <Image src={productReviewIcon} alt="product-review-icon" />
            <span>Product Review</span>
          </Link>
        </li>
        <li className=" p-2.5 rounded-md transition-all hover:bg-[rgba(255,255,255,0.1)]">
          <Link href="/#" className="flex items-center gap-2.5">
            <Image src={settingIcon} alt="setting-icon" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
