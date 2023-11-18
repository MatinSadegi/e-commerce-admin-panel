"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAttributes, deleteAttribute } from "@/services/productServices";
import { AttributesData } from "@/types/types";
import Image from "next/image";
import trashIcon from "@/public/icons/trash-alt-svgrepo-com.svg";

const AttributesList = () => {
  const queryClient = useQueryClient();
  const attributeQuery = useQuery({
    queryKey: ["attribute"],
    queryFn: getAttributes,
  });
  const mutation = useMutation({
    mutationFn: deleteAttribute,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attribute"] });
    },
  });
  const deleteAttributeHandler = async (attributeName: string) => {
    try {
      await mutation.mutateAsync(attributeName);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white  rounded-lg p-6 flex flex-col items-center gap-5">
      <div className="flex justify-between w-full">
        <h3 className="">All Attributes</h3>
        <div className="text-right">
          <Link
            className=" py-2.5 px-4 rounded-md text-sm bg-teal-500 text-white transition-all hover:bg-teal-600"
            href="add-attributes"
          >
            Add New
          </Link>
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
          <tr className="bg-gray-100 grid grid-cols-3 text-gray-600 py-3 rounded-lg">
            <th>Name</th>
            <th>Value</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody className=" flex flex-col  ">
          {attributeQuery?.data?.map((attribute: AttributesData) => {
            return (
              <tr
                className="grid grid-cols-3 items-center py-3 even:bg-gray-100 rounded-lg"
                key={attribute.name}
              >
                <th>
                  <p>{attribute.name}</p>
                </th>
                <th>
                  <p>{attribute.values.join(" , ")}</p>
                </th>
                <th className="flex justify-center items-center gap-1">
                  <Image
                    src={trashIcon}
                    alt="trash-icon"
                    onClick={() => deleteAttributeHandler(attribute.name)}
                  />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AttributesList;
