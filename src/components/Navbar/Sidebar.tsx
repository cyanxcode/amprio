import Link from "next/link";

export default function List() {
  return (
    <>
      <div className="">
        <aside className="flex flex-col font-serif gap-4 text-2xl font-medium text-right italic mt-32 mr-10">
          <Link href="/Chandeliers">Chandeliers</Link>
          <Link href="/WallLights">Wall Lights</Link>
          <Link href="/Decor">Decor</Link>
          <Link href="/Cob">Cob Lights</Link>
        </aside>
      </div>
    </>
  );
}
