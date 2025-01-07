import Image from "next/image";
import React from "react";

const RecentWorks = () => {
  return (
    <div className="w-full h-auto  bg-white ">
      <div className="w-full  bg-gradient-to-b from-black to-white flex flex-col justify-center items-center pb-10">
        {" "}
        <div className=" flex justify-center items-center flex-col xs:p-5  lg:p-16   max-w-[65%] ">
          <h3 className="xs:text-[14px] lg:text-[17px]   uppercase text-[#39b54a] font-mons font-bold text-center ">
            Recent Works
          </h3>
          <h1 className="xs:text-[28px] lg:text-[44px]  font-bold  font-mons text-white text-center tracking-wide -leading-5">
            We love what we do, check out <br className="xs:hidden sm:inline" />
            some of our latest works
          </h1>
        </div>
        <div className="flex xs:flex-col lg:flex-row">
            <div>
            <Image src={'/images/lady-shutterbug.jpg.webp'} alt="text" width={560} height={500} className="lg:w-[560px] xs:w-[300px]"/>
            <Image src={'/images/guitarist.jpg.webp'} alt="text" width={560} height={500} className="lg:w-[560px] xs:w-[300px]"/>
            <Image src={'/images/the-beetle.jpg.webp'} alt="text" width={560} height={500} className="lg:w-[560px] xs:w-[300px]"/>
            </div>
            <div>
           
            <Image src={'/images/grow-green.jpg.webp'} alt="text" width={500} height={600} className="lg:h-[600px] lg:w-[500px] xs:w-[300px]"/>
            <Image src={'/images/woodcraft.jpg.webp'} alt="text" width={500} height={600} className="lg:h-[600px] lg:w-[500px] xs:w-[300px]"/>
            <Image src={'/images/palmeira.jpg.webp'} alt="text" width={500} height={600} className="lg:h-[620px] lg:w-[500px] xs:w-[300px]"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
