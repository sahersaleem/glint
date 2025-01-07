"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaClosedCaptioning, FaXbox } from "react-icons/fa";
import Link from "next/link";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className=" flex justify-between py-6 px-10 items-center">
      <Image
        src={"/images/logo.png.webp"}
        width={100}
        height={100}
        alt="logo"
        className="w-[80px] h-[26px]"
      />
      <div
        className={`flex flex-col fixed z-40 right-0 transition all duration-200 ease-out`}
      >
        <div
          className={`flex justify-center items-center gap-x-4 bg-black ${
            isOpen ? "mr-0 hidden" : "mr-10 flex"
          } p-2 `}
        >
          <h1
            className={`font-mons text-[#39b54a]  capitalize font-bold leading-[41px] text-[14px] tracking-[4px] hover:text-white transition-all duration-200 ease-in xs:hidden sm:inline `}
          >
            MENU
          </h1>
          {isOpen ? (
            <FaX
              className="xs:text-lg sm:text-3xl text-white tracking-wider leading-10"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          ) : (
            <FaBars
              className="xs:text-2xl sm:text-3xl text-white tracking-wider leading-10"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          )}
        </div>

        <div
          className={`fixed top-0 right-0 h-full bg-[#0C0C0C] text-white z-40 transition-transform all duration-200 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } w-[300px] flex flex-col px-6 py-4  gap-y-4`}
        >
          <div className="flex justify-between text-[#39b54a] items-center">
            <h2 className="text-[11px] leading-[1.5rem] text-[#39b54a] tracking-[0.25rem] font-mons font-semibold uppercase">
              Navigation
            </h2>
            <FaX
              className="text-[11px]  "
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
          <nav className="flex flex-col mt-8 gap-y-5">
            <Link href={"#home"} className="link">
              Home
            </Link>
            <Link href={"/"} className="link">
              About
            </Link>
            <Link href={"/"} className="link">
              Services
            </Link>
            <Link href={"/"} className="link">
              Clients
            </Link>
            <Link href={"/"} className="link">
              Contact
            </Link>
            <Link href={"/"} className="link">
              Works
            </Link>
          </nav>
          <p className="text-xs text-grey text-[13px] leading-[1.846] tracking-widest">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            magni molestiae delectus illum nobis sapiente nisi harum totam. Quia
            repudiandae fugiat dicta reiciendis sunt et vel ab aut porro libero.
          </p>
          <div className="flex gap-x-3 text-grey ">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaDribbble />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
