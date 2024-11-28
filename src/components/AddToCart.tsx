"use client";
import { AddToCart } from "@/lib/cart";

interface Props {
  cookie: string;
  variantID: string;
  quantity: number;
}

export default function AddToCartBtn({ cookie, variantID, quantity }: Props) {
  const AddItem = async () => {
    const x = await AddToCart(cookie, variantID, quantity);
    console.log(x);
    console.log(cookie);
  };
  return (
    <>
      <button className="h-10 border border-black" onClick={AddItem}>
        Add to Cart
      </button>
    </>
  );
}
