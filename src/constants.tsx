import { PhoneCall, PartyPopper, Users, SquareChartGantt } from "lucide-react";
import { INavigationItems } from "./types/navigation";

const navigationIconClass = "w-4 h-4";
export const navigationItems: INavigationItems[] = [
  {
    title: "About",
    icon: <SquareChartGantt className={navigationIconClass} />,
    href: "#about",
  },
  {
    title: "Events",
    icon: <PartyPopper className={navigationIconClass} />,
    href: "#events",
  },
  {
    title: "Team",
    icon: <Users className={navigationIconClass} />,
    href: "#team",
  },
  {
    title: "Contact",
    icon: <PhoneCall className={navigationIconClass} />,
    href: "#contact",
  },
];
