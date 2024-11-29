"use client";
import { AddToCart } from "@/lib/cart";

interface Props {
  cartId: any;
  merchandiseID: string;
  quantity: number;
}

export default function AddToCartBtn({
  cartId,
  merchandiseID,
  quantity,
}: Props) {
  const AddItem = async () => {
    const x = await AddToCart(cartId, merchandiseID, quantity);
    console.log(x);
    console.log(cartId);
    console.log(merchandiseID);
  };
  return (
    <>
      <button className="h-10 border border-black" onClick={AddItem}>
        Add to Cart
      </button>
    </>
  );
}
