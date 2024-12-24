import DisplayByTag from "@/components/DisplayByTag";
import Quote from "@/components/Quote";
import Reviews from "@/components/Reviews";
import FAQs from "../components/FAQs";

export default async function Main() {
  return (
    <>
      <div className="w-full h-[100vh] bg-black"></div>
      <div className=" mt-10">
        <h2 className="w-full text-center text-6xl caveat">New Arrivals</h2>
        <DisplayByTag tag={"New Arrival"} />
      </div>
      <div className=" mt-10">
        <h2 className="w-full text-center text-6xl caveat">Best Sellers</h2>
        <DisplayByTag tag={"Best"} />
      </div>
      <Quote index={1} />
      <div className=" my-10">
        <h2 className="w-full text-center text-6xl caveat">Reviews</h2>
      </div>
      <Reviews />
      <FAQs />
    </>
  );
}
