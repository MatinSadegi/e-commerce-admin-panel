"use client";
import React, { EventHandler, FormEventHandler, useState } from "react";
import "../globals.css";
import DropDown from "@/components/DropDown";
import { FormData } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "@/services/productServices";
import { toBase64 } from "@/hooks/setFileToBase";
import { toast } from "react-toastify";

const AddNewProduct = () => {
  const category = ["Men", "Women", "Kids"];
  const subcategory = ["Hoodie", "Bags", "Pants", "Socks", "Accessories"];
  const inventory = ["In Stock", "Out Of Stock"];
  const [formData, setFormData] = useState<FormData>({
    title: "",
    category: category[0],
    subcategory: subcategory[0],
    price: 0,
    description: "",
    image: { public_id: "", url: "" },
    inventory: inventory[0],
    quantity: { sm: 0, md: 0, lg: 0, xl: 0 },
    slug:""
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const imageData = await toBase64(file);
    if (imageData) {
      setFormData({
        ...formData,
        image: { url: JSON.stringify(imageData), public_id: "" },
      });
    }
  };

  const setQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      quantity: {
        ...formData.quantity,
        [e.currentTarget.name]: +e.target.value,
      },
    });
  };

  const mutation = useMutation({ mutationFn: createProduct });

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(formData);
      if (mutation.isSuccess) {
        toast.success("Product was created", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className=" flex flex-col items-center gap-5"
    >
      <section className=" bg-white w-[60%] p-4 rounded-xl ">
        <h2>Product Information</h2>
        <div className="input-div-style">
          <p className="text-gray-600 font-medium">Product Name</p>
          <input
            type="text"
            placeholder="Product Name"
            className="input-style"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="input-div-style">
          <p className="text-gray-600 font-medium">Category</p>
          <DropDown
            items={category}
            form={formData}
            setFormData={setFormData}
            currentFormItem="category"
          />
        </div>
        <div className="input-div-style">
          <p className="text-gray-600 font-medium">Subcategory</p>
          <DropDown
            items={subcategory}
            form={formData}
            setFormData={setFormData}
            currentFormItem="subcategory"
          />
        </div>
        <div className="input-div-style">
          <p className="text-gray-600 font-medium">price</p>
          <input
            type="number"
            placeholder="0"
            className="input-style"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="input-div-style">
          <p className="text-gray-600 font-medium">Image</p>
          <input
            type="file"
            className="text-sm bg-gray-100 text-gray-500  w-2/3 input cursor-pointer"
            name="image"
            onChange={handleImage}
          />
        </div>
      </section>
      <section className=" bg-white w-[60%] p-4 rounded-xl ">
        <h2>Product Information</h2>
        <div className="flex justify-between  mt-5">
          <p className="text-gray-600 font-medium">Product Description</p>
          <textarea
            className="bg-gray-100 rounded-sm w-2/3 h-48 outline-none p-4 font-light text-sm text-gray-600 placeholder:text-gray-600"
            placeholder="product description ..."
            name="description"
            onChange={handleChange}
          />
        </div>
      </section>

      <section className=" bg-white w-[60%] p-4 rounded-xl ">
        <h2>Product Inventory</h2>
        <div className="flex justify-between  mt-5">
          <p className="text-gray-600 font-medium">Stock Status</p>
          <DropDown
            items={inventory}
            form={formData}
            setFormData={setFormData}
            currentFormItem="inventory"
          />
        </div>
        <div className="mt-6 grid grid-cols-4">
          <div className="flex items-center gap-2">
            <p className=" text-gray-500 text-sm">sm</p>
            <input
              type="number"
              className="input-style"
              name="sm"
              min={0}
              value={formData.quantity.sm}
              onChange={setQuantity}
            />
          </div>
          <div className="flex items-center gap-2">
            <p className=" text-gray-500 text-sm">md</p>
            <input
              type="number"
              className="input-style"
              name="md"
              min={0}
              value={formData.quantity.md}
              onChange={setQuantity}
            />
          </div>
          <div className="flex items-center gap-2">
            <p className=" text-gray-500 text-sm">lg</p>
            <input
              type="number"
              className="input-style"
              name="lg"
              min={0}
              value={formData.quantity.lg}
              onChange={setQuantity}
            />
          </div>
          <div className="flex items-center gap-2">
            <p className=" text-gray-500 text-sm">xl</p>
            <input
              type="number"
              className="input-style"
              name="xl"
              min={0}
              value={formData.quantity.xl}
              onChange={setQuantity}
            />
          </div>
        </div>
      </section>
      <div className=" flex w-[60%] px-5 justify-end">
        {mutation.isLoading ? (
          <span className="spinner animate-spinner"></span>
        ) : (
          <button
            type="submit"
            className=" py-2.5 px-4 rounded-md text-sm bg-teal-500 text-white transition-all hover:bg-teal-600"
          >
            Create Product
          </button>
        )}
      </div>
    </form>
  );
};

export default AddNewProduct;
