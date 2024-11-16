import Nav from "@/components/Navbar/Nav";
import Similar from "@/components/Similar";
import { getProductByID } from "@/lib/shopify";
import Link from "next/link";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ item: string }>;
}) {
  const { item } = await params;
  const response = await getProductByID(item);
  const product = response.data.product;
  return (
    <>
      <div className="absolute w-full top-0">
        <Nav />
      </div>
      <div className="md:grid md:grid-cols-5 items-center mt-32 justify-center ">
        <img
          className="w-[60%] ml-[50%] translate-x-[-50%] col-span-3"
          src={product.featuredImage.url}
          alt={product.featuredImage.altText}
        />
        <div className=" flex flex-col gap-4 mx-5 mt-10 sm:mt-0 font-light md:max-w-[500px] col-span-2">
          <div className="">
            <Link href={`/${product.productType}`}>
              <h6 className="text-zinc-400 text-sm">{product.productType}</h6>
            </Link>
            <h3 className="text-2xl cursor-default">{product.title}</h3>
          </div>
          <div className="flex gap-4 items-center cursor-default">
            <h4>
              Rs {Number(product.priceRange.minVariantPrice.amount).toFixed(2)}
            </h4>
            <h5 className="text-zinc-700 text-sm line-through">
              Rs{" "}
              {Number(
                product.compareAtPriceRange.minVariantPrice.amount
              ).toFixed(2)}
            </h5>
          </div>
          <button className="border border-black h-10">Add to Cart</button>
          <button className="text-white bg-black h-10">Buy Now</button>
          <p className="text-sm leading-6 cursor-default">
            {product.description}
          </p>
        </div>
      </div>
      <Similar category={product.productType} pageID={product.id} />
    </>
  );
}
