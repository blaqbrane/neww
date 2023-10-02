"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../assets/Layer2.png";
import Link from "next/link";
import { signIn, signOut,useSession, getProviders } from 'next-auth/react'
import { useState } from "react";
const Navbar = () => {
  const isLoggedIn = false;
  const [show, setShow] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const Provider = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    Provider()
  },[])
  return (
    <header className="px-6 md:px-40 flex py-8 justify-between items-center">
      <Link href="/"  className="font-bold text-xl xl:text-2xl"> 
          <Image src={logo} alt="logo" className="w-32 md:w-36 xl:w-48" />
      </Link>
      <div className="flex items-center gap-2 xl:gap-3">
        {
          isLoggedIn ? <div className="flex items-center gap-3">
            <h1>User</h1>
            <button onClick={signOut} className="hidden outline-none md:block px-10 py-2 xl:px-20 xl:text-2xl xl:py-4 rounded-[10px] bg-gradient-to-r from-[#fd0000] to-[orange] hover:opacity-50 transition ease-in duration-500">
          Sign out
        </button>
          </div> :
          <div className="flex items-center gap-2">
            {
              providers && Object.values(providers).map((provider) => (
                <button 
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="hidden outline-none md:block px-10 xl:px-20 xl:text-2xl xl:py-4  border border-white rounded-[8px] py-2 ">
                Sign in
               </button>
              ))
            }
         
        <button className="hidden outline-none md:block px-10 py-2 xl:px-20 xl:text-2xl xl:py-4 rounded-[10px] bg-gradient-to-r from-[#fd0000] to-[orange] hover:opacity-50 transition ease-in duration-500">
          Sign up
        </button>
          </div>
        }
        
        <div
          onClick={() => setShow(!show)}
          className="px-3 py-3 xl:px-6 xl:py-5 bg-[#575555] rounded-[10px] grid grid-cols-2 gap-2"
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
    </header>
  );
};

export default Navbar;
