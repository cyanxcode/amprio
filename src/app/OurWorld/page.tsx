import Feed from "@/components/Feed";
export default function OurWorld() {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center mt-10 gap-20 mb-24 text-[#023235]">
          {/* Hero */}
          <div className="w-full items-center flex px-5 gap-5 flex-col-reverse lg:flex-row-reverse ">
            <div className="w-[90vw] lg:w-[31vw] lg:h-[36.5vw] flex justify-center flex-col px-5 ">
              <div className="flex flex-col items-end">
                <img src="/AmprioWhite.png" alt="" />
                <h2 className="w-full text-center text-lg md:text-xl font-prata text-[#023235] -mt-8 mb-8">
                  A Tribute to Passion & Heritage
                </h2>
              </div>
              <p className="mt-18 md:mt-2 text-lg text-gray-800">
                Amprio is not just a brand, it is a tribute to family, heritage,
                and dedication. The name itself is a fusion of AMIT and PREETI—a
                heartfelt acknowledgment of the unwavering support and hard work
                of the pillars behind this journey. <br /> With Amprio, we take
                a step further into the luxury lighting segment, introducing
                exclusive, handcrafted, and custom-made lighting solutions.
                Drawing inspiration from global designs while staying true to
                our Indian roots.
              </p>
            </div>
            <div className="w-[90vw] lg:w-[65vw] grid place-content-center  bg-black rounded-3xl aspect-video overflow-hidden mb-5">
              <video
                src="https://cdn.shopify.com/videos/c/o/v/8a7e116608924d73aa530f92dff4830e.mp4"
                className="w-[100%]"
                autoPlay
                loop
                controls
              ></video>
            </div>
          </div>

          {/*History */}
          <div className="px-4 sm:px-6 lg:px-8 mx-auto">
            <h2 className="w-full text-center text-3xl md:text-5xl font-prata text-[#023235]">
              Our Legacy: Vaishno Electricals & Lights
            </h2>
            <div className="">
              <div className="grid md:grid-cols-3 items-center">
                <blockquote className="text-center p-4 sm:px-7 col-span-2">
                  <p className="text-lg font-medium text-gray-800 md:text-xl md:leading-normal xl:text-xl xl:leading-normal">
                    <span className="text-xl font-semibold md:text-2xl text-[#023235]">
                      Vaishno Electricals & Lights
                    </span>{" "}
                    has been a trusted name in the industry for decades, serving
                    as a retail and wholesale destination for complete
                    electrical and lighting solutions. Our vision is to become
                    the one-stop solution for our customers, integrating not
                    just electricals and lighting but also automation and home
                    décor solutions such as wallpapers. Expanding into the
                    digital era, we are now bridging the gap with our e-commerce
                    platform, ensuring that quality lighting and electrical
                    solutions are accessible to all.
                  </p>
                </blockquote>

                <figure className="w-full flex justify-center items-center flex-col gap-4 col-span-2 md:col-span-1">
                  <img
                    className="w-[90%] object-cover rounded-xl"
                    src="./Vaishno-Logo.png"
                    alt="Blog Image"
                  />
                </figure>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex justify-end">
                <img
                  src="./map2.png"
                  className="w-[50%] absolute opacity-15 mt-96 md:-mt-10 h-full object-cover"
                />
              </div>
              <h2 className="w-full text-center text-3xl md:text-5xl font-prata text-[#023235] mb-12">
                Vaishno Lights – Illuminating Homes Across India
              </h2>
              <div className="">
                <div className="grid md:grid-cols-3 items-center">
                  <figure className="w-full flex justify-center items-center flex-col gap-4  col-span-2 md:col-span-1">
                    <img
                      className="w-[80%] object-cover rounded-xl"
                      src="./Vaishno-Lights-2.png"
                      alt="Blog Image"
                    />
                  </figure>
                  <blockquote className="text-center p-4 sm:px-7 col-span-2">
                    <p className="text-lg  font-medium text-gray-800 md:text-xl md:leading-normal xl:text-xl xl:leading-normal">
                      Vaishno Lights emerged as an affordable lighting brand,
                      focusing on architectural and decorative lighting. The
                      brand fills a crucial gap in the industry by educating
                      consumers about the significance of selecting the right
                      lighting—not just to enhance aesthetics but also to
                      promote health and well-being. Vaishno Lights has expanded
                      from Gurugram to a{" "}
                      <span className="text-xl font-semibold md:text-2xl text-[#023235]">
                        PAN-India
                      </span>{" "}
                      presence, brightening over{" "}
                      <span className="text-xl font-semibold md:text-2xl text-[#023235]">
                        50,000 homes.
                      </span>{" "}
                      Moving forward, we continue our commitment to offering
                      lighting consultations and bespoke lighting plans tailored
                      to individual needs.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
            <div className="">
              <h2 className="w-full text-center text-3xl md:text-5xl font-prata text-[#023235] mb-4">
                Founder&apos;s Journey
              </h2>
              <div className="grid md:grid-cols-3 items-center">
                <blockquote className="text-center p-4 sm:px-7 col-span-2">
                  <p className="text-lg font-medium text-gray-800 md:text-xl md:leading-normal xl:leading-normal">
                    <span className="text-xl font-semibold md:text-2xl text-[#023235]">
                      Mr. Aggarwal
                    </span>
                    , the visionary founder of Amprio, has been a driving force
                    in revolutionizing the lighting industry. With a keen eye
                    for innovation and quality, he has successfully redefined
                    the brand, making it a prominent name in premium lighting
                    solutions.A hardworking and ambitious entrepreneur, He
                    started his journey at the young age of 17, inspired by his
                    father&apos;s dedication and vision. Despite the odds, he
                    pursued his education in commerce while simultaneously
                    working to build his dream. With a burning passion for the
                    electrical industry, he established Vaishno Electricals in
                    Sikanderpur Market, Gurugram, recognizing the immense
                    potential of the rapidly growing city. Over time, Gurugram
                    embraced his vision, making Vaishno Electricals a household
                    name.With{" "}
                    <span className="text-xl font-semibold md:text-2xl text-[#023235]">
                      40 Years
                    </span>{" "}
                    of experience in the electrical industry, Mr. Aggarwal has
                    continued to push boundaries. Driven by the ever-evolving
                    demands of modern lighting, he expanded into the lighting
                    sector alongside his daughter, Rudrakshi, laying the
                    foundation for Vaishno Lights.
                  </p>
                </blockquote>

                <figure className="w-full flex justify-center items-center flex-col gap-4 col-span-2 md:col-span-1">
                  <img
                    className="w-[80%] object-cover rounded-xl"
                    src="./Aggarwal2.jpg"
                    alt="Blog Image"
                  />
                  <figcaption className="mt-3 text-sm text-center text-gray-500 ">
                    Mr. Amit Aggarwal – MD, Chairman & Founder of Amprio,
                    Vaishno Light & Vaishno Electricals
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
            <div className="">
              <div className="grid md:grid-cols-3 items-center">
                <figure className="w-full flex justify-center items-center flex-col gap-4  col-span-2 md:col-span-1">
                  <img
                    className="w-[80% ] object-cover rounded-xl"
                    src="./FullSizeRender.jpeg"
                    alt="Blog Image"
                  />
                  <figcaption className="mt-3 text-sm text-center text-gray-500 ">
                    Rudrakshi Aggarwal – Co-founder of Amprio | Principal
                    Lighting Designer & Consultant | Lightpreneur
                  </figcaption>
                </figure>
                <blockquote className="text-center p-4 sm:px-7 col-span-2">
                  <p className="text-lg font-medium text-gray-800 md:text-xl md:leading-normal xl:text-xl xl:leading-normal">
                    <span className="text-xl font-semibold md:text-2xl text-[#023235]">
                      Rudrakshi&apos;s
                    </span>{" "}
                    journey began in event management, where she worked with
                    brands like Samsung, Google, and Nikon, sharpening her
                    expertise in communication and brand strategy, She later
                    transitioned into advertising, collaborating with global
                    clients, gaining a deep understanding of marketing and media
                    where she immersed herself in sales, operations, and retail
                    management, unlocking new growth opportunities, including
                    digital expansion.. Her entrepreneurial spirit led her to
                    embrace Vaishno Lights. Rudrakshi is a self-taught lighting
                    consultant dedicated to creating impactful, well-designed
                    spaces. Over the past five years, she has continuously
                    pushed boundaries, learned, and grown. Leaving behind
                    stability to chase a dream, she built Amprio —a brand that
                    stands as a testament to perseverance, innovation, and the
                    transformative power of lighting.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <blockquote className="text-center p-4 sm:px-7 col-span-2 w-full flex justify-center">
            <p className="text-2xl font-semibold text-gray-800 md:text-3xl md:leading-normal xl:text-3xl xl:leading-normal w-[80%]">
              With Amprio, we invite you to discover the beauty of handcrafted,
              luxurious lighting—made in India, made for India—and let light be
              the defining element of your home and workspace.
            </p>
          </blockquote>
          <blockquote className="text-center p-4 sm:px-7 col-span-2 w-full flex justify-center">
            <p className="text-xl font-semibold text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal w-[80%]">
              From a young entrepreneur with a dream to a visionary leader
              transforming the lighting industry, Mr. Amit Agarwal’s journey is
              a testament to passion, perseverance, and the relentless pursuit
              of excellence. With Vaishno Electricals, Vaishno Lights, and
              thereafter Amprio, he continues to illuminate lives, one light at
              a time. Now, his genuineness and expert knowledge are appreciated
              by millions across YouTube, his channel, and Instagram. Alongside
              him, Rudrakshi Aggarwal brings innovation and modern design
              sensibilities to the industry, redefining lighting solutions with
              her expertise and vision.
            </p>
          </blockquote>
          <img
            src="./Philo2.png"
            className="w-full my-10 h-full min-h-64 object-cover"
          />
          {/*
        <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
              Our team
            </h2>
            <p className="mt-1 text-gray-600 ">Creative people</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800 ">David Forren</h3>
                <p className="text-sm text-gray-600 ">Founder / CEO</p>
              </div>
            </div>
            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800 ">David Forren</h3>
                <p className="text-sm text-gray-600 ">Founder / CEO</p>
              </div>
            </div>
            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800 ">David Forren</h3>
                <p className="text-sm text-gray-600 ">Founder / CEO</p>
              </div>
            </div>

            <div className="text-center">
              <img
                className="rounded-full size-24 mx-auto"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Avatar"
              />
              <div className="mt-2 sm:mt-4">
                <h3 className="font-medium text-gray-800 ">Amil Evara</h3>
                <p className="text-sm text-gray-600 ">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
        */}
          {/* About */}
          <blockquote className="text-center p-4 sm:px-7 col-span-2 w-full flex justify-center">
            <p className="text-2xl font-semibold text-gray-800 md:text-3xl md:leading-normal xl:text-3xl xl:leading-normal w-[80%]">
              “Lighting is the first and most essential element of décor—one
              that enhances all other components of a space.”
            </p>
          </blockquote>
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
              <div className="lg:col-span-3">
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl font-prata">
                  Illuminate Your World
                </h1>
                <p className="mt-3 text-lg text-gray-800 ">
                  Lighting is more than just illumination—it is an art that
                  defines a space. In today&apos;s fast-paced world, the
                  lighting industry is evolving rapidly, yet its true potential
                  remains underrated. While theoretical knowledge is abundant,
                  practical implementation is where we truly make a difference.{" "}
                  <br /> <br />
                  Our mission is to create awareness about the significance of
                  lighting, breaking down its complexities into simpler,
                  actionable insights. There are no one-size-fits-all
                  solutions—lighting should be tailored to individual needs,
                  spaces, and functions. Each light source has its unique
                  properties, throw, and impact, making the selection process
                  crucial for optimizing comfort and well-being.
                </p>
              </div>
              <div className="lg:col-span-4 mt-10 lg:mt-0">
                <img
                  className="w-full rounded-xl"
                  src="./Logo.png"
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
                <div className="text-center font-prata">
                  <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight ">
                    “People will forget what you said, people will forget what
                    you did, but people will never forget how you made them
                    feel.”
                    <span className="font-prata text-[#016f63]">
                      – Maya Angelou
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <blockquote className="text-center p-4 sm:px-7 col-span-2 w-full flex justify-center">
            <p className="text-2xl font-semibold text-gray-800 md:text-3xl md:leading-normal xl:text-3xl xl:leading-normal w-[80%]">
              Amprio is a bespoke lighting atelier, employing traditional
              craftsmanship: <br />✔ Glass blowing✔ Hand carving✔ Hand painting✔
              Intricate detailing <br />
              We believe that a well-designed space requires more than just
              illumination—it demands a statement piece that enhances the décor.
              Our timeless collections blend fragility with elegance, offering
              unique lighting solutions that transform spaces into sophisticated
              works of art.
            </p>
          </blockquote>
          <div className="w-full">
            <Feed />
          </div>
          {/*Icons */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
              <div>
                <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-[#023235] before:via-transparent before:to-[#023235] before:rounded-xl ">
                  <svg
                    className="shrink-0 size-6 text-[#023235] "
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
                  <h3 className="text-lg font-semibold text-gray-800 ">
                    Smart Lights
                  </h3>
                  <p className="mt-1 text-gray-600 ">
                    Control your lights effortlessly with advanced technology.
                  </p>
                </div>
              </div>

              <div>
                <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-[#023235] before:via-transparent before:to-text-[#023235] before:rounded-xl ">
                  <svg
                    className="shrink-0 size-6 text-[#023235] "
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
                  <h3 className="text-lg font-semibold text-gray-800 ">
                    Energy Efficient
                  </h3>

                  <p className="mt-1 text-gray-600 ">
                    Save power without compromising on style or performance.
                  </p>
                </div>
              </div>

              <div>
                <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-[#023235] before:via-transparent before:to-text-[#023235] before:rounded-xl ">
                  <svg
                    className="shrink-0 size-6 text-[#023235] "
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
                  <h3 className="text-lg font-semibold text-gray-800 ">
                    24/7 Support
                  </h3>
                  <p className="mt-1 text-gray-600 ">
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
      </div>
    </>
  );
}
