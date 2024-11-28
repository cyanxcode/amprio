import { cookies } from "next/headers";
import { getCart } from "@/lib/cart";

export default async function Cart() {
  const cookieStore = await cookies();
  const cartId = cookieStore.get("cartID");
  console.log(cartId?.value);
  const x = await getCart(cartId?.value);
  console.log(x);
  return <>Cart</>;
}
