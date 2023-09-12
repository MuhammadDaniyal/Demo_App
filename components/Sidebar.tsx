import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Sidebar = () => {
  return (
    <div className=" flex flex-col gap-6">
      {/* ICON */}
      <div className=" flex justify-end">
        <AiOutlineClose className={"nav_close_icon cursor-pointer"} />
      </div>
      {/* MENU */}
      <div className=" flex flex-col text-[21px] font-semibold text-white gap-2">
        {links.map((item) => (
          <Link href={item.url} key={item.id}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
