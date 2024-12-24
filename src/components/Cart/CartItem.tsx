"use client";
import { motion, AnimatePresence } from "framer-motion";
import { removeFromCart, updateCart } from "@/lib/cart";
import { useQueryClient } from "react-query";

import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

interface Props {
  id: any;
  name: string;
  variant: string;
  price: BigInteger;
  quantity: number;
  cartId: any;
}

export default function CartItem({
  id,
  name,
  variant,
  price,
  quantity,
  cartId,
}: Props) {
  const queryClient = useQueryClient();
  const removeItem = async () => {
    const x = await removeFromCart(cartId, id);
    console.log(x);
    queryClient.invalidateQueries(["cart"]);
  };
  const addQuantity = async () => {
    const x = await updateCart(cartId, id, quantity + 1);
    console.log(x);
    queryClient.invalidateQueries(["cart"]);
  };
  const subtractQuantity = async () => {
    const x = await updateCart(cartId, id, quantity - 1);
    console.log(x);
    queryClient.invalidateQueries(["cart"]);
  };
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: "-100%" }}
          className="w-full bg-white shadow-md rounded-lg p-2 cursor-default"
          key={id}
        >
          <div className="flex justify-between ">
            <div className=" w-24 h-24 bg-black border border-black aspect-square rounded-sm"></div>
            <div className="w-full flex-col flex justify-between ">
              <div className="">
                <div className="flex justify-between">
                  <h2 className="font-medium text-wrap ml-2 ">{name}</h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full hover:text-red-600 border aspect-square p-1"
                    onClick={removeItem}
                  >
                    <RxCross2 size={14} />
                  </motion.button>
                </div>
                <h3 className="font-medium text-zinc-800 ml-2">Rs {price}</h3>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center ml-2 text-zinc-500">
                    <button onClick={subtractQuantity}>
                      <CiSquareMinus size={32} />
                    </button>
                    <h3>{quantity}</h3>
                    <button onClick={addQuantity}>
                      <CiSquarePlus size={32} />
                    </button>
                  </div>
                  <h3 className="font-medium text-zinc-800">{variant}</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
