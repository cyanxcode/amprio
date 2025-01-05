"use client";
import { motion, AnimatePresence } from "framer-motion";
import { removeFromCart, updateCart } from "@/lib/cart";
import { useQueryClient } from "react-query";

import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useCartContext } from "../Layout";
import React, { useRef } from "react";

interface Props {
  id: any;
  cartLinesId: any;
  img: string;
  name: string;
  variant: string;
  price: BigInteger;
  quantity: number;
  cartId: any;
}

export default function CartItem({
  id,
  cartLinesId,
  img,
  name,
  variant,
  price,
  quantity,
  cartId,
}: Props) {
  const { addOptimisticData } = useCartContext();
  const prevQuantityRef = useRef(quantity);
  const queryClient = useQueryClient();
  const removeItem = async () => {
    React.startTransition(() => {
      addOptimisticData({
        node: {
          id: id,
          cartLinesId: cartLinesId,
          quantity: 0,
          merchandise: {
            id: id,
            title: variant,
            product: {
              id: id,
              title: name,
              img: img,
              priceRange: { minVariantPrice: { amount: price } },
            },
          },
        },
      });
    });
    const x = await removeFromCart(cartId, cartLinesId);
    if (!x.data) {
      React.startTransition(() => {
        addOptimisticData({
          node: {
            id: id,
            cartLinesId: cartLinesId,
            quantity: prevQuantityRef.current,
            merchandise: {
              title: variant,
              product: {
                title: name,
                img: img,
                priceRange: { minVariantPrice: { amount: price } },
              },
            },
          },
        });
      });
    }
    console.log(x);
  };

  //add quantity
  const addQuantity = async () => {
    React.startTransition(() => {
      addOptimisticData({
        node: {
          id: id,
          cartLinesId: cartLinesId,
          quantity: quantity + 1,
          merchandise: {
            title: variant,
            product: {
              title: name,
              img: img,
              priceRange: { minVariantPrice: { amount: price } },
            },
          },
        },
      });
    });
    const x = await updateCart(cartId, cartLinesId, quantity + 1);
    if (x.errors) {
      React.startTransition(() => {
        addOptimisticData({
          node: {
            id: id,
            cartLinesId: cartLinesId,
            quantity: prevQuantityRef.current,
            merchandise: {
              title: variant,
              product: {
                title: name,
                img: img,
                priceRange: { minVariantPrice: { amount: price } },
              },
            },
          },
        });
      });
    }
    console.log(x);
    queryClient.invalidateQueries(["cart"]);
  };
  const subtractQuantity = async () => {
    React.startTransition(() => {
      addOptimisticData({
        node: {
          id: id,
          cartLinesId: cartLinesId,
          quantity: quantity - 1,
          merchandise: {
            title: variant,
            product: {
              title: name,
              img: img,
              priceRange: { minVariantPrice: { amount: price } },
            },
          },
        },
      });
    });
    const x = await updateCart(cartId, cartLinesId, quantity - 1);
    if (x.errors) {
      React.startTransition(() => {
        addOptimisticData({
          node: {
            id: id,
            cartLinesId: cartLinesId,
            quantity: prevQuantityRef.current,
            merchandise: {
              title: variant,
              product: {
                title: name,
                img: img,
                priceRange: { minVariantPrice: { amount: price } },
              },
            },
          },
        });
      });
    }
    console.log(x);
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
            <div className="w-24 aspect-square rounde-sm overflow-hidden">
              <img src={img} className="w-24" />
            </div>
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
