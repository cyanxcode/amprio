import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createCart } from "./lib/cart";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next();
  try {
    const id = await createCart();
    const cartId = request.cookies.get("cartId");
    if (!cartId) {
      response.cookies.set("cartId", id.data.cartCreate.cart.id, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
    }
  } catch (error) {
    console.error("Error in middleware:", error);
  }
  return response;
}
