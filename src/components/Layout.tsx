"use client";
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
    cartLinesId: string;
  };
};

//type for cart state
type CartState = {
  isCartOpen: boolean;
  cartId: any;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant: string | undefined;
  setVariant: React.Dispatch<React.SetStateAction<string | undefined>>;
  optimisticData: CartItemType[];
  addOptimisticData: any;
};
//create context for cart
const cartContext = createContext<CartState | null>(null);

export default function Layout({ children, cookie }: Props) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartId, setCartId] = useState<string | undefined>();
  const [variant, setVariant] = useState<string | undefined>("");
  /*
  const { data, isLoading } = useQuery({
    queryKey: "cart",
    queryFn: async () => {
      const { data } = await getCart(cartId);
      localStorage.setItem("optimisticData", data.cart.lines.edges);
      console.log("set");
      console.log(data);
      return data != undefined && data.cart.lines.edges;
    },
    enabled: cartId !== undefined,
  });
  */
  const initialOptimisticData = useRef<CartItemType[]>(
    typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("optimisticData") || "[]")
  );
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
                node: {
                  ...item.node,
                  cartLinesId: newData.node.cartLinesId,
                  quantity: newData.node.quantity,
                },
              }
            : item
        )
        .filter((item) => item.node.quantity > 0);
    }
    return [...state, newData];
  });

  /*
  useEffect(() => {
    if (data && !isLoading) {
      initialOptimisticData.current = data;
    }
  }, [data, isLoading]);
  */
  useEffect(() => {
    console.log(optimisticData);
    initialOptimisticData.current = optimisticData;
    if (typeof window !== "undefined") {
      localStorage.setItem("optimisticData", JSON.stringify(optimisticData));
    }
  }, [optimisticData]);
  useEffect(() => {
    if (cookie?.value) {
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
