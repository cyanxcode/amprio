"use client";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function CategoryBar() {
  return (
    <>
      <nav className=" hidden absolute z-20 w-full text-md h-10 md:flex gap-10 items-center justify-center shadow-lg text-white bg-gradient-to-r from-[#023235] via-[#016f63] to-[#023235]">
        {categories.map((x) => (
          <div key={x.title} className="relative group h-full ">
            <div className="h-full flex items-center font-semibold uppercase tracking-widest">
              <Link href={x.href ? x.href : ""}>{x.title}</Link>
            </div>
            <div className="group-hover:flex flex-col bg-[#016f63] hidden w-auto h-auto rounded-t-none shadow-sm absolute rounded-md left-1/2 -translate-x-1/2">
              {x.subCategories?.map((y) => (
                <Link
                  key={y.title}
                  href={y.href}
                  className=" text-zinc-100 whitespace-nowrap pr-10 hover:underline px-5 py-3 "
                >
                  {y.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
      <div className="gold w-full h-2 mt-10"></div>
    </>
  );
}

/*"use client";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function CategoryBar() {
  return (
    <>
      <nav className=" hidden absolute z-20 w-full text-md h-10 md:flex gap-10 items-center justify-center shadow-lg text-white bg-gradient-to-r from-[#023235] via-[#016f63] to-[#023235]">
        {categories.map((x) => (
          <div key={x.title} className="relative group h-full ">
            <div className="h-full flex items-center font-semibold uppercase tracking-widest">
              <Link href={x.href ? x.href : ""}>{x.title}</Link>
            </div>
            <div className="group-hover:flex flex-col bg-[#016f63] hidden w-auto h-auto rounded-t-none shadow-sm absolute rounded-md left-1/2 -translate-x-1/2">
              {x.subCategories?.map((y) => (
                <Link
                  key={y.title}
                  href={y.href}
                  className=" text-zinc-100 whitespace-nowrap pr-10 hover:underline px-5 py-3 "
                >
                  {y.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
      <div className="gold w-full h-2 mt-10"></div>
    </>
  );
}
 */
