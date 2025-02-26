import { PhoneCall, PartyPopper, Users, SquareChartGantt } from "lucide-react";
import { INavigationItems } from "./types/navigation";
// import img from "@/assets/logo.webp";
import AdalatImg from "@/assets/events/adalat.jpeg";
// import AnavrattImg from "@/assets/events/anavratt.jpg";
// import BookmarkedImg from "@/assets/events/bookmarked.jpg";
// import DetectiveImg from "@/assets/events/detective.jpg";
// import harryPotterImg from "@/assets/events/harry-potter-quiz.png";
// import LegacyImg from "@/assets/events/legacy.jpg";
// import SquidGameImg from "@/assets/events/squid-game-2.jpg";
// import MicDropImg from "@/assets/events/mic-drop.jpeg";

// import AdalatImg from "@/assets/events/";
import LitMashal from "@/assets/events/poster-lit-mashal.png";
import AnavrattImg from "@/assets/events/poster-anavrat.png";
import BookmarkedImg from "@/assets/events/poster-bookmarked.jpeg";
import DetectiveImg from "@/assets/events/poster-detective-game-v1.1.png";
import harryPotterImg from "@/assets/events/poster-harry-potter-quiz.png";
import LegacyImg from "@/assets/events/poster-the-legacy.png";
import SquidGameImg from "@/assets/events/poster-squid-game-v1.0.png";
import MicDropImg from "@/assets/events/poster-mic-drop-v1.0.png";

import shivani from "@/assets/team/shivani_singh.webp";
// import anurag from "@/assets/team/anurag.webp";
import anurag from "@/assets/team/agrawal.jpeg";
import akshan from "@/assets/team/akshansh.webp";
import lav from "@/assets/team/luv-tiwari.webp";
import palak from "@/assets/team/palak.webp";
import anugrah from "@/assets/team/anugrah.webp";
import viraj from "@/assets/team/viraj.webp";
import rajpawar from "@/assets/team/raj.webp";
import divyanshu from "@/assets/team/divyanshu.webp";
import fatema from "@/assets/team/fatema.webp";
import pulkit from "@/assets/team/pulkit.webp";
import srashti from "@/assets/team/srashti.webp";
import vinayak from "@/assets/team/vinayak.webp";
import shashank from "@/assets/team/shashank.webp";
// import divita from "@/assets/team/divita.webp";
import pawan from "@/assets/team/pawan.webp";
import sakshi from "@/assets/team/sakshi.webp";
import tasneem from "@/assets/team/tasneem.webp";
import mannat from "@/assets/team/mannat.webp";
import riddhima from "@/assets/team/ridhima.webp";
import abbas from "@/assets/team/abbas.webp";
// import devendra from "@/assets/team/600x400.svg";
import devendra from "@/assets/team/devendra.webp";

import DrRupaliChaturvedi from "@/assets/faculty/Dr. Rupali Chaturvedi.png";
import DrShaliniModh from "@/assets/faculty/Dr. Shalini Modh.jpg";
import MsAayushiBharadwaj from "@/assets/faculty/Ms. Aayushi Bharadwaj.jpg";
import MsShubhrataKanungo from "@/assets/faculty/Ms. Shubhrata Kanungo.jpg";

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

// export const tiles = [
//   {
//     id: 1,
//     text: "Bookmarked",
//     gridArea: { desktop: "speaker", mobile: "a" },
//     emoji: "📚",
//     imageUrl: "",
//     title: "Bookmarked",
//     description:
//       "Meet fellow bibliophiles, dive into discussions about books and authors, and soak in the magic of literature",
//   },
//   {
//     id: 2,
//     text: "Detective Game",
//     gridArea: { desktop: "medicaps", mobile: "b" },
//     emoji: "🔍",
//     imageUrl: "",
//     title: "Detective Game",
//     description:
//       "Step into the shoes of a detective and solve thrilling cases to put your deduction skills to the test.",
//   },
//   {
//     id: 3,
//     text: "Medicaps ki Adalat",
//     gridArea: { desktop: "bookmarked", mobile: "c" },
//     emoji: "⚖️",
//     imageUrl: "",
//     title: "Medicaps ki Adalat",
//     description:
//       "Get ready for a heated and entertaining debate session on controversial topics that will keep everyone hooked",
//   },
//   {
//     id: 4,
//     text: "The Legacy",
//     gridArea: { desktop: "kite", mobile: "d" },
//     emoji: "🎙️",
//     imageUrl: "",
//     title: "The Legacy",
//     description:
//       "A powerful session featuring inspiring speakers sharing their experiences and stories to motivate and energize you",
//   },
//   {
//     id: 5,
//     text: "Anvarat",
//     gridArea: { desktop: "harry", mobile: "e" },
//     emoji: "🎭",
//     imageUrl: "",
//     title: "Anvarat",
//     description:
//       "Don’t miss the famous theatre group’s incredible performance at the University Auditorium – it’s going to be unforgettable!",
//   },
//   {
//     id: 6,
//     text: "Squid Games",
//     gridArea: { desktop: "podcast", mobile: "f" },
//     emoji: "🎧",
//     imageUrl: "",
//     title: "Squid Games",
//     description:
//       "Experience the excitement of a gamified version of the hit web series – pure fun guaranteed!",
//   },
//   {
//     id: 7,
//     text: "Harry Potter Quiz",
//     gridArea: { desktop: "detective", mobile: "g" },
//     emoji: "🪄",
//     imageUrl: "",
//     title: "Harry Potter Quiz",
//     description:
//       "Potterheads, this one’s for you! Join a fun-filled trivia session with amazing prizes waiting to be won.",
//   },
//   {
//     id: 8,
//     text: "Mic Drop",
//     gridArea: { desktop: "mic", mobile: "h" },
//     emoji: "🎤",
//     imageUrl: "",
//     title: "Mic Drop",
//     description:
//       "Show off your talent in singing, poetry, or comedy and perform live in front of a cheering audience.",
//   },
// ];

export const events = [
  {
    id: 0,
    title: "Lit Mashal",
    date: "March 11, 2025",
    time: "10 AM",
    description: "Litopia 2.0 inauguration ceremony",
    image: LitMashal,
    tag: "Quiz",
  },
  {
    id: 1,
    title: "Harry Potter Quiz",
    date: "March 11, 2025",
    time: "11 AM",
    description:
      "Potterheads, this one’s for you! Join a fun-filled trivia session with amazing prizes waiting to be won.",
    image: harryPotterImg,
    registration: "https://konfhub.com/harry-potter-quiz",
    tag: "Quiz",
  },
  {
    id: 2,
    title: "Squid Games",
    date: "March 11, 2025",
    description:
      "Experience the excitement of a gamified version of the hit web series – pure fun guaranteed!",
    image: SquidGameImg,
    registration: "https://konfhub.com/squid-game-47f5c9e2",
    tag: "Adventure",
  },
  {
    id: 3,
    title: "The Legacy",
    date: "March 11, 2025",
    time: "1 PM to 3 PM",
    description:
      "A powerful session featuring inspiring speakers sharing their experiences and stories to motivate and energize you",
    image: LegacyImg,
    tag: "Motivational",
  },
  {
    id: 4,
    title: "Detective Game",
    date: "March 11, 2025",
    time: "3 PM to 5 PM",
    description:
      "Step into the shoes of a detective and solve thrilling cases to put your deduction skills to the test.",
    image: DetectiveImg,
    registration: "https://konfhub.com/detective-game",
    tag: "Mystery",
  },
  // -------------------------------- 1 end

  {
    id: 5,
    title: "Bookmarked",
    date: "March 12, 2025",
    time: "11:30 PM to 1 PM (tentative)",
    description:
      "Meet fellow bibliophiles, dive into discussions about books and authors, and soak in the magic of literature",
    // image: img,
    image: BookmarkedImg,
    tag: "Literature",
  },
  {
    id: 6,
    title: "Anvarat",
    date: "March 12, 2025",
    time: "10:30 AM to 11:30 AM",
    description:
      "Don’t miss the famous theatre group’s incredible performance at the University Auditorium – it’s going to be unforgettable!",
    image: AnavrattImg,
    tag: "Theatre",
  },
  {
    id: 7,
    title: "Medicaps Ki Aadalat",
    date: "March 11, 2025",
    time: "12:30 PM to 2:45 PM",
    description:
      "Get ready for a heated and entertaining debate session on controversial topics that will keep everyone hooked. (Free for audience)",
    image: AdalatImg,
    registration: "https://forms.gle/YFiCC3S8Y7UYiYBt6",
    // registration: "example.com",
    tag: "Drama",
  },
  ,
  {
    id: 8,
    title: "Mic Drop",
    date: "March 12, 2025",
    time: "3 PM to 5 PM",
    description:
      "Show off your talent in singing, poetry, or comedy and perform live in front of a cheering audience. (Free for audience)",
    image: MicDropImg,
    registration: "https://forms.gle/BEam3ByEGoZY9vmB8",
    // registration: "example.com",
    tag: "Entertainment",
  },
  // -------------------------------- 2 end
];

export const teamMembers = [
  {
    id: 1,
    name: "Shivani Singh",
    role: "President",
    image: shivani,
    socials: {
      instagram: "singh.shivani.xx",
      linkedin: "shivani-singh-34a509272",
    },
  },
  {
    id: 2,
    name: "Anurag agrawal",
    role: "Vice president",
    image: anurag,
    socials: {
      instagram: "anurag_60521",
      linkedin: "anurag-agrawal-4735b4262",
    },
  },
  {
    id: 3,
    name: "Akshansh singh pal",
    role: "Technical Head",
    image: akshan,
    socials: {
      instagram: "akkshansshhh",
      linkedin: "akshansh-singh-pal-5a576a288",
    },
  },
  {
    id: 4,
    name: "Lav Tiwari",
    role: "social media head",
    image: lav,
    socials: {
      instagram: "thelavtiwari",
      linkedin: "",
    },
  },
  {
    id: 5,
    name: "Palak shahdadpuri",
    role: "content head",
    image: palak,
    socials: {
      instagram: "palakshahdadpuri",
      linkedin: "",
    },
  },
  {
    id: 6,
    name: "Anugrah sharma",
    role: "operation head",
    image: anugrah,
    socials: {
      instagram: "anu_g_rah._",
      linkedin: "anu-g-rah",
    },
  },
  {
    id: 7,
    name: "Viraj Agrawal",
    role: "operation co head",
    image: viraj,
    socials: {
      instagram: "agrawal__viraj",
      linkedin: "virajagrawal15",
    },
  },
  {
    id: 8,
    name: "Raj Pawar",
    role: "Core technical executive",
    image: rajpawar,
    socials: {
      instagram: "raj__pawarr",
      linkedin: "raj-pawar-184a28292",
    },
  },
  {
    id: 9,
    name: "Divyanshu Dawande",
    role: "PR Head",
    image: divyanshu,
    socials: {
      instagram: "d___divyanshu",
      linkedin: "divyanshu-dawande-3539131b7",
    },
  },
  {
    id: 10,
    name: "Abbas bhanpura wala",
    role: "Core technical executive",
    image: abbas,
    socials: {
      instagram: "abbas_bhanpura_wala",
      linkedin: "abbas-bhanpura-wala",
    },
  },
  {
    id: 11,
    name: "Mannat Bhatia",
    role: "core content executive",
    image: mannat,
    socials: {
      instagram: "mant.17",
      linkedin: "mannatb17",
    },
  },
  {
    id: 12,
    name: "Vinayak oberoi",
    role: "core PR executive",
    image: vinayak,
    socials: {
      instagram: "Vinayakkk_04 ",
      linkedin: "vinayak-oberoi-622a22324",
    },
  },
  {
    id: 13,
    name: "Pawan Kumar Yadav",
    role: "graphics executive",
    image: pawan,
    socials: {
      instagram: "scientist7292",
      linkedin: "",
    },
  },
  {
    id: 14,
    name: "Fatema Patanwala",
    role: "graphics head",
    image: fatema,
    socials: {
      instagram: "_fatemapatan",
      linkedin: "fatema-patanwala-9998022a7",
    },
  },
  {
    id: 15,
    name: "Shashank Singh Chouhan",
    role: "technical executive",
    image: shashank,
    socials: {
      instagram: "_shashank__1_",
      linkedin: "shashanksinghchouhan",
    },
  },
  {
    id: 16,
    name: "Pulkit Vajpayee",
    role: "operation executive",
    image: pulkit,
    socials: {
      instagram: "pulkit_vajpayee",
      linkedin: "pulkit-vajpayee-1b82ab326",
    },
  },
  {
    id: 17,
    name: "Divita Barfa",
    role: "content executive",
    image: "",
    socials: {
      instagram: "sincewemustdie",
      linkedin: "divita-barfa-a8abb7227",
    },
  },
  {
    id: 18,
    name: "Srashti Goyal",
    role: "content executive",
    image: srashti,
    socials: {
      instagram: "error404",
      linkedin: "srashti-goyal-9aaa77313",
    },
  },
  {
    id: 19,
    name: "Riddhima Kaushal",
    role: "core content executive",
    image: riddhima,
    socials: {
      instagram: "riddhimakaushal_17",
      linkedin: "riddhima-kaushal-17092005rk",
    },
  },
  {
    id: 20,
    name: "Tasneem dewaswala",
    role: "core content executive",
    image: tasneem,
    socials: {
      instagram: "error404",
      linkedin: "tasneem-dewas-98b2332ab",
    },
  },
  {
    id: 21,
    name: "Sakshi Sharma",
    role: "core operations executive",
    image: sakshi,
    socials: {
      instagram: "saaksshii05_",
      linkedin: "",
    },
  },
  {
    id: 21,
    name: "Devendra kalmodia",
    role: "technical executive",
    image: devendra,
    socials: {
      instagram: "Devendra_kalmodiya",
      linkedin: "devendra-kalmodiya-633809277",
    },
  },
];

export const facultyData = [
  {
    name: "Dr. Shalini Modh",
    role: "Faculty Incharge",
    image: DrShaliniModh,
  },
  {
    name: "Ms. Shubhrata Kanungo",
    role: "Faculty Coordinator",
    image: MsShubhrataKanungo,
  },
  {
    name: "Dr.Rupali Chaturvedi",
    role: "Faculty Coordinator",
    image: DrRupaliChaturvedi,
  },
  {
    name: "Ms. Aayushi Bharadwaj",
    role: "Faculty Coordinator",
    image: MsAayushiBharadwaj,
  },
];
