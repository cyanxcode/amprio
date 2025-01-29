import Similar from "@/components/Similar";
import Variant from "@/components/Variant";
import Link from "next/link";
import AddToCartBtn from "@/components/Cart/AddToCart";
import { getProductByID } from "@/lib/shopify";
import { cookies } from "next/headers";
import Price from "@/components/Price";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ item: string }>;
}) {
  //get query param variant id
  const { item } = await params;

  //fetch product details
  const response = await getProductByID(item);
  const product = response.data.product;
  console.log(product);
  //cookies cartID
  const cookieStore = await cookies();
  const cartId = cookieStore.get("cartId");

  return (
    <>
      <div className="md:grid md:grid-cols-5 items-center mt-16 pt-2 justify-center ">
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
          <Price product={product} />

          <Variant variants={product.variants.edges} />
          <AddToCartBtn
            cartId={cartId?.value}
            variants={product.variants.edges}
            item={{
              id: product.variants.edges[0].node.id,
              quantity: 1,
              merchandise: {
                title: product.variants.edges[0].node.title,
                product: {
                  title: product.title,
                  img: product.featuredImage?.url,
                  priceRange: {
                    minVariantPrice: {
                      amount: product.priceRange.minVariantPrice.amount,
                    },
                  },
                },
              },
            }}
          />
          <p
            className="text-sm leading-6 cursor-default"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          ></p>
        </div>
      </div>
      <Similar category={product.productType} pageID={product.id} />
    </>
  );
}
