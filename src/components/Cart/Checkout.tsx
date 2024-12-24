"use client";
import { motion } from "framer-motion";
import { Checkout } from "@/lib/cart";
import { redirect } from "next/navigation";
import { useState } from "react";

interface Props {
  cartId: string | undefined;
}

export default function CheckoutTab({ cartId }: Props) {
  const [total, setTotal] = useState();
  const checkoutProceed = async () => {
    const x = await Checkout(cartId);
    console.log(x);
    setTotal(x.data.cart.totalPrice.amount);
    redirect(x.data.cart.checkoutUrl);
  };
  return (
    <>
      <div className="w-full box-border bg-white shadow-md rounded-md  p-4">
        <div className="mx-[10%] text-lg font-semibold mb-3">
          Total Bill: {total}
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
