import Nav from "@/components/Navbar/Nav";
import Similar from "@/components/Similar";
import Variant from "@/components/Variant";
import Link from "next/link";
import AddToCartBtn from "@/components/AddToCart";
import { getProductByID } from "@/lib/shopify";
import { cookies } from "next/headers";
import { createCart } from "@/lib/cart";
import { initalizeCart } from "@/app/action";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ item: string }>;
}) {
  const { item } = await params;
  const response = await getProductByID(item);
  const product = response.data.product;
  const id = await createCart();

  //cookies cartID
  const cookieStore = await cookies();
  const cartId = cookieStore.get("cartID");

  initalizeCart();
  return (
    <>
      <Nav />
      <div className="md:grid md:grid-cols-5 items-center mt-12 justify-center ">
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
          <div className=" font-medium text-zinc-600 tracking-wider">
            Variants:
          </div>
          <div className="flex gap-4 items-center">
            <Variant variant={product.variants.edges} />
          </div>
          <AddToCartBtn
            cartId={cartId?.value}
            merchandiseID={product.variants.edges[0].node.id}
            quantity={1}
          />
          <button className="text-white bg-black h-10">Buy Now</button>
          <p className="text-sm leading-6 cursor-default">
            {product.description}
          </p>
        </div>
      </div>
      <div className="gold w-full h-2 mt-20"></div>
      <Similar category={product.productType} pageID={product.id} />
    </>
  );
}
