"use client";
import { AddToCart } from "@/lib/cart";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCartContext } from "../Layout";

interface Props {
  cartId: any;
  item: any;
  variants: any;
}

export default function AddToCartBtn({ cartId, item, variants }: Props) {
  const [isInCart, setIsInCart] = useState(false);
  const { setIsCartOpen, addOptimisticData, optimisticData } = useCartContext();

  const { variant } = useCartContext();

  //const { data, isLoading, isError } = useQuery<any>(["cart"]);

  useEffect(() => {
    const current = optimisticData.find(
      (x: any) => x.node.id == "gid://shopify/ProductVariant/" + variant
    );
    setIsInCart(!!current);
  }, [variant, optimisticData]);

  const AddItem = async () => {
    React.startTransition(() => {
      addOptimisticData({
        node: {
          ...item,
          id: "gid://shopify/ProductVariant/" + variant,
          cartLinesId: "",
          merchandise: {
            ...item.merchandise,
            title: variants.find(
              (x: any) => x.node.id == "gid://shopify/ProductVariant/" + variant
            ).node.title,
            product: {
              ...item.merchandise.product,
              id: "gid://shopify/ProductVariant/" + variant,
            },
          },
        },
      });
    });
    setIsInCart(true);
    setIsCartOpen(true);
    const x = await AddToCart(
      cartId,
      "gid://shopify/ProductVariant/" + variant,
      1
    );
    if (!x.data.cartLinesAdd) {
      setIsInCart(false);
      React.startTransition(() => {
        addOptimisticData({
          node: {
            id: item.id,

            quantity: 0,
            merchandise: {
              id: "",
              title: "",
              product: {
                title: "",
                priceRange: { minVariantPrice: { amount: 0 } },
              },
            },
          },
        });
      });
    } else {
      const cartLine = x.data.cartLinesAdd.cart.lines.edges[0].node.id;
      React.startTransition(() => {
        addOptimisticData({
          node: {
            id: item.id,
            cartLinesId: cartLine,
            quantity: 1,
            merchandise: {
              id: item.id,
              img: item.merchandise.product.img,
              title: variants.find(
                (x: any) =>
                  x.node.id == "gid://shopify/ProductVariant/" + variant
              ).node.title,
              product: {
                title: item.merchandise.product.title,
                priceRange: {
                  minVariantPrice: {
                    amount:
                      item.merchandise.product.priceRange.minVariantPrice
                        .amount,
                  },
                },
              },
            },
          },
        });
      });
      console.log(x);
      //queryClient.invalidateQueries(["cart"]);
    }
  };

  return (
    <>
      {!isInCart ? (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ rotate: "1deg", scale: 0.98 }}
          className="h-12 border font-semibold rounded-md text-white bg-[#013236]"
          onClick={AddItem}
        >
          Add to Cart
        </motion.button>
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
