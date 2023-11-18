"use client";
import React, { useState } from "react";
import "../globals.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import multiplyIcon from "@/public/icons/multiply-svgrepo-com.svg";
import { addAttribute } from "@/services/productServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddAttributes = () => {
  const [attribute, setAttribute] = useState({ name: "", values: ["S"] });
  const [tagValue, setTagValue] = useState("");
  const router = useRouter();
  const notify = () => {
    toast.success("Added Attribute", { position: "bottom-right" });
  };

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    
    if (e.key === "Enter" && tagValue) {
      setAttribute({
        name: attribute.name,
        values: [...attribute.values, tagValue],
      });
      setTagValue("");
      e.preventDefault();
    }
  };
  const deleteTag = (tag: string): void => {
     const newTags = attribute.values.filter((item) => item !== tag);
    setAttribute({ name: attribute.name, values: newTags });   
  };
  const attributeNameChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAttribute({ name: e.target.value, values: [...attribute.values] });
  };

  const mutation = useMutation({
    mutationFn: addAttribute,
    onSuccess: () => {
      notify();
      router.push("/attributes");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(attribute);
  };

  return (
    <div className=" bg-gray-100 p-5 pt-32 min-h-screen">
      <ToastContainer />
      <form onSubmit={submitHandler}>
        <section className=" bg-white w-[60%] p-4 rounded-xl mx-auto ">
          <h3>Add Attribute</h3>
          <div className="input-div-style">
            <p className="text-gray-600 font-medium">Attribute Name</p>
            <input
              type="text"
              placeholder="Attribute Name"
              className="input-style"
              onChange={attributeNameChangeHandler}
            />
          </div>
          <div className="input-div-style">
            <p className="text-gray-600 font-medium">Attribute Value</p>
            <div className="w-2/3 p-2.5 rounded text-sm font-light bg-gray-100 overflow-hidden flex gap-3">
              {attribute.values.map((tag) => {
                return (
                  <div
                    className="bg-white text-teal-600 py-2 px-4 rounded relative"
                    key={tag}
                  >
                    <Image
                      src={multiplyIcon}
                      alt="multiply-icon"
                      className=" absolute top-0.5 right-0.5"
                      onClick={() => deleteTag(tag)}
                    />
                    <span>{tag}</span>
                  </div>
                );
              })}
              <input
                type="text"
                placeholder="Attribute Value"
                className="outline-none placeholder:text-gray-400 bg-gray-100 ml-4"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTagValue(e.target.value)
                }
                value={tagValue}
                onKeyDown={addTag}
              />
            </div>
          </div>
          <div className="flex justify-end mt-5">
            {mutation.isLoading ? (
              <span className="spinner animate-spinner"></span>
            ) : (
              <button className="teal-button" type="submit">
                Add Attribute
              </button>
            )}
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddAttributes;
