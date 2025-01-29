"use client";
import React from "react";
import { useCartContext } from "./Layout";

interface Props {
  product: any;
}

const Price = ({ product }: Props) => {
  const { variant } = useCartContext();
  const selectedVariant = product.variants.edges.find(
    (x: any) => x.node.id == "gid://shopify/ProductVariant/" + variant
  );
  if (!selectedVariant) return null;

  return (
    <>
      <div className="flex gap-4 items-center cursor-default">
        <h4>Rs {selectedVariant.node.price.amount}</h4>
        <h5 className="text-zinc-700 text-sm line-through">
          {Number(product.compareAtPriceRange.minVariantPrice.amount) ? (
            <>
              Rs
              {Number(
                product.compareAtPriceRange.minVariantPrice.amount
              ).toFixed(2)}
            </>
          ) : (
            ""
          )}
        </h5>
      </div>
    </>
  );
};

export default Price;
