import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full flex xs:mt-24 sm:mt-36  font-mons  mx-auto justify-between h-auto pb-14 xs:px-2 sm:px-10  " id="home">
      <div className="lg:w-[70%] lg:px-20">
        <h2 className="text-grey xs:text-xs sm:text-[16px] uppercase tracking-[0.3rem] font-mons font-medium mb-1   xs:text-center lg:text-left" >
          Welcome to Glint
        </h2>
        <h1 className="xs:text-center sm:text-left xs:text-[28px] sm:text-[36px] lg:text-[63px] text-[#FFFFFF] sm:leading-[1.333] font-mons font-bold tracking-[0.1rem]">
          We are a creative group <br className="xs:hidden sm:inline" />
          of people who design <br className="xs:hidden sm:inline"/>
          influential brands and <br className="xs:hidden sm:inline" />
          digital experiences.
        </h1>
        <div className="flex gap-x-3 mt-12 xs:flex-col sm:flex-row xs:gap-y-6 lg:gap-y-4 xs:justify-center xs:items-center lg:items-start lg:justify-normal">
          {" "}
          <button className="btn px-5 py-2 xs:w-[200px] lg:w-auto">Start a Project</button>
          <button className="btn px-5 py-2 xs:w-[200px] lg:w-auto">More About Us</button>
        </div>
      </div>
      <div className="xs:hidden sm:flex flex-col gap-y-4 justify-center w-auto flex-end ">
        <div className="icons">
          <FaFacebook className="" />
        </div>
        <div className="icons">
          {" "}
          <FaInstagram />{" "}
        </div>
        <div className="icons">
          <FaTwitter />{" "}
        </div>
        <div className="icons">
          {" "}
          <FaBehance />{" "}
        </div>
        <div className="icons">
          {" "}
          <FaDribbble />{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
