"use client";
import { AddToCart } from "@/lib/cart";

interface Props {
  cookie: string;
}

export default function AddToCartBtn({ cookie }: Props) {
  const AddItem = async () => {
    //AddToCart();
  };
  return (
    <>
      <button className="h-10 border border-black" onClick={AddItem}>
        Add to Cart
      </button>
    </>
  );
}
