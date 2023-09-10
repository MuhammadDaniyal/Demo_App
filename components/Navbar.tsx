import Image from "next/image";
import React from "react";
import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className=" fixed w-full h-32 flex justify-between items-center lg:px-16 xl:px-32">
      <div className=" relative w-[7.5rem] h-14">
        <Image src={"/logo-white.png"} alt="" fill />
      </div>
      <CgMenuLeft className={"nav_open_icon"} />
    </nav>
  );
};

export default Navbar;
