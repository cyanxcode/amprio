"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

// Define a type for the variant structure
interface Variant {
  node: {
    id: string;
    selectedOptions: Array<{ name: string; value: string }>;
    title: string;
  };
}
interface Props {
  variants: Variant[];
}

export default function Variant({ variants }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const LightColor = [
    ...new Set(
      variants.flatMap((variant: any) =>
        variant.node.selectedOptions
          .filter((option: any) => option.name === "Light color")
          .map((option: any) => option.value)
      )
    ),
  ];
  const Wattage = [
    ...new Set(
      variants.flatMap((variant: any) =>
        variant.node.selectedOptions
          .filter((option: any) => option.name === "Wattage")
          .map((option: any) => option.value)
      )
    ),
  ];

  console.log(variants);

  const variant_id = searchParams.get("variant");
  const updateVariant = (value: string) => {
    variants.map((variant) => {
      const matchingOption = variant.node.selectedOptions.find(
        (option: any) => option.value.toLowerCase() == value
      );
      console.log(value);
      console.log(matchingOption);
      if (matchingOption) {
        router.push("?variant=" + variant.node.id.split("/").pop());
        return variant.node.id;
      }
      return null;
    });
  };
  return (
    <>
      {/* 
      <div className=" font-medium text-zinc-600 tracking-wider">Colors:</div>
      <div className="flex gap-2">
        {LightColor.map((x: any) => (
          <div key={x} className="grid place-items-center">
            <input
              type="radio"
              name="color"
              defaultChecked
              className={`appearance-none w-6 h-6 border-2 border-zinc-200 rounded-full  p-2`}
              id=""
              value={x.replaceAll(" ", "").replace("/", "-").toLowerCase()}
            />
            <div className="absolute w-4 h-4 rounded-full peer-checked:bg-blue-300"></div>
          </div>
        ))}
      </div>*/}

      {LightColor.length != 0 && (
        <>
          <div className=" font-medium text-zinc-600 tracking-wider">
            Light Color:
          </div>
          <Select
            onValueChange={(value) => updateVariant(value)}
            defaultValue={variant_id ? String(variant_id) : undefined}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Variant" />
            </SelectTrigger>
            <SelectContent>
              {LightColor.map((x: any) => (
                <SelectItem
                  key={x}
                  value={x.replaceAll(" ", "").replace("/", "-").toLowerCase()}
                >
                  {x.replace("/", "&")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>{" "}
        </>
      )}

      {Wattage.length != 0 && (
        <>
          <div className=" font-medium text-zinc-600 tracking-wider">
            Watts:
          </div>
          <Select
            onValueChange={(value) => updateVariant(value)}
            defaultValue={variant_id ? String(variant_id) : undefined}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Variant" />
            </SelectTrigger>
            <SelectContent>
              {Wattage.map((x: any) => (
                <SelectItem
                  key={x}
                  value={x.replaceAll(" ", "").replace("/", "-").toLowerCase()}
                >
                  {x.replace("/", "&")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>{" "}
        </>
      )}
    </>
  );
}
