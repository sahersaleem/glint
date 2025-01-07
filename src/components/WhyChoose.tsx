import React from "react";
import { PiPaintBrushBroad } from "react-icons/pi";
import { FaRegObjectUngroup } from "react-icons/fa6";
import { RiMegaphoneLine } from "react-icons/ri";
import { IoEarthOutline } from "react-icons/io5";
import { PiCubeLight } from "react-icons/pi";
import { PiLegoLight } from "react-icons/pi";
import { IconType } from "react-icons";

interface IProps {
  heading: string;
  icons: IconType;
}

const Card = ({ heading, icons: Icon }: IProps) => {
  return (
    <div className="max-w-[500px] flex justify-center  gap-4 xs:flex-col lg:flex-row xs:items-center lg:items-start ">
      <div className="">
        <Icon size={70} className="text-[#39b54a]  " />
      </div>

      <div className="flex flex-col gap-y-3 xs:justify-center xs:items-center lg:items-start xs:px-5 lg:px-0">
        <h1 className="xs:text-[26px] lg:text-[30px] leading-5 font-mons font-semibold text-black">
          {heading}
        </h1>
        <p className="text-[#757575] xs:text-center lg:text-left xs:text-[14px] lg:text-[17px] font-lora tracking-wider leading-7 mt-3">
          Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
          ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
          veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
          ipsa in tempora esse soluta sint.
        </p>
      </div>
    </div>
  );
};

const WhyChoose = () => {
  return (
    <div
      id="whychoose"
      className="w-full h-auto bg-white flex items-center justify-center flex-col pb-20 "
    >
      <div className="border-b border-grey2 flex justify-center items-center flex-col   p-16   max-w-[65%] ">
        <h3 className="text-[17px]   uppercase text-[#39b54a] font-mons font-bold text-center ">
          What We Do
        </h3>
        <h1 className="xs:text-[28px] lg:text-[44px]  font-bold  font-mons text-[#000000] text-center tracking-wide -leading-5">
          We’ve got everything you need to <br className="xs:hidden sm:inline" /> launch and grow your business
        </h1>
      </div>

      <div className="flex flex-wrap gap-20 w-full justify-center items-center mt-20">
        <Card heading="Brand Identity" icons={PiPaintBrushBroad}/>
        <Card heading="Illustration" icons={FaRegObjectUngroup}/>
        <Card heading="Marketing" icons={RiMegaphoneLine}/>
        <Card heading="Web Design" icons={IoEarthOutline}/>
        <Card heading="Packaging Design" icons={PiCubeLight}/>
        <Card heading="Web Development" icons={PiLegoLight}/>
      </div>
    </div>
  );
};

export default WhyChoose;
