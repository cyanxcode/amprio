import ProductList from "@/components/ProductList";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Category({ params }: { params: { category: string } }) {
  return (
    <>
      <div className="flex mt-20 ml-12 items-center gap-10">
        <Link href="/">
          <IoIosArrowRoundBack size={35} className="mt-1" />
        </Link>
        <h2 className="text-4xl font-light cursor-default">
          {params.category}
        </h2>
      </div>
      <ProductList category={params.category} />
    </>
  );
}
