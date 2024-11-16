import { getProductByID } from "@/lib/shopify";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

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
      <div className="flex mt-20 ml-12">
        <Link href={`/${product.tags[0]}`}>
          <IoIosArrowRoundBack size={35} className="mt-1" />
        </Link>
      </div>
      <div className="md:grid md:grid-cols-5 items-center mt-10 justify-center ">
        <img
          className="w-[80%] ml-[50%] translate-x-[-50%] col-span-3"
          src={product.featuredImage.url}
          alt={product.featuredImage.altText}
        />
        <div className=" flex flex-col gap-4 mx-5 mt-10 font-light md:max-w-[500px] col-span-2">
          <div className="">
            <Link href={`/${product.tags[0]}`}>
              <h6 className="text-zinc-400 text-sm">{product.tags[0]}</h6>
            </Link>
            <h3 className="text-2xl cursor-default">{product.title}</h3>
          </div>
          <div className="flex gap-4 items-end cursor-default">
            <h5 className="text-zinc-700 text-sm line-through">
              Rs{" "}
              {Number(
                product.compareAtPriceRange.minVariantPrice.amount
              ).toFixed(2)}
            </h5>
            <h4>
              Rs {Number(product.priceRange.minVariantPrice.amount).toFixed(2)}
            </h4>
          </div>
          <button className="border border-black h-10">Add to Cart</button>
          <button className="text-white bg-black h-10">Buy Now</button>
          <p className="text-sm leading-6 cursor-default">
            {product.description}
          </p>
        </div>
      </div>
    </>
  );
}
