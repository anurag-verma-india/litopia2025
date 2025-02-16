import { PhoneCall, PartyPopper, Users, SquareChartGantt } from "lucide-react";
import { INavigationItems } from "./types/navigation";
import img from "@/assets/logo.webp";

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
    text: "Bookmarked",
    gridArea: { desktop: "speaker", mobile: "a" },
    emoji: "📚",
    imageUrl: "",
    title: "Bookmarked",
    description:
      "Meet fellow bibliophiles, dive into discussions about books and authors, and soak in the magic of literature",
  },
  {
    id: 2,
    text: "Detective Game",
    gridArea: { desktop: "medicaps", mobile: "b" },
    emoji: "🔍",
    imageUrl: "",
    title: "Detective Game",
    description:
      "Step into the shoes of a detective and solve thrilling cases to put your deduction skills to the test.",
  },
  {
    id: 3,
    text: "Medicaps ki Adalat",
    gridArea: { desktop: "bookmarked", mobile: "c" },
    emoji: "⚖️",
    imageUrl: "",
    title: "Medicaps ki Adalat",
    description:
      "Get ready for a heated and entertaining debate session on controversial topics that will keep everyone hooked",
  },
  {
    id: 4,
    text: "Anagat",
    gridArea: { desktop: "kite", mobile: "d" },
    emoji: "🎙️",
    imageUrl: "",
    title: "Anagat",
    description:
      "A powerful session featuring inspiring speakers sharing their experiences and stories to motivate and energize you",
  },
  {
    id: 5,
    text: "Anvarat",
    gridArea: { desktop: "harry", mobile: "e" },
    emoji: "🎭",
    imageUrl: "",
    title: "Anvarat",
    description:
      "Don’t miss the famous theatre group’s incredible performance at the University Auditorium – it’s going to be unforgettable!",
  },
  {
    id: 6,
    text: "Squid Games",
    gridArea: { desktop: "podcast", mobile: "f" },
    emoji: "🎧",
    imageUrl: "",
    title: "Squid Games",
    description:
      "Experience the excitement of a gamified version of the hit web series – pure fun guaranteed!",
  },
  {
    id: 7,
    text: "Harry Potter Quiz",
    gridArea: { desktop: "detective", mobile: "g" },
    emoji: "🪄",
    imageUrl: "",
    title: "Harry Potter Quiz",
    description:
      "Potterheads, this one’s for you! Join a fun-filled trivia session with amazing prizes waiting to be won.",
  },
  {
    id: 8,
    text: "Mic Drop",
    gridArea: { desktop: "mic", mobile: "h" },
    emoji: "🎤",
    imageUrl: "",
    title: "Mic Drop",
    description:
      "Show off your talent in singing, poetry, or comedy and perform live in front of a cheering audience.",
  },
];

export const events = [
  {
    id: 1,
    title: "Bookmarked",
    date: "March 11, 2025",
    description:
      "Meet fellow bibliophiles, dive into discussions about books and authors, and soak in the magic of literature",
    image: img,
    tag: "Literature",
  },
  {
    id: 2,
    title: "Detective Game",
    date: "March 11, 2025",
    description:
      "Step into the shoes of a detective and solve thrilling cases to put your deduction skills to the test.",
    image: img,
    tag: "Mystery",
  },
  {
    id: 3,
    title: "Medicaps Ki Aadalat",
    date: "March 11, 2025",
    description:
      "Get ready for a heated and entertaining debate session on controversial topics that will keep everyone hooked",
    image: img,
    tag: "Debate",
  },
  {
    id: 4,
    title: "Anagat",
    date: "March 11, 2025",
    description:
      "A powerful session featuring inspiring speakers sharing their experiences and stories to motivate and energize you",
    image: img,
    tag: "Motivational",
  },
  {
    id: 5,
    title: "Anvarat",
    date: "March 12, 2025",
    description:
      "Don’t miss the famous theatre group’s incredible performance at the University Auditorium – it’s going to be unforgettable!",
    image: img,
    tag: "Theatre",
  },
  {
    id: 6,
    title: "Squid Games",
    date: "March 12, 2025",
    description:
      "Experience the excitement of a gamified version of the hit web series – pure fun guaranteed!",
    image: img,
    tag: "Adventure",
  },
  {
    id: 7,
    title: "Harry Potter Quiz",
    date: "March 12, 2025",
    description:
      "Potterheads, this one’s for you! Join a fun-filled trivia session with amazing prizes waiting to be won.",
    image: img,
    tag: "Quiz",
  },
  {
    id: 8,
    title: "Mic Drop",
    date: "March 12, 2025",
    description:
      "Show off your talent in singing, poetry, or comedy and perform live in front of a cheering audience.",
    image: img,
    tag: "Entertainment",
  },
];
