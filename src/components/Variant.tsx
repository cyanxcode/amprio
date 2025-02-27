"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useCartContext } from "./Layout";
import { useEffect } from "react";

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
  const { setVariant } = useCartContext();
  useEffect(() => {
    setVariant(String(variants[0].node.id.split("/").pop()));
  }, [setVariant, variants]);
  const LightColor = [
    ...new Set(
      variants.flatMap((variant: any) =>
        variant.node.selectedOptions
          .filter((option: any) => option.name === "Color")
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
  const Reflector = [
    ...new Set(
      variants.flatMap((variant: any) =>
        variant.node.selectedOptions
          .filter((option: any) => option.name === "Reflector")
          .map((option: any) => option.value)
      )
    ),
  ];
  const Body = [
    ...new Set(
      variants.flatMap((variant: any) =>
        variant.node.selectedOptions
          .filter((option: any) => option.name === "Body")
          .map((option: any) => option.value)
      )
    ),
  ];

  const updateVariant = (value: string) => {
    variants.map((variant) => {
      const matchingOption = variant.node.selectedOptions.find(
        (option: any) => option.value == value
      );
      if (matchingOption) {
        setVariant(variant.node.id.split("/").pop());
      }
      return null;
    });
  };
  return (
    <>
      {LightColor.length != 0 && (
        <>
          <div className=" font-medium text-zinc-600 tracking-wider">
            Light Color:
          </div>
          <Select
            onValueChange={(value) => updateVariant(value)}
            defaultValue={LightColor[0]}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Variant" />
            </SelectTrigger>
            <SelectContent>
              {LightColor.map((x: any) => (
                <SelectItem key={x} value={x}>
                  {x}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>{" "}
        </>
      )}

      {Body.length != 0 && (
        <>
          <div className="font-medium text-zinc-600 tracking-wider">
            Body Color:
          </div>
          <Select
            onValueChange={(value) => updateVariant(value)}
            defaultValue={Body[0]}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Variant" />
            </SelectTrigger>
            <SelectContent>
              {Body.map((x: any) => (
                <SelectItem key={x} value={x}>
                  {x}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>{" "}
        </>
      )}
      {Reflector.length != 0 && (
        <>
          <div className="font-medium text-zinc-600 tracking-wider">
            Reflector Color:
          </div>
          <Select
            onValueChange={(value) => updateVariant(value)}
            defaultValue={Reflector[0]}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Variant" />
            </SelectTrigger>
            <SelectContent>
              {Reflector.map((x: any) => (
                <SelectItem key={x} value={x}>
                  {x}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>{" "}
        </>
      )}
      {Wattage.length != 0 && (
        <>
          <div className=" font-medium text-zinc-600 tracking-wider">
            Wattage:
          </div>
          <Select
            onValueChange={(value) => updateVariant(value)}
            defaultValue={Wattage[0]}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Variant" />
            </SelectTrigger>
            <SelectContent>
              {Wattage.map((x: any) => (
                <SelectItem key={x} value={x}>
                  {x}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>{" "}
        </>
      )}
    </>
  );
}
