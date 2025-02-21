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
            className="w-[80%] md:w-[50%] rounded-2xl"
          ></img>
          <img
            src="./images/IsCOB.png"
            className="w-[80%] md:w-[34%] rounded-2xl hidden md:block"
          ></img>
        </div>
      )}
      <ProductList category={category.replaceAll("%20", " ")} />
    </>
  );
}
