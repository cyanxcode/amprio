import { cookies } from "next/headers";
import { createCart } from "@/lib/cart";

export async function initalizeCart() {
  const id = await createCart();
  const cookieStore = await cookies();
  const cartId = cookieStore.get("cartID");

  if (!cartId) {
    cookieStore.set("cartID", id.data.cartCreate.cart.id, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  }
  return 0;
}
