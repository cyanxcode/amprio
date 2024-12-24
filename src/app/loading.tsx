import { quotes } from "@/lib/data";
export default function Loading() {
  return (
    <div className="w-[100vw] h-[100vh] absolute z-40 top-0 bg-white text-zinc-500 grid place-content-center text-3xl">
      {quotes[Math.floor(Math.random() * 14) + 1]}
    </div>
  );
}
