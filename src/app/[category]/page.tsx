import CategoryBar from "@/components/Navbar/Category";
import Nav from "@/components/Navbar/Nav";
import ProductList from "@/components/ProductList";

export default function Category({ params }: any) {
  const category = params.category;
  return (
    <>
      <div className="mt-0 w-full h-20">
        <Nav />
      </div>
      <CategoryBar />
      <div className="flex mt-10 w-full pl-8 lg:pl-20 justify-start items-center">
        <h2 className="text-3xl font-serif sm:text-4xl cursor-default">
          {category}
        </h2>
      </div>
      <ProductList category={category} />
    </>
  );
}
