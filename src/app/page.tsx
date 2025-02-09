import DisplayByTag from "@/components/DisplayByTag";
import Quote from "@/components/Quote";
import Reviews from "@/components/Reviews";
import FAQs from "../components/FAQs";
import Hero from "@/components/Hero";
import Link from "next/link";

export default async function Main() {
  return (
    <>
      <Hero />
      <Link href="/">
        <img
          src="https://cdn.shopify.com/s/files/1/0677/0085/0871/files/5.png?v=1739046379"
          className="w-full my-20 hidden md:block"
          alt=""
        />
      </Link>
      <div className=" mt-10">
        <h2 className="w-full text-center text-3xl md:text-6xl font-italiana text-[#023235]">
          Best Sellers
        </h2>
        <DisplayByTag tag={"Best Seller"} />
      </div>
      <Link className="min-h-96" href="/chandeliers">
        <img
          src="https://cdn.shopify.com/s/files/1/0677/0085/0871/files/9.png?v=1739046379"
          className="w-full my-20 h-full min-h-96 object-cover"
          alt=""
        />
      </Link>
      <div className=" mt-10">
        <div className="w-full font-italiana text-center text-3xl md:text-6xl text-[#023235]">
          New Arrivals
        </div>
        <DisplayByTag tag={"New Arrival"} />
      </div>
      <Quote index={1} />
      <div className=" my-10">
        <h2 className="w-full text-center text-3xl md:text-6xl font-italiana text-[#023235]">
          Reviews
        </h2>
      </div>
      <Reviews />
      <FAQs />
    </>
  );
}
