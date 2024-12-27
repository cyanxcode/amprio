"use client";
import Sidebar from "./Cart/Sidebar";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children: ReactNode;
  cookie: any;
}

//type for cart state
type CartState = {
  isCartOpen: boolean;
  cartId: any;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant: string | undefined;
  setVariant: React.Dispatch<React.SetStateAction<string | undefined>>;
};
//create context for cart
const cartContext = createContext<CartState | null>(null);

export default function Layout({ children, cookie }: Props) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartId, setCartId] = useState<string | undefined>("");
  const [variant, setVariant] = useState<string | undefined>("");

  useEffect(() => {
    setCartId(cookie.value);
  }, [cookie, cartId]);

  return (
    <cartContext.Provider
      value={{ isCartOpen, setIsCartOpen, cartId, variant, setVariant }}
    >
      <div className="flex">
        <Sidebar />
        <main className="flex-grow">{children}</main>
      </div>
    </cartContext.Provider>
  );
}

//custom hook for cart toggle
export function useCartContext() {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCartContext must be used within Layout Component");
  }
  return context;
}
