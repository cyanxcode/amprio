export default function OurWorld() {
  return (
    <>
      <div className="flex flex-col items-center mt-10 gap-20 mb-24">
        {/* Hero */}
        <div className="w-full items-center flex px-5 gap-5 flex-col-reverse lg:flex-row-reverse ">
          <div className="w-[90vw] lg:w-[31vw] lg:h-[36.5vw] flex justify-center flex-col px-5 ">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl font-prata">
              Amprio
            </h1>
            <p className="mt-18 md:mt-2 text-lg text-gray-800">
              Amprio is transforming the way you light up your world. Our
              innovative solutions bring both style and functionality to your
              spaces. Brighten your home, office, or outdoor areas with Amprio,
              and experience a whole new level of warmth and brilliance.
            </p>
          </div>
          <div className="w-[90vw] lg:w-[65vw] grid place-content-center  bg-black rounded-3xl aspect-video overflow-hidden mb-5">
            <video
              src="https://cdn.shopify.com/videos/c/o/v/f7f2d726c19543b08f7139395db45dd8.mp4"
              className="w-[100%]"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
        {/*Details */}
        <div className="overflow-hidden">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
              <div className="text-center font-prata">
                <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-neutral-200">
                  Best lighting solutions
                </p>
                <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-neutral-200">
                  When the light just hit right{" "}
                  <span className="text-[#016f63]">
                    you know it&apos;s Amprio
                  </span>
                </h1>
              </div>

              <div className="sm:flex sm:justify-center sm:items-center text-center sm:text-start">
                <div className="shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
                  <div className="flex justify-center -space-x-3">
                    <img
                      className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="Avatar"
                    />
                    <img
                      className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                      src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="Avatar"
                    />
                    <img
                      className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                      src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                      alt="Avatar"
                    />
                    <img
                      className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="Avatar"
                    />
                    <span className="inline-flex items-center justify-center size-8 rounded-full ring-2 ring-white bg-gray-800 dark:bg-neutral-900 dark:ring-neutral-900">
                      <span className="text-xs font-medium leading-none text-white uppercase">
                        1k+
                      </span>
                    </span>
                  </div>
                </div>

                <div className="border-t sm:border-t-0 sm:border-s border-gray-200 w-32 h-px sm:w-auto sm:h-full mx-auto sm:mx-0 dark:border-neutral-700"></div>

                <div className="pt-5 sm:pt-0 sm:ps-5">
                  <div className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    Trust pilot
                  </div>
                  <div className="text-sm text-gray-500 dark:text-neutral-500">
                    Rated best over 500+ reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
              <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl font-prata">
                Illuminate Your World
              </h1>
              <p className="mt-3 text-lg text-gray-800 ">
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
                src="https://cdn.shopify.com/s/files/1/0677/0085/0871/files/Glass_Globe.jpg?v=1737022677"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>

        {/*Icons */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
            <div>
              <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
                <svg
                  className="shrink-0 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="10" height="14" x="3" y="8" rx="2" />
                  <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                  <path d="M8 18h.01" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Smart Lights
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Control your lights effortlessly with advanced technology.
                </p>
              </div>
            </div>

            <div>
              <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
                <svg
                  className="shrink-0 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Energy Efficient
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Save power without compromising on style or performance.
                </p>
              </div>
            </div>

            <div>
              <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
                <svg
                  className="shrink-0 size-6 text-blue-600 dark:text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  24/7 Support
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Contact us 24 hours a day, 7 days a week.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*}=
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
        <FAQs />
        {*/}
      </div>
    </>
  );
}
