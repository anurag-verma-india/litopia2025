import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import { navigationItems } from "@/constants";

export function Navigation() {
  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-4">
          <NavigationMenu className="flex items-center justify-center bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 backdrop-blur-md px-6 py-2 rounded-full border border-foreground/10">
            <NavigationMenuList className="flex items-center gap-4">
              {navigationItems.map((item, i) => (
                <NavigationMenuItem className="px-4" key={`nav-item-${i}`}>
                  <NavigationMenuLink
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                  >
                    {item.icon}{" "}
                    <span className="hidden md:inline">{item.title}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href={"#"}
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <ModeToggle />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
