"use client";

import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";
import List from "./List";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <>
      <nav className="flex px-5 sm:px-10 h-16 bg-[#013236] text-white items-center justify-between absolute w-full">
        <div className="absolute z-40" onClick={() => toggle()}>
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
        className={`${
          menu &&
          "absolute z-30 w-full sm:w-96 h-[100vh] bg-[#013236] text-white left-0 transition-all duration-100"
        } ${
          !menu &&
          "absolute z-30 w-full sm:w-96 h-[100vh] bg-[#013236] text-white left-[-100vw] sm:left-[-24rem] transition-all duration-100"
        } }`}
      >
        <List />
      </div>
    </>
  );
}
