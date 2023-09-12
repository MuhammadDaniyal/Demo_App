"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About Agency", url: "/" },
  { id: 3, title: "Branding", url: "/" },
  { id: 4, title: "Development", url: "/" },
  { id: 5, title: "Marketing", url: "/" },
  { id: 4, title: "Our Blogs", url: "/" },
  { id: 4, title: "Our Works", url: "/" },
  { id: 4, title: "Partnership", url: "/" },
  { id: 4, title: "Contact Us", url: "/" },
];

const Navbar = () => {
  const [isVisible, setVisible] = useState(false);
  const [OpenMenu, setOpenMenu] = useState(false);

  const listenToScroll = () => {
    let heightScroll = 500; // apko kb ussy display krana woh value
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop; // ap kitna scroll krchuky woh btaega
    if (windowScroll > heightScroll) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // yeh bar bar check krrha hy ap web py kitna scroll kya ho
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll); // yh listen krega
    return () => window.removeEventListener("scroll", listenToScroll); // yhn py forn apki app sy scroll data dlt krdega issy load nh brhga apki app py warna bar bar scroll ky data load pr ky hang hoskta
  }, []);
  return (
    <nav
      className={`fixed w-full h-20 flex justify-between items-center pt-4 pb-2 lg:px-16 xl:px-32 z-[9999] 
    ${isVisible ? "header-nav scroll-header" : "header-nav "}`}
    >
      <div className=" relative w-[7.5rem] h-12 cursor-pointer">
        <Image
          src={`${isVisible ? "/logo-red.png" : "/logo-white.png"}`}
          alt="aaa"
          fill
        />
      </div>
      <CgMenuLeft
        className={`cursor-pointer ${
          isVisible ? "nav_open_icon_red" : "nav_open_icon"
        }`}
        onClick={() => setOpenMenu(true)}
      />
      {/* SIDEBAR */}
      <div className={` h-screen menu ${OpenMenu ? "" : "hidden"}`}>
        {/* SIDEBAR ALAG COMPONENT */}
        <div className=" flex flex-col gap-6">
          {/* ICON */}
          <div className=" flex justify-end">
            <AiOutlineClose
              className={"nav_close_icon cursor-pointer"}
              onClick={() => setOpenMenu(false)}
            />
          </div>
          {/* MENU */}
          <div className=" flex flex-col text-[21px] font-semibold text-white gap-[10px] side_links">
            {links.map((item) => (
              <Link
                className="side_bar_a"
                href={item.url}
                key={item.id}
                onClick={() => setOpenMenu(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Link
            href={"/"}
            className="side_bar_btn"
            onClick={() => setOpenMenu(false)}
          >
            LET'S CONNECT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
