"use client";
import { useQuery } from "react-query";
import Sidebar from "./Cart/Sidebar";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useOptimistic,
  useRef,
  useState,
} from "react";
import { getCart } from "@/lib/cart";
import Loading from "@/app/loading";

interface Props {
  children: ReactNode;
  cookie: any;
}

type CartItemType = {
  node: {
    id: string;
    merchandise: {
      product: {
        title: string;
        priceRange: {
          minVariantPrice: {
            amount: string;
          };
        };
      };
      title: string;
    };
    quantity: number;
  };
};

//type for cart state
type CartState = {
  isCartOpen: boolean;
  cartId: any;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant: string | undefined;
  setVariant: React.Dispatch<React.SetStateAction<string | undefined>>;
  optimisticData: any;
  addOptimisticData: any;
};
//create context for cart
const cartContext = createContext<CartState | null>(null);

export default function Layout({ children, cookie }: Props) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartId, setCartId] = useState<string | undefined>("");
  const [variant, setVariant] = useState<string | undefined>("");

  const { data, isLoading } = useQuery({
    queryKey: "cart",
    queryFn: async () => {
      const { data } = await getCart(cartId);
      return data && data.cart.lines.edges;
    },
    enabled: cartId !== undefined,
  });
  const initialOptimisticData = useRef<CartItemType[]>([]);
  const [optimisticData, addOptimisticData] = useOptimistic<
    CartItemType[],
    CartItemType
  >(initialOptimisticData.current, (state, newData: any) => {
    const exists = state.find((item) => item.node.id === newData.node.id);
    if (exists) {
      return state
        .map((item) =>
          item.node.id === newData.node.id
            ? {
                ...item,
                node: { ...item.node, quantity: newData.node.quantity },
              }
            : item
        )
        .filter((item) => item.node.quantity > 0);
    }
    return [...state, newData];
  });

  useEffect(() => {
    if (data && !isLoading) {
      initialOptimisticData.current = data;
      console.log(data);
    }
  }, [data, isLoading]);
  useEffect(() => {
    initialOptimisticData.current = optimisticData;
  }, [optimisticData]);
  useEffect(() => {
    if (cookie?.value && cartId == cookie.value) {
      setCartId(cookie.value);
    }
  }, [cookie]);

  if (cartId === undefined) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <cartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartId,
        variant,
        setVariant,
        optimisticData,
        addOptimisticData,
      }}
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
