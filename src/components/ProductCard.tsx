import Link from "next/link";

interface Props {
  gid: number;
  title: string;
  price?: number;
  maxPrice?: number;
  category?: string;
  imageURL?: string;
  imgAlt?: string;
}

export default function ProductCard({
  gid,
  title,
  price,
  maxPrice,
  category,
  imageURL,
  imgAlt,
}: Props) {
  return (
    <>
      <Link href={`/product/${gid}`}>
        <div className="w-full flex flex-col gap-3 cursor-pointer hover:bg-zinc-50 rounded-lg p-2 pb-4 ease-in-out duration-150">
          <img
            src={imageURL}
            alt={imgAlt?.toString()}
            className="w-full aspect-square rounded-lg object-cover "
          />
          <div className="flex justify-between font-semibold gap-4">
            <div className="">
              <h3 className=" text-wrap">{title}</h3>
              <h4 className="text-zinc-700 font-normal italic text-sm">
                {category}
              </h4>
            </div>
            <div className="text-right text-nowrap">
              <p>Rs {Number(price).toFixed(2)}</p>
              <p className="text-zinc-700 font-normal text-sm line-through">
                Rs {Number(maxPrice).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
