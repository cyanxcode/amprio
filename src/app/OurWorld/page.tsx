export default function OurWorld() {
  return (
    <>
      <div className="flex flex-col items-center mt-10 gap-20 mb-24">
        {/* Hero */}
        <div className="w-full items-center flex px-5 gap-5 flex-col-reverse lg:flex-row-reverse ">
          <div className="w-[90vw] lg:w-[31vw] h-[36.5vw] flex justify-center flex-col px-5">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              Amprio
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              At Amprio, we redefine lighting with innovative solutions that
              brighten your spaces and elevate your lifestyle. From
              energy-efficient LEDs to stylish designs, our lights are crafted
              to blend functionality with elegance. Discover the perfect
              illumination for homes, offices, and outdoor settings, and let
              Amprio bring warmth and brilliance to every corner of your world.
            </p>
          </div>
          <div className="w-[90vw] lg:w-[65vw] grid place-content-center  bg-black rounded-3xl aspect-video overflow-hidden">
            <video
              src="https://cdn.shopify.com/videos/c/o/v/f7f2d726c19543b08f7139395db45dd8.mp4"
              className="w-[100%]"
              autoPlay
              loop
            ></video>
          </div>
        </div>

        {/* About */}
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
                Illuminate Your World
              </h1>
              <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                At Amprio, we redefine lighting with innovative solutions that
                brighten your spaces and elevate your lifestyle. From
                energy-efficient LEDs to stylish designs, our lights are crafted
                to blend functionality with elegance. Discover the perfect
                illumination for homes, offices, and outdoor settings, and let
                Amprio bring warmth and brilliance to every corner of your
                world.
              </p>
            </div>

            <div className="lg:col-span-4 mt-10 lg:mt-0">
              <img
                className="w-full rounded-xl"
                src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>

        {/*Lightbrary*/}
        <div className="w-full bg-gradient-to-br from-[#023235] to-[#016f63] box-border">
          <div className="gold w-full h-2"></div>
          <h2 className="w-full flex justify-center items-start mt-10">
            <img src="/Lightbrary-bg.png" alt="" className="w-60" />
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 py-10 px-20 w-full justify-center ">
            <div className="h-[30vw] w-full bg-black"></div>
            <div className="h-[30vw] w-full bg-black"></div>
            <div className="h-[30vw] w-full bg-black"></div>
            <div className="h-[30vw] w-full bg-black"></div>
          </div>
          <div className="gold w-full h-2"></div>
        </div>
      </div>
    </>
  );
}
