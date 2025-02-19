"use client";

// import LitopiaLogo from "@/assets/logo.webp";
// import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigationItems } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-[9999] w-full border-b border-zinc-700/50 bg-background/50 px-4 py-3 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/">
          {/* <Image
            className="mx-auto block h-auto contrast-125 drop-shadow-2xl"
            width={120}
            // height={200}
            alt="Litopia 2.0"
            src={LitopiaLogo}
            priority
            loading="eager"
          /> */}
          <h2 className="text-xl">Litopia 2.0</h2>
        </Link>

        {/* Mobile Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-lg p-2 hover:bg-accent md:hidden">
            <Menu className="h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px] md:hidden">
            {navigationItems.map((item, i) => (
              <DropdownMenuItem key={`dropdown-item-${i}`} asChild>
                <Link
                  href={item.href}
                  className="flex cursor-pointer items-center gap-2"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu className="px-6 py-2">
            <NavigationMenuList className="flex items-center gap-4">
              {navigationItems.map((item, i) => (
                <NavigationMenuItem key={`nav-item-${i}`} className="px-4">
                  <NavigationMenuLink
                    href={item.href}
                    className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.icon}
                    <span className="hidden md:inline">{item.title}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
