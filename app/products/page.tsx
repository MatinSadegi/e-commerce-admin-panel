"use client";
import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/productServices";
import { FormData } from "@/types/types";
import Image from "next/image";

const Products = () => {
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (productsQuery.status === "loading") return <h1>Loading ...</h1>;
  if (productsQuery.status === "error") {
    return <h1>{JSON.stringify(productsQuery.error)}</h1>;
  }


  return (
    <div className="bg-white  rounded-lg p-6 flex flex-col items-center gap-5">
      <div className="flex justify-between w-full">
        <h3 className="">Products List</h3>
        <div className="text-right">
          <button>
            <Link
              className=" py-2.5 px-4 rounded-md text-sm bg-teal-500 text-white transition-all hover:bg-teal-600"
              href="add-new-product"
            >
              Add Product
            </Link>
          </button>
          <div className="flex gap-2 mt-5 items-center text-sm font-thin">
            <span>Search : </span>
            <input
              type="text"
              className="border outline-none h-9 rounded px-2"
            />
          </div>
        </div>
      </div>
      <table className="w-full flex flex-col">
        <thead>
          <tr className="bg-gray-100 grid grid-cols-7  text-sm text-gray-600 py-3 rounded-lg">
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Current Qty</th>
            <th>Price</th>
            <th>Status</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody className=" flex flex-col  ">
          {productsQuery.data.map((product: FormData) => {
            return (
              <tr className="grid grid-cols-7 items-center py-3 even:bg-gray-100 rounded-lg" key={product.slug}>
                <th className="flex justify-center">
                  <Image
                    src={product.image.url}
                    alt={product.slug}
                    width={60}
                    height={60}
                  />
                </th>
                <th>{product.title.split(/\s+/).slice(0, 3).join(" ")}</th>
                <th className="text-teal-600">{product.category}</th>
                <th>
                  {product.quantity.sm +
                    product.quantity.lg +
                    product.quantity.md +
                    product.quantity.xl}
                </th>
                <th className="font-bold">${product.price.toFixed(2)}</th>
                <th
                  className={`${
                    product.inventory === "In Stock"
                      ? " bg-status-green text-green-700"
                      : "bg-status-red text-red-700"
                  } p-2 text-xs lowercase rounded-md`}
                >
                  {product.inventory}
                </th> 
                <th>OPTION</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
