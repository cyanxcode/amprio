import ProductList from "@/components/ProductList";

export default async function Category({ params }: any) {
  const param = await params;
  const category = param.category;
  return (
    <>
      <div className="flex mt-16 w-full lg:px-20 justify-center items-center">
        <h2 className="text-4xl font-italiana sm:text-6xl cursor-default">
          {category.replace("%20", " ")}
        </h2>
      </div>
      <ProductList category={category.replace("%20", " ")} />
    </>
  );
}
