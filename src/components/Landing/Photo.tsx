"use client";

import { motion } from "framer-motion";

interface Props {
  time: number;
}

export default function Photo({ time }: Props) {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { delay: time, duration: 0.7 } }}
        className={`absolute top-[-10rem] left-[-10rem] z-40 w-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md`}
      >
        <motion.div
          initial={{ scale: 2 }}
          animate={{ scale: 1, transition: { delay: time, duration: 1 } }}
        >
          <img
            src="/Chandelier2.jpg"
            alt="img"
            className={`w-full rounded-md`}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
