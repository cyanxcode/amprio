import { getAllProducts } from "@/lib/shopify";
import ProductCard from "./ProductCard";
interface Props {
  category: string;
}

const ProductList = async ({ category }: Props) => {
  const response = await getAllProducts(category);
  const data = response.data.products.edges;
  console.log(data);
  return (
    <>
      <div className="gridbox gap-10 m-10">
        {data.map((product: any) => (
          <ProductCard
            key={product.node.id}
            gid={product.node.id.split("/")[4]}
            title={product.node.title}
            price={product.node.priceRange.minVariantPrice.amount}
            maxPrice={product.node.compareAtPriceRange.minVariantPrice.amount}
            category={product.node.tags[0]}
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
