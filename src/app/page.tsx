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
      <img
        src="./Lightting.png"
        className="w-full my-20 h-full min-h-64 object-cover"
      />

      <div className=" mt-10">
        <h2 className="w-full text-center text-4xl md:text-6xl font-italiana text-[#023235]">
          Best Sellers
        </h2>
        <DisplayByTag tag={"Best Seller"} />
      </div>
      <div className="overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
            <div className="text-center font-prata">
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 ">
                Best lighting solutions
              </p>
              <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight ">
                When the light just hit right{" "}
                <span className="text-[#016f63]">
                  you know it&apos;s Amprio!
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Link href="/Smart Lights">
        <img
          src="https://cdn.shopify.com/s/files/1/0677/0085/0871/files/5.png?v=1739046379"
          className="w-full my-20 min-h-72 sm:min-h-96 object-cover object-right"
          alt=""
        />
      </Link>
      <Client />
      <div className=" mt-10">
        <div className="w-full font-italiana text-center text-4xl md:text-6xl text-[#023235]">
          New Arrivals
        </div>
        <DisplayByTag tag={"New Arrival"} />
      </div>
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
