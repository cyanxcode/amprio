import Nav from "@/components/Navbar/Nav";
import ProductList from "@/components/ProductList";

export default function Category({ params }: { params: { category: string } }) {
  return (
    <>
      <div className="mt-0 w-full h-20">
        <Nav />
      </div>
      <div className="flex mt-10 w-full pl-8 lg:pl-20 justify-start items-center">
        <h2 className="text-3xl sm:text-4xl cursor-default">
          {params.category}
        </h2>
      </div>
      <ProductList category={params.category} />
    </>
  );
}
