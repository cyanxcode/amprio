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
      <SidebarContent className="bg-gradient-to-br bg-[#023235]">
        <SidebarGroup />
        <SidebarGroupLabel>
          <Link href="/" className="text-lg">
            <img src="/AmprioMainNoBg.png" alt="Amprio" />
          </Link>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="mt-10">
            <Accordion type="single" collapsible className="mx-5">
              {categories.map((item) =>
                item.href ? (
                  <Link href={item.href} key={item.title}>
                    <div
                      className="text-white font-semibold py-4 px-2 rounded-md border-b border-white hover:bg-[#016f63]"
                      key={item.title}
                    >
                      {item.title}
                    </div>
                  </Link>
                ) : (
                  <AccordionItem value={item.title} key={item.title}>
                    <AccordionTrigger className="text-white font-semibold px-2 rounded-md hover:bg-[#016f63]">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-1 text-white font-medium">
                      {item?.subCategories &&
                        item.subCategories.map((x) => (
                          <Link
                            key={x.title}
                            href={x.href}
                            className="py-2 px-4 rounded-md hover:bg-[#016f63]"
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
