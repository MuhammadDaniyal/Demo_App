import React from "react";
import Image from "next/image";
import { ExpertiseData } from "@/data/expertise";

const Expertise = () => {
  return (
    <div className="expertise">
      <h2 className=" w-full text-white font-semibold text-center text-[35px] tracking-[1px] mb-4">
        Our expertise will make you stand out from the crowd
      </h2>
      <div className=" flex px-8 w-full justify-center items-center">
        {/* LEFT SIDE HEADING */}
        <div className="w-1/4 py-6 px-3 text-white h-[340px]">
          <h3 className=" text-[50px] font-bold">Expertise</h3>
          <p className=" text-[19px]">
            A single gateway to all your digital need
          </p>
        </div>
        {/* RIGHT SIDE CARDS */}
        <div className=" flex h-[340px] flex-col lg:flex-row gap-3 w-3/4 justify-center items-center">
          {ExpertiseData.map((experty,i) => (
            // {/* SINGLE CARD */}
            <div key={i} className=" relative flex-1 h-full bg-white expertise-card cursor-pointer">
              <Image
                src={experty.img!}
                alt={experty.img!}
                className="expertise-img"
                width={100}
                height={100}
              />
              <div className=" w-full h-full flex items-end relative overflow-hidden p-4">
                <h3 className=" text-[38px] text-[#CB0532] font-bold">
                  {experty.title}
                </h3>
                <div className="expertise-card-action p-4">
                  <h4 className=" text-white text-[38px] font-bold pt-12">
                    {experty.title}
                  </h4>
                  <p>{experty.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
