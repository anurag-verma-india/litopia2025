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

export const tiles = [
  {
    id: 1,
    text: "Speaker Session",
    gridArea: { desktop: "speaker", mobile: "a" },
    emoji: "🎤",
    imageUrl: "",
    title: "Speaker Sessions",
    description:
      "Join our engaging speaker sessions featuring industry experts and thought leaders sharing their insights and experiences.",
  },
  {
    id: 2,
    text: "Medicaps Ki Aadalat",
    gridArea: { desktop: "medicaps", mobile: "b" },
    emoji: "⚖️",
    imageUrl: "",
    title: "Medicaps Ki Aadalat",
    description:
      "A unique platform where students can voice their opinions and discuss important campus matters in a structured format.",
  },
  {
    id: 3,
    text: "Bookmarked Meeting",
    gridArea: { desktop: "bookmarked", mobile: "c" },
    emoji: "📑",
    imageUrl: "",
    title: "Bookmarked Meeting",
    description:
      "Regular book club meetings where literature enthusiasts come together to discuss and explore various genres and authors.",
  },
  {
    id: 4,
    text: "Kite Festival",
    gridArea: { desktop: "kite", mobile: "d" },
    emoji: "🪁",
    imageUrl: "",
    title: "Kite Festival",
    description:
      "Annual celebration of the joy of kite flying, bringing together the community in a colorful and festive atmosphere.",
  },
  {
    id: 5,
    text: "Harry Potter Quiz",
    gridArea: { desktop: "harry", mobile: "e" },
    emoji: "⚡",
    imageUrl: "",
    title: "Harry Potter Quiz",
    description:
      "Test your knowledge of the wizarding world in this exciting quiz event for Potterheads.",
  },
  {
    id: 6,
    text: "Podcast",
    gridArea: { desktop: "podcast", mobile: "f" },
    emoji: "🎧",
    imageUrl: "",
    title: "Litopia Podcast",
    description:
      "Listen to thought-provoking discussions, interviews, and stories from our community members.",
  },
  {
    id: 7,
    text: "Detective Game",
    gridArea: { desktop: "detective", mobile: "g" },
    emoji: "🔍",
    imageUrl: "",
    title: "Detective Game",
    description:
      "Put your detective skills to the test in this immersive mystery-solving experience.",
  },
  {
    id: 8,
    text: "Open Mic",
    gridArea: { desktop: "mic", mobile: "h" },
    emoji: "🎭",
    imageUrl: "",
    title: "Open Mic Night",
    description:
      "Share your talents and creativity at our open mic events featuring poetry, music, and performances.",
  },
];
