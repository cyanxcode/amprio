"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "react-query";
import { getAllProducts } from "@/lib/shopify";
import ProductCard from "./ProductCard";

interface Props {
  category: any;
}

const ProductList = ({ category }: Props) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [category],
    queryFn: async () => {
      const { data } = await getAllProducts(category.replace("Smart ", ""));
      const priorityItem = data.products.edges.filter((product: any) =>
        product.node.tags.includes("+1")
      );
      const normalItem = data.products.edges.filter(
        (product: any) => !product.node.tags.includes("+1")
      );
      if (category.includes("Smart")) {
        const smartItem = data.products.edges.filter((product: any) =>
          product.node.tags.includes("Smart")
        );
        return smartItem;
      }

      return [...priorityItem, ...normalItem];
    },
  });

  if (isLoading) {
    return (
      <>
        <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-1 my-10 mx-2 p-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="flex flex-col gap-1 p-2" key={index}>
              <Skeleton className="w-[100%] aspect-square rounded-md bg-zinc-200" />
              <Skeleton className="w-[70%] h-6 rounded-md bg-zinc-100" />
              <Skeleton className="w-[100%] h-2 aspect-square rounded-md bg-zinc-100" />
              <Skeleton className="w-[100%] h-2 aspect-square rounded-md bg-zinc-100" />
            </div>
          ))}
        </div>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <div className="w-full text-xl font-semibold text-center mt-20">
          Some unknown error has occured, Reload the website or try again later.
        </div>
      </>
    );
  }
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-1 my-10 mx-2 ">
        {data &&
          data.map((product: any) => (
            <ProductCard
              key={product.node.id}
              gid={product.node.id.split("/")[4]}
              title={product.node.title}
              price={product.node.priceRange.minVariantPrice.amount}
              maxPrice={product.node.compareAtPriceRange.minVariantPrice.amount}
              imageURL={
                product.node.featuredImage?.url ||
                "https://dummyimage.com/600x400/000/fff"
              }
              imgAlt={product.node.featuredImage?.altText || "Product Image"}
            />
          ))}
      </div>
    </>
  );
};

export default ProductList;
