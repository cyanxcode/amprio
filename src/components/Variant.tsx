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

interface Props {
  variant: [];
}

export default function Variant({ variant }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const variant_id = searchParams.get("variant");
  const updateVariant = (id: string) => {
    router.push("?variant=" + id);
  };
  return (
    <>
      <Select
        onValueChange={(value) => updateVariant(value)}
        defaultValue={variant_id ? String(variant_id) : undefined}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Variant" />
        </SelectTrigger>
        <SelectContent>
          {variant.map((x: any) => (
            <SelectItem
              key={x.node.id}
              value={x.node.title
                .replaceAll(" ", "")
                .replace("/", "-")
                .toLowerCase()}
            >
              {x.node.title.replace("/", "&")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
