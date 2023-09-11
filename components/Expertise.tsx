import React from "react";
import Image from "next/image";
/**
 * 
  SINGLE CARD 
 <div className=" relative flex items-end flex-1 h-full bg-white expertise-card p-4">
 <Image
   src={"/3.jpeg"}
   alt="3.jpeg"
   className="expertise-img"
   width={100}
   height={100}
 />
 <div className=" w-full">
   <h3 className=" text-[36px] text-[#CB0532] font-bold">
     Marketing
   </h3>
 </div>
</div>
 */

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
        <div className=" flex h-[340px] gap-3 w-3/4 justify-center items-center">
          {/* SINGLE CARD */}
          <div className=" relative flex-1 h-full bg-white expertise-card">
            <Image
              src={"/1.jpeg"}
              alt="1.jpeg"
              className="expertise-img"
              width={100}
              height={100}
            />
            <div className=" w-full h-full flex items-end relative overflow-hidden p-4">
              <h3 className=" text-[38px] text-[#CB0532] font-bold">
                Branding
              </h3>
              <div className="expertise-card-action p-4">
                <h4 className=" text-white text-[38px] font-bold pt-12">
                  Branding
                </h4>
                <p>
                  At the heart of your marketing is your BRAND, which includes
                  BRAND IDENTITY & PLANNING, LOGO DESIGN, Brand Stationery &
                  Merchandise, Public Relation strategy etc
                </p>
              </div>
            </div>
          </div>
          {/* SINGLE CARD */}
          <div className=" relative flex-1 h-full bg-white expertise-card">
            <Image
              src={"/2.jpeg"}
              alt="2.jpeg"
              className="expertise-img"
              width={100}
              height={100}
            />
            <div className=" w-full h-full flex items-end relative overflow-hidden p-4">
              <h3 className=" text-[38px] text-[#CB0532] font-bold">
                Development
              </h3>
              <div className="expertise-card-action p-4">
                <h4 className=" text-white text-[38px] font-bold pt-12">
                  Development
                </h4>
                <p>
                  Our years of expertise in developing WEBSITE, APP & CRM have
                  helped us to deliver these business tools in a way which is
                  both user friendly & consumer driving
                </p>
              </div>
            </div>
          </div>
          {/* SINGLE CARD */}
          <div className=" relative flex-1 h-full bg-white expertise-card">
            <Image
              src={"/3.jpeg"}
              alt="3.jpeg"
              className="expertise-img"
              width={100}
              height={100}
            />
            <div className=" w-full h-full flex items-end relative overflow-hidden p-4">
              <h3 className=" text-[38px] text-[#CB0532] font-bold">
                Marketing
              </h3>
              <div className="expertise-card-action p-4">
                <h4 className=" text-white text-[38px] font-bold pt-12">
                  Marketing
                </h4>
                <p>
                  We help you gain more organic traffic by placing you on top of
                  the search engine optimization game & popularising your brand
                  through right marketing strategy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
