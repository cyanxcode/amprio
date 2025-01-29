"use client";
import { AddToCart } from "@/lib/cart";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCartContext } from "../Layout";
import { QueryClient } from "react-query";

interface Props {
  cartId: any;
  item: any;
  variants: any;
}

export default function AddToCartBtn({ cartId, item, variants }: Props) {
  const [isInCart, setIsInCart] = useState(false);
  const { setIsCartOpen, addOptimisticData, optimisticData } = useCartContext();

  const { variant } = useCartContext();

  const queryClient = new QueryClient();

  //const { data, isLoading, isError } = useQuery<any>(["cart"]);

  useEffect(() => {
    const current = optimisticData.find(
      (x: any) => x.node.id == "gid://shopify/ProductVariant/" + variant
    );
    setIsInCart(!!current);
  }, [variant, optimisticData]);

  const AddItem = async () => {
    const selectedVariant = variants.find(
      (x: any) => x.node.id == "gid://shopify/ProductVariant/" + variant
    );
    React.startTransition(() => {
      addOptimisticData({
        node: {
          ...item,
          id: "gid://shopify/ProductVariant/" + variant,
          cartLinesId: "",
          merchandise: {
            ...item.merchandise,
            title: selectedVariant.node.title,
            product: {
              ...item.merchandise.product,
              id: "gid://shopify/ProductVariant/" + variant,
              priceRange: {
                minVariantPrice: {
                  amount: selectedVariant.node.price.amount,
                },
              },
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
            id: "gid://shopify/ProductVariant/" + variant,
            quantity: 0,
          },
        });
      });
    } else {
      const cartLine = x.data.cartLinesAdd.cart.lines.edges[0].node.id;
      const cartLineMain = cartLine.split("?")[0];
      console.log(cartLineMain);
      React.startTransition(() => {
        addOptimisticData({
          node: {
            id: "gid://shopify/ProductVariant/" + variant,
            cartLinesId: cartLine,
            quantity: 1,
            merchandise: {
              title: selectedVariant.node.title,
              product: {
                id: "gid://shopify/ProductVariant/" + variant,
                title: item.merchandise.product.title,
                img: item.merchandise.img,
                priceRange: {
                  minVariantPrice: {
                    amount: selectedVariant.node.price.amount,
                  },
                },
              },
            },
          },
        });
      });
      console.log(x);
      queryClient.invalidateQueries(["cart"]);
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
