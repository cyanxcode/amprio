import DisplayByTag from "@/components/DisplayByTag";
import Reviews from "@/components/Reviews";
import FAQs from "../components/FAQs";
import Hero from "@/components/Hero";
import Link from "next/link";
import Client from "@/components/Clients";

export default async function Main() {
  return (
    <>
      <Hero />
      <Link href="/Smart Lights">
        <img
          src="https://cdn.shopify.com/s/files/1/0677/0085/0871/files/5.png?v=1739046379"
          className="w-full my-20 min-h-72 sm:min-h-96 object-cover object-right"
          alt=""
        />
      </Link>
      <div className=" mt-10">
        <h2 className="w-full text-center text-4xl md:text-6xl font-italiana text-[#023235]">
          Best Sellers
        </h2>
        <DisplayByTag tag={"Best Seller"} />
      </div>
      <Client />
      <img
        src="./images/Banner-LD.png"
        className="w-full my-20 h-full min-h-64 object-cover"
      />
      <div className=" mt-10">
        <div className="w-full font-italiana text-center text-4xl md:text-6xl text-[#023235]">
          New Arrivals
        </div>
        <DisplayByTag tag={"New Arrival"} />
      </div>
      <Link className="min-h-96" href="/Chandeliers">
        <img
          src="https://cdn.shopify.com/s/files/1/0677/0085/0871/files/9.png?v=1739046379"
          className="w-full my-20 h-full min-h-96 object-cover"
          alt=""
        />
      </Link>
      <div className=" my-10">
        <h2 className="w-full text-center text-4xl md:text-6xl font-italiana text-[#023235]">
          Reviews
        </h2>
      </div>
      <Reviews />
      <FAQs />
    </>
  );
}
