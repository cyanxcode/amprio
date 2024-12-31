"use client";
import { FetchByTag } from "@/lib/shopify";
import { Skeleton } from "./ui/skeleton";
import { isError, useQuery } from "react-query";
import ProductCard from "./ProductCard";

interface Props {
  tag: any;
}

export default function DisplayByTag({ tag }: Props) {
  const list = [0, 1, 2, 3];
  const { data, isLoading, isError } = useQuery({
    queryKey: [tag],
    queryFn: async () => {
      const { data } = await FetchByTag(tag);
      return data.products.edges;
    },
  });
  if (isLoading) {
    return (
      <>
        <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-1 my-10 mx-2 p-2">
          {list.map((id) => (
            <div className="flex flex-col gap-1 p-2" key={id}>
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
    return <div>Something went wrong</div>;
  }
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-1 my-10 mx-2 ">
        {data.map((product: any) => (
          <ProductCard
            key={product.node.id}
            gid={product.node.id.split("/")[4]}
            title={product.node.title}
            price={product.node.priceRange.minVariantPrice.amount}
            maxPrice={product.node.compareAtPriceRange.minVariantPrice.amount}
            imageURL={
              product.node.featuredImage.url != null &&
              product.node.featuredImage.url
            }
            imgAlt={
              product.node.featuredImage.altText != null &&
              product.node.featuredImage.altText
            }
          />
        ))}
      </div>
    </>
  );
}
