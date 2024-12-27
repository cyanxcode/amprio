"use client";
import { AddToCart } from "@/lib/cart";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCartContext } from "../Layout";
import { useQuery, useQueryClient } from "react-query";

interface Props {
  cartId: any;
}

export default function AddToCartBtn({ cartId }: Props) {
  const [isInCart, setIsInCart] = useState(false);
  const { setIsCartOpen } = useCartContext();
  const [cartLoading, setCartLoading] = useState(false);

  const queryClient = useQueryClient();
  const { variant } = useCartContext();

  const { data } = useQuery(["cart"]);
  console.log(data);

  /*
  if (!isLoading && !isError) {
    const current = data.find(
      (x: any) => x.node.merchandise.id == merchandiseID
    ).node.merchandise.id;
    console.log(current);
  }*/

  const AddItem = async () => {
    setCartLoading(true);
    const x = await AddToCart(
      cartId,
      "gid://shopify/ProductVariant/" + variant,
      1
    );
    console.log(x);
    queryClient.invalidateQueries(["cart"]);
    setIsInCart(true);
    setCartLoading(false);
    setIsCartOpen(true);
  };

  return (
    <>
      {!isInCart ? (
        !cartLoading ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ rotate: "1deg", scale: 0.98 }}
            className="h-12 border font-semibold rounded-md text-white bg-[#013236]"
            onClick={AddItem}
          >
            Add to Cart
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="h-12 border font-semibold rounded-md text-white bg-[#013236]"
          >
            Loading...
          </motion.button>
        )
      ) : (
        <>
          <div className="w-full grid place-content-center border font-medium h-12 rounded-md border-[#013236]">
            Item already in cart.
          </div>
        </>
      )}
    </>
  );
}
