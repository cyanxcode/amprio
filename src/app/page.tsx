import DisplayByTag from "@/components/DisplayByTag";
import Quote from "@/components/Quote";
import Reviews from "@/components/Reviews";
import FAQs from "../components/FAQs";

export default async function Main() {
  return (
    <>
      <div className="grid place-content-center w-full bg-black aspect-video overflow-hidden">
        <video
          src="https://cdn.shopify.com/videos/c/o/v/f7f2d726c19543b08f7139395db45dd8.mp4"
          className="w-[94-vw]"
          autoPlay
          loop
        ></video>
      </div>
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
