"use client";
import { motion } from "framer-motion";
import { Checkout } from "@/lib/cart";
import { useState } from "react";
import { redirect } from "next/navigation";

interface Props {
  cartId: string | undefined;
  totalx: any;
}

export default function CheckoutTab({ cartId, totalx }: Props) {
  const [url, setUrl] = useState("");
  const total = totalx;
  const getTotal = async () => {
    const x = await Checkout(cartId);
    console.log("Total");
    setUrl(x.data.cart.checkoutUrl);
    console.log(x);
  };
  getTotal();
  const checkoutProceed = async () => {
    console.log("Checkout Proceed");
    redirect(url);
  };
  return (
    <>
      <div className="w-full box-border bg-white shadow-md rounded-md  p-4">
        <div className="mx-[10%] text-md font-medium mb-3 flex flex-col text-zinc-600">
          <div className="flex justify-between">
            Subtotal: <div className="">Rs {total}</div>
          </div>
          <div className="flex justify-between">
            Taxes: <div className="">Rs {total}</div>
          </div>
          <div className="flex justify-between">
            Total Bill: <div className="">Rs {total}</div>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
          className="w-[80%] mx-[10%] h-12 bg-[#013236] text-white font-medium rounded-lg"
          onClick={checkoutProceed}
        >
          Checkout
        </motion.button>
      </div>
    </>
  );
}
