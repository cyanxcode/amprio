import DisplayByTag from "@/components/DisplayByTag";
import Quote from "@/components/Quote";
import Reviews from "@/components/Reviews";
import FAQs from "../components/FAQs";
import Hero from "@/components/Hero";

export default async function Main() {
  return (
    <>
      <Hero />
      <div className=" mt-10">
        <div className="w-full font-italiana text-center text-3xl md:text-6xl">
          New Arrivals
        </div>
        <DisplayByTag tag={"New Arrival"} />
      </div>
      <div className="min-h-96">
        <img
          src="https://cdn.shopify.com/s/files/1/0677/0085/0871/files/9.png?v=1739046379"
          className="w-full my-20 h-full min-h-96 object-cover"
          alt=""
        />
      </div>
      <div className=" mt-10">
        <h2 className="w-full text-center text-3xl md:text-6xl font-italiana">
          Best Sellers
        </h2>
        <DisplayByTag tag={"Best Seller"} />
      </div>
      <Quote index={1} />
      <div className=" my-10">
        <h2 className="w-full text-center text-3xl md:text-6xl font-italiana">
          Reviews
        </h2>
      </div>
      <Reviews />
      <img
        src="https://cdn.shopify.com/s/files/1/0677/0085/0871/files/5.png?v=1739046379"
        className="w-full my-20 hidden md:block"
        alt=""
      />
      <FAQs />
    </>
  );
}
