import HeroX from "@/components/HeroX";
import ProductList from "@/components/ProductList";

export default async function Category({ params }: any) {
  const param = await params;
  const category = param.category;
  return (
    <>
      <HeroX category={category.replace("%20", " ")} />
      <ProductList category={category.replace("%20", " ")} />
    </>
  );
}
