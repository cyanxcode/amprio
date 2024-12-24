import Similar from "@/components/Similar";
import Variant from "@/components/Variant";
import Link from "next/link";
import AddToCartBtn from "@/components/Cart/AddToCart";
import { getProductByID } from "@/lib/shopify";
import { cookies } from "next/headers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          <Variant variants={product.variants.edges} />
          <AddToCartBtn cartId={cartId?.value} />
          <p className="text-sm leading-6 cursor-default">
            {product.description}
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Why choose amprio?</AccordionTrigger>
              <AccordionContent>
                Yes. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What is the cancellation policies?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="gold w-full h-2 mt-20"></div>
      <Similar category={product.productType} pageID={product.id} />
    </>
  );
}
