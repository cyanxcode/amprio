"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <div className="w-full items-center flex px-5 h-auto flex-col lg:flex-row mt-10 gap-5">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          duration={{ duration: 2 }}
          viewport={{ once: true }}
          className="w-[90vw] lg:w-[65vw] grid place-content-center bg-black rounded-lg overflow-hidden"
        >
          <video
            src="https://cdn.shopify.com/videos/c/o/v/8a7e116608924d73aa530f92dff4830e.mp4"
            className="w-[100%]"
            autoPlay
            muted
            controls
            loop
          ></video>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          whileTap={{ scale: 0.98 }}
          duration={{ duration: 2 }}
          viewport={{ once: true }}
          className="bg-[#023235] w-[90vw] lg:w-[31vw] h-[36.5vw] rounded-lg hidden lg:grid place-content-center"
        >
          <img
            src="/AmprioNoBg.png"
            alt=""
            width="100%"
            height="100%"
            className="object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </>
  );
}
