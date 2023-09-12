import React from "react";
import Link from "next/link";
import Image from "next/image";

import { category } from "@/data/categories";

const Categories = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center h-56 gap-5 mt-8">
          <h2 className="text-[50px] font-bold text-[#CB0532]">
            Work Categories
          </h2>
          <span className="category-span"></span>
          <p className=" text-2xl text-[#434343]">
            We have served over 37+ industries and sector to build our niche
          </p>
        </div>
        <div className="flex flex-wrap">
          {category.map((item) => (
            <div className="w-full h-[340px] odd:border-r odd:border-b even:border-b border-[#d1cdcd] sm:w-1/2 lg:w-1/2 flex flex-col group category-card py-8 px-16 gap-2">
              {/* TEXT CONTAINER */}
              <h3 className=" w-[80%] text-[40px] text-[#CB0532] font-bold tracking-[-1px] category-card-h3">
                {item.title}
              </h3>
              <p className=" category-card-p">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
