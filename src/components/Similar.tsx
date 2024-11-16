import { similarProducts } from "@/lib/shopify";
import ProductCard from "./ProductCard";

interface Props {
  category: string;
  pageID: string;
}

export default async function Similar({ category, pageID }: Props) {
  const response = await similarProducts(category);
  const data = response.data.products.edges;
  const filtered = data.filter((product: any) => product.node.id != pageID);
  return (
    <>
      <h1 className="flex w-full text-3xl justify-center mt-20">
        Similar Products
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-1 my-10 mx-2 ">
        {filtered.map((product: any) => (
          <ProductCard
            key={product.node.id.split("/")[4]}
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
