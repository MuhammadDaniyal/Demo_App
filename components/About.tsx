import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex h-screen flex-col lg:flex-row justify-between my-10 lg:my-20 lg:px-16 xl:px-32">
      {/* LEFT CONTAINER */}
      <div className="lg:w-[45%]">
        <h2 className="left-box-h2">
          <b>
            A creative
            <br /> brand development agency{" "}
          </b>
        </h2>
        <span className="left-box-span"></span>
      </div>
      {/* RIGHT CONTAINER */}
      <div className="lg:w-[55%] flex flex-col justify-around">
        <h2 className="right-box-h2">
          Helping companies,
          <br />
          to add value to their brand & express their emotions digitally.
        </h2>
        <p className="right-box-p">
          Our <strong>Brand</strong> is more than just another development
          company in the market. At{" "}
          <strong>
            <span className="text-red-600">365Softwares</span>
          </strong>{" "}
          we share a common set of passions to grow & make growth possible for
          others may it be <strong>entrepreneurs</strong> or well{" "}
          <strong>established business man</strong>. It’s a collective pursuit
          of our team which enables us to deliver not just{" "}
          <strong>business tools</strong> like{" "}
          <strong>
            <span className="text-red-600">website & app</span>
          </strong>{" "}
          but something unique which will surely set you apart from the
          traditional business & establish you as a <strong>BRAND</strong>. It’s
          a shared promise of unique <strong>experiences</strong> that will
          enrich the spirit and awaken the senses of our valued clients, showing
          them the potential of being a brand.
        </p>
        <Link href={"/"} className="about_link">
          Learn More About Our Technology
        </Link>
      </div>
    </div>
  );
};

export default About;
