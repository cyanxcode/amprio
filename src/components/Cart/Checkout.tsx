"use client";
import { motion } from "framer-motion";
import { Checkout } from "@/lib/cart";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useCartContext } from "../Layout";

interface Props {
  cartId: string | undefined;
}

export default function CheckoutTab({ cartId }: Props) {
  const { optimisticData } = useCartContext();
  const [url, setUrl] = useState("https://www.google.com");
  const subTotal = optimisticData.reduce((acc, item) => {
    return (
      acc +
      item.node.quantity *
        Number(item.node.merchandise.product.priceRange.minVariantPrice.amount)
    );
  }, 0);
  const tax = Math.round((subTotal * 18) / 100);

  useEffect(() => {
    if (cartId === undefined) {
      console.log("Cart ID is undefined");
      return;
    }
    const fetchCheckoutUrl = async () => {
      const x = await Checkout(cartId);
      console.log(x);
      setUrl(x.data.cart.checkoutUrl);
    };
    fetchCheckoutUrl();
  }, [optimisticData, cartId]);
  const checkoutProceed = async () => {
    redirect(url);
  };
  return (
    <>
      <div className="w-full box-border bg-white shadow-md rounded-md  p-4">
        <div className="mx-[10%] text-md font-medium mb-3 flex flex-col text-zinc-600">
          <div className="flex justify-between">
            Subtotal: <div className="">₹ {subTotal}</div>
          </div>
          <div className="flex justify-between">
            Taxes: <div className="">₹ {tax}</div>
          </div>
          <div className="flex justify-between">
            Total Bill: <div className="">₹ {Math.round(tax + subTotal)}</div>
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
