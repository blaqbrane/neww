"use client";
import React from "react";
import Image from "next/image";
import drain from "../assets/Layer2.png";

import { useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="px-6 md:px-40 flex py-8 justify-between items-center">
      <a href="/">
        <h1 className="font-bold text-xl">
          <Image src={drain} alt="" className="w-32 md:w-auto" />
        </h1>
      </a>
      <div className="flex gap-2">
        <button className="hidden md:block px-10 border border-white rounded-[8px] py-2 ">
          Sign in
        </button>
        <button className="hidden md:block px-10 py-2 rounded-[10px] bg-gradient-to-r from-[#fd0000] to-[orange]">
          Sign up
        </button>
        <div
          onClick={() => setShow(!show)}
          className="px-3 py-3 bg-[#575555] rounded-[10px] grid grid-cols-2 gap-2"
        >
          <button className="bg-white w-[6px] h-[6px] rounded-full"></button>
          <button className="bg-white w-[6px] h-[6px] rounded-full"></button>
          <button className="bg-white w-[6px] h-[6px] rounded-full"></button>
          <button className="bg-white w-[6px] h-[6px] rounded-full"></button>
        </div>
        {show && (
          <div className="block md:hidden fixed top-0 left-0 z-10 w-[60%] bg-black shadow-md shadow-[gray] ">
            <div className="flex gap-2">
              <button className="hidden md:block px-10 border border-white rounded-[8px] py-2 ">
                Sign in
              </button>
              <button className="hidden md:block px-10 py-2 rounded-[10px] bg-gradient-to-r from-[#fd0000] to-[orange]">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
