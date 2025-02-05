"use client";

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
    <nav className="fixed w-full top-0 z-50 px-4 py-3 bg-background/50 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center relative">
        <Link href="/" className="inline-block md:hidden">
          <h2 className="text-xl">Litopia 2.0</h2>
        </Link>

        {/* Mobile Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden p-2 hover:bg-accent rounded-lg">
            <Menu className="h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px] md:hidden">
            {navigationItems.map((item, i) => (
              <DropdownMenuItem key={`dropdown-item-${i}`} asChild>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 cursor-pointer"
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
          <NavigationMenu className="bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 rounded-full border border-foreground/10 px-6 py-2">
            <NavigationMenuList className="flex items-center gap-4">
              {navigationItems.map((item, i) => (
                <NavigationMenuItem key={`nav-item-${i}`} className="px-4">
                  <NavigationMenuLink
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
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
