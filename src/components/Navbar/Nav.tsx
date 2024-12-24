"use client";

import Link from "next/link";
import { categories } from "@/lib/data";
import { CiShoppingCart } from "react-icons/ci";
import { useCartContext } from "../Layout";
import { useSidebar } from "../ui/sidebar";
import { RiMenu2Fill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";

import { motion } from "framer-motion";

export default function Nav() {
  const { setIsCartOpen } = useCartContext();
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <nav className="flex w-[100vw] px-5 lg:pr-20 h-20 items-center text-white justify-between relative bg-gradient-to-r from-[#023235] via-[#016f63] to-[#023235]">
        <div className="flex items-center">
          <div className="block lg:hidden" onClick={toggleSidebar}>
            <RiMenu2Fill size={25} />
          </div>
          <Link href="/" className=" cursor-pointer">
            <img
              src="/AmprioMainNoBg.png"
              alt="Amprio"
              className=" w-52 lg:w-72"
            />
          </Link>
        </div>
        <nav className=" hidden w-full text-md h-10 lg:flex gap-10 items-center justify-center text-white">
          {categories.map((x) => (
            <div key={x.title} className="relative group h-full ">
              <div className="h-full flex items-center font-semibold uppercase tracking-widest">
                <Link href={x.href ? x.href : ""}>{x.title}</Link>
              </div>
              <div className="absolute z-20 group-hover:flex flex-col bg-[#016f63] hidden w-auto h-auto rounded-t-none shadow-sm rounded-md left-1/2 -translate-x-1/2">
                {x.subCategories?.map((y) => (
                  <Link
                    key={y.title}
                    href={y.href}
                    className=" text-zinc-100 whitespace-nowrap pr-10 hover:underline px-5 py-3 "
                  >
                    {y.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="flex gap-8 items-center">
          <Link href="https://www.youtube.com/@futurebrighthai" target="_blank">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <IoLogoYoutube size={25} />
            </motion.div>
          </Link>
          <motion.div
            onClick={() => setIsCartOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CiShoppingCart size={30} />
          </motion.div>
        </div>
      </nav>
      <div className="gold w-full h-2"></div>
    </>
  );
}
