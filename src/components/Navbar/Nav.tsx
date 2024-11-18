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
      <nav className="flex px-5 sm:px-10 h-16 items-center justify-between relative w-full">
        <div className="absolute z-40" onClick={() => setMenu(!menu)}>
          {!menu && <RiMenu2Fill size={25} />}
        </div>
        <div className=""></div>
        <Link href="/" className="h-full">
          <img src="/AmprioWhite.jpg" alt="Amprio" className="h-full" />
        </Link>
        <Link href="/cart">
          <CiShoppingCart size={30} />
        </Link>
      </nav>
      <div
        className={`
          ${menu && " left-0 border-r border-zinc-400"}
          ${!menu && " left-[-100vw] sm:left-[-24rem]"}
           fixed z-30 w-full sm:w-96 h-[100vh] top-0 transition-all duration-100 bg-white }`}
      >
        <div
          className="absolute z-40 mt-5 ml-5 sm:ml-10"
          onClick={() => setMenu(!menu)}
        >
          {menu && <RxCross2 size={25} />}
        </div>
        <List />
      </div>
    </>
  );
}
