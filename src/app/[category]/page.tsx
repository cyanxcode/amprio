import HeroX from "@/components/HeroX";
import ProductList from "@/components/ProductList";

export default async function Category({ params }: any) {
  const param = await params;
  const category = param.category;
  return (
    <>
      <HeroX category={category.replaceAll("%20", " ")} />
      {category.replaceAll("%20", " ") == "COB Down Light" && (
        <div className="flex flex-col md:flex-row gap-10 justify-center w-full  items-center">
          <img
            src="./images/WhyCOB.png"
            className="w-[94%] md:w-[50%] rounded-md md:rounded-lg"
          ></img>
          <img
            src="./images/IsCOB.png"
            className="w-[94%] md:w-[34%] md:rounded-lg rounded-md"
          ></img>
        </div>
      )}
      {category.replaceAll("%20", " ").includes("Smart") && (
        <div className="flex flex-col md:flex-row gap-10 justify-center w-full  items-center">
          <img
            src="./images/smart.png"
            className="w-[94%] lg:w-[50%] rounded-md md:rounded-lg"
          ></img>
          <div className="bg-[#023235] w-[90vw] lg:w-[31vw] h-[26.5vw] rounded-lg hidden lg:grid place-content-center">
            <img
              src="./AmprioNoBg.png"
              alt=""
              width="100%"
              height="100%"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      )}
      <ProductList category={category.replaceAll("%20", " ")} />
    </>
  );
}
