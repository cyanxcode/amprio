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
        <div className="w-full font-italiana text-center text-6xl">
          New Arrivals
        </div>
        <DisplayByTag tag={"New Arrival"} />
      </div>
      <div className=" mt-10">
        <h2 className="w-full text-center text-6xl font-italiana">
          Best Sellers
        </h2>
        <DisplayByTag tag={"Best"} />
      </div>
      <Quote index={1} />
      <div className=" my-10">
        <h2 className="w-full text-center text-6xl font-italiana">Reviews</h2>
      </div>
      <Reviews />
      <FAQs />
    </>
  );
}
