"use client";

import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";
import List from "./List";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="flex px-5 sm:px-10 h-16 bg-[#013236] text-white items-center justify-between absolute w-full">
        <div className="absolute z-40" onClick={() => setMenu(!menu)}>
          {!menu && <RiMenu2Fill size={25} />}
          {menu && <RxCross2 size={25} />}
        </div>
        <div className=""></div>
        <Link href="/" className="h-full">
          <img src="/Logo.png" alt="Amprio" className="h-full" />
        </Link>
        <Link href="/cart">
          <CiShoppingCart size={30} />
        </Link>
      </nav>
      <div
        className={`${menu && " left-0 "} 
        ${
          !menu && "left-[-100vw] sm:left-[-24rem]"
        } absolute z-30 w-full sm:w-96 h-[100vh] bg-[#013236] text-white transition-all duration-100 }`}
      >
        <List />
      </div>
    </>
  );
}
