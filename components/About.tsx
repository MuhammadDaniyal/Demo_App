import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center  pt-10 lg:pt-20 pb-10 lg:pb-20 mx-2 lg:mx-10">
      {" "}
      {/* Added mx-2 and lg:mx-0 for margin on small screens */}
      <div className="lg:w-1/2 p-4">
        {" "}
        {/* Updated w-1/2 to lg:w-1/2 and added p-4 */}
        <h2 className="left-box-h2">
          <b>
            A creative
            <br /> brand development agency{" "}
          </b>
        </h2>
        <span className="left-box-span"></span>
      </div>
      <div className="lg:w-1/2 p-4">
        {" "}
        {/* Updated w-2/3 to lg:w-1/2 and added p-4 */}
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
