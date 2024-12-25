import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";

import { categories } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-gradient-to-br from-[#023235] via-[#016f63] to-[#023235]">
        <SidebarGroup />
        <SidebarGroupLabel>
          <div className="text-lg">
            <img src="/AmprioMainNoBg.png" alt="Amprio" />
          </div>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="mt-10">
            <Accordion type="single" collapsible className="mx-5">
              {categories.map((item) =>
                item.href ? (
                  <Link href={item.href} key={item.title}>
                    <div
                      className="text-white font-semibold py-4 border-b border-white hover:underline"
                      key={item.title}
                    >
                      {item.title}
                    </div>
                  </Link>
                ) : (
                  <AccordionItem value={item.title} key={item.title}>
                    <AccordionTrigger className="text-white font-semibold">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-1 text-white font-medium">
                      {item?.subCategories &&
                        item.subCategories.map((x) => (
                          <Link
                            key={x.title}
                            href={x.href}
                            className="p-2 rounded-md hover:underline"
                          >
                            <span>{x.title}</span>
                          </Link>
                        ))}
                    </AccordionContent>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  );
}
