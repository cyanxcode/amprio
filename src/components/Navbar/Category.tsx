import Link from "next/link";

export default function CategoryBar() {
  return (
    <>
      <nav className="hidden w-full text-sm h-10 md:flex gap-10 font-semibold items-center justify-center uppercase tracking-widest">
        <Link href="/Architectural">
          <div className=" hover:underline">Architectural</div>
        </Link>
        <Link href="/Chandeliers">
          <div className=" hover:underline">Chandeliers</div>
        </Link>
        <Link href="/Designer">
          <div className=" hover:underline">Designer</div>
        </Link>
        <Link href="/Wall Light">
          <div className=" hover:underline">Wall Light</div>
        </Link>
      </nav>
    </>
  );
}
