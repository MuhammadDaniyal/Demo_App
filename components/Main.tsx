import React from "react";
import Link from "next/link";

const Main = () => {
  return (
    <div className="main_div flex flex-col justify-center items-center h-screen text-white">
      <h2 className="main_h2">Website | App | Marketing</h2>
      <p className="main_p">
        An agency for startups & established business to become a brand
      </p>
      <Link href={"/"} className="main_link">
        Call us to discuss +1 8189370651
      </Link>
    </div>
  );
};

export default Main;
