import { getAllProducts } from "@/lib/shopify";
import ProductCard from "./ProductCard";
interface Props {
  category: any;
}

const ProductList = async ({ category }: Props) => {
  const response = await getAllProducts(category);
  const data = response.data.products.edges;
  console.log(data);
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
};

export default ProductList;
