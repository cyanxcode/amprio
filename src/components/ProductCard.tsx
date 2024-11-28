"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  gid: number;
  title: string;
  price?: number;
  maxPrice?: number;
  imageURL?: string;
  imgAlt?: string;
}

export default function ProductCard({
  gid,
  title,
  price,
  maxPrice,
  imageURL,
  imgAlt,
}: Props) {
  return (
    <>
      <Link href={`/product/${gid}`}>
        <div className="w-full flex flex-col gap-3 cursor-pointer hover:bg-zinc-50 p-2 pb-4 ease-in-out duration-150 group">
          <div className="w-full aspect-square object-cover rounded-md overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.15 }}
            >
              <img
                src={imageURL}
                alt={imgAlt?.toString()}
                className="w-full aspect-square object-cover rounded-md "
              />
            </motion.div>
          </div>
          <div className="">
            <div className="">
              <h3 className="text-nowrap overflow-hidden text-sm sm:text-md uppercase tracking-wider group-hover:underline">
                {title}
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-sm sm:text-md ">
              <p>Rs {Number(price).toFixed(2)}</p>
              <p className="text-zinc-700 font-normal text-xs sm:text-sm line-through italic">
                Rs {Number(maxPrice).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
