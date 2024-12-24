import { quotes } from "@/lib/data";

interface Props {
  index: number;
}

export default function Quote({ index }: Props) {
  return (
    <>
      <div className="w-full h-72 bg-[#023235] text-xl font-light italic text-white grid place-content-center px-[25vw]">
        {quotes[index]}
      </div>
    </>
  );
}
