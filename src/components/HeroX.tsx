import { description } from "@/lib/data";

interface Props {
  category: string;
}

export default function HeroX({ category }: Props) {
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r   blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
          <div className="bg-gradient-to-tl from-green-50 via-green-100 to-green-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="inline-block text-sm font-medium bg-clip-text text-[#023235]">
                Welcome to Amprio
              </p>

              <div className="mt-5 max-w-2xl">
                <h2 className="text-4xl font-italiana sm:text-6xl cursor-default text-[#023235]">
                  {category.replace("%20", " ")}
                </h2>
              </div>

              <div className="mt-5 max-w-3xl">
                <p className="text-md md:text-lg text-gray-600">
                  {
                    description[
                      category.replace(" ", "") as keyof typeof description
                    ]
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
