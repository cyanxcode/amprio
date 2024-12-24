import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { categories } from "@/lib/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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
            {categories.map((item) => (
              <DropdownMenu key={item.title}>
                <SidebarMenuItem className="text-white font-semibold text-2xl pl-5 text-center w-ful">
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton asChild>
                      <a href={item.href}>
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item?.subCategories &&
                      item.subCategories.map((x) => (
                        <DropdownMenuItem key={x.title}>
                          <Link href={x.href}>
                            <span>{x.title}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                  </DropdownMenuContent>
                </SidebarMenuItem>
              </DropdownMenu>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  );
}
