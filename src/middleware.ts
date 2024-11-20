"use server";

import { NextRequest, NextResponse } from "next/server";
import { createCart } from "@/lib/cart";

export async function middleware(request: NextRequest) {
  const existingCookie = request.cookies.get("cartID");
  if (!existingCookie) {
    const id = await createCart();
    const response = NextResponse.next();
    response.cookies.set("cartID", id.data.cartCreate.cart.id);
    const cookie = response.cookies.get("cartID");
    console.log(cookie);
  }

  return NextResponse.next();
}
