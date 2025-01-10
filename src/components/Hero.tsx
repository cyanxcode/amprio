export default function Hero() {
  return (
    <>
      <div className="w-full items-center flex px-5 h-auto flex-col lg:flex-row mt-10 gap-5">
        <div className="w-[90vw] lg:w-[65vw] grid place-content-center bg-black rounded-lg aspect-video overflow-hidden">
          <video
            src="https://cdn.shopify.com/videos/c/o/v/f7f2d726c19543b08f7139395db45dd8.mp4"
            className="w-[100%]"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="bg-black w-[90vw] lg:w-[31vw] h-[36.5vw] rounded-lg"></div>
      </div>
    </>
  );
}
