"use client";
import { RxCross2 } from "react-icons/rx";
import { useCartContext } from "../Layout";
import { AnimatePresence, motion } from "framer-motion";
import CartItem from "./CartItem";
import { CiShoppingCart } from "react-icons/ci";
import React from "react";
import CheckoutTab from "./Checkout";

const Sidebar = () => {
  const { isCartOpen, setIsCartOpen, cartId, optimisticData } =
    useCartContext();

  const toggleBtn = async () => {
    setIsCartOpen(false);
  };
  console.log(optimisticData);

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            key="cart"
            className="w-full sm:w-96 h-[100vh] top-0 right-0 fixed bg-slate-100 z-30 shadow-lg flex items-center flex-col overflow-scroll"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={toggleBtn}
              className="text-2xl m-5 mb-0 self-start"
            >
              <RxCross2 size={25} />
            </button>
            <h2 className="text-2xl font-medium p-5 mt-5 text-left w-full">
              Cart
            </h2>
            {optimisticData && optimisticData.length > 0 ? (
              <>
                <div className="flex justify-center flex-col gap-2 w-full p-4 ">
                  {optimisticData?.map((x: any) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -100 }}
                      key={x.node.id}
                    >
                      <CartItem
                        id={x.node.id}
                        cartLineId={x.node.cartLinesId}
                        name={x.node.merchandise.product.title}
                        variant={x.node.merchandise.title}
                        price={
                          x.node.merchandise.product.priceRange.minVariantPrice
                            .amount
                        }
                        quantity={x.node.quantity}
                        cartId={cartId}
                      ></CartItem>
                    </motion.div>
                  ))}
                  <CheckoutTab
                    cartId={cartId}
                    totalx={"data.node.cost.totalAmount.amount"}
                  />
                </div>
              </>
            ) : (
              <p className="flex justify-center gap-4 mt-20 text-zinc-500 text-xl font-medium">
                <CiShoppingCart size={30} color="gray" />
                Your cart is empty
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
