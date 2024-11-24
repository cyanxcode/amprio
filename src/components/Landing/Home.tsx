"use client";

import { motion } from "framer-motion";
import Photo from "./Photo";

export default function Landing() {
  return (
    <>
      <motion.div
        className="fixed z-40 w-[100vw] h-[100vh] bg-[#013236] top-0 "
        animate={{ y: "-100%", transition: { delay: 4, duration: 1 } }}
      >
        <div className="relative top-[50%] left-[50%]">
          <div className="absolute">
            <Photo time={0.5} width="10rem" />
          </div>
          <div className="absolute left-56 top-40">
            <Photo time={0.8} width="10rem" />
          </div>
          <div className="absolute left-[-9rem] top-[16rem]">
            <Photo time={1.2} width="10rem" />
          </div>
          <div className="absolute left-[-17rem] top-[4rem]">
            <Photo time={1.5} width="10rem" />
          </div>
          <div className="absolute left-[-4rem] top-[-12rem]">
            <Photo time={1.8} width="10rem" />
          </div>
          <div className="absolute left-64 top-[-12rem]">
            <Photo time={2.1} width="10rem" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
