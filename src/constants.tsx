import { PhoneCall, PartyPopper, Users, SquareChartGantt } from "lucide-react";
import { INavigationItems } from "./types/navigation";
import img from "@/assets/logo.webp";
import AdalatImg from "@/assets/events/adalat.jpg";
import AnavrattImg from "@/assets/events/anavratt.jpg";
import BookmarkedImg from "@/assets/events/bookmarked.jpg";
import DetectiveImg from "@/assets/events/detective.jpg";
import harryPotterImg from "@/assets/events/harry-potter-quiz.png";
import LegacyImg from "@/assets/events/legacy.jpg";
import SquidGameImg from "@/assets/events/squid-game.webp";
import MicDropImg from "@/assets/events/mic-drop-mic.jpg";

import shivani from "@/assets/team/shivani_singh.webp";
import anurag from "@/assets/team/anurag.webp";
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
        text: "The Legacy",
        gridArea: { desktop: "kite", mobile: "d" },
        emoji: "🎙️",
        imageUrl: "",
        title: "The Legacy",
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
        // image: img,
        image: BookmarkedImg,
        tag: "Literature",
    },
    {
        id: 2,
        title: "Detective Game",
        date: "March 11, 2025",
        description:
            "Step into the shoes of a detective and solve thrilling cases to put your deduction skills to the test.",
        image: DetectiveImg,
        tag: "Mystery",
    },
    {
        id: 3,
        title: "Medicaps Ki Aadalat",
        date: "March 11, 2025",
        description:
            "Get ready for a heated and entertaining debate session on controversial topics that will keep everyone hooked",
        image: AdalatImg,
        tag: "Drama",
    },
    {
        id: 4,
        title: "The Legacy",
        date: "March 11, 2025",
        description:
            "A powerful session featuring inspiring speakers sharing their experiences and stories to motivate and energize you",
        image: LegacyImg,
        tag: "Motivational",
    },
    {
        id: 5,
        title: "Anvarat",
        date: "March 12, 2025",
        description:
            "Don’t miss the famous theatre group’s incredible performance at the University Auditorium – it’s going to be unforgettable!",
        image: AnavrattImg,
        tag: "Theatre",
    },
    {
        id: 6,
        title: "Squid Games",
        date: "March 12, 2025",
        description:
            "Experience the excitement of a gamified version of the hit web series – pure fun guaranteed!",
        image: SquidGameImg,
        tag: "Adventure",
    },
    {
        id: 7,
        title: "Harry Potter Quiz",
        date: "March 12, 2025",
        description:
            "Potterheads, this one’s for you! Join a fun-filled trivia session with amazing prizes waiting to be won.",
        image: harryPotterImg,
        tag: "Quiz",
    },
    {
        id: 8,
        title: "Mic Drop",
        date: "March 12, 2025",
        description:
            "Show off your talent in singing, poetry, or comedy and perform live in front of a cheering audience.",
        image: MicDropImg,
        tag: "Entertainment",
    },
];

export const teamMembers = [
    {
        id: 1,
        name: "Shivani Singh",
        role: "President",
        image: shivani,
        socials: {
            instagram: "",
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
            instagram: "",
            linkedin: "akshansh-singh-pal-5a576a288",
        },
    },
    {
        id: 4,
        name: "Lav Tiwari",
        role: "social media head",
        image: lav,
        socials: {
            instagram: "",
            linkedin: "",
        },
    },
    {
        id: 5,
        name: "Palak shahdadpuri",
        role: "content head",
        image: palak,
        socials: {
            instagram: "",
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
            instagram: "",
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
            instagram: "",
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
            instagram: "vinayakkk_04",
            linkedin: "vinayak-oberoi-622a22324",
        },
    },
    {
        id: 13,
        name: "Pawan Kumar Yadav",
        role: "graphics executive",
        image: pawan,
        socials: {
            instagram: "",
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
            instagram: "shashank1",
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
            instagram: "",
            linkedin: "divita-barfa-a8abb7227",
        },
    },
    {
        id: 18,
        name: "Srashti Goyal",
        role: "content executive",
        image: srashti,
        socials: {
            instagram: "",
            linkedin: "srashti-goyal-9aaa77313",
        },
    },
    {
        id: 19,
        name: "Riddhima Kaushal",
        role: "core content executive",
        image: riddhima,
        socials: {
            instagram: "",
            linkedin: "riddhima-kaushal-17092005rk",
        },
    },
    {
        id: 20,
        name: "Tasneem dewaswala",
        role: "core content executive",
        image: tasneem,
        socials: {
            instagram: "",
            linkedin: "tasneem-dewas-98b2332ab",
        },
    },
    {
        id: 21,
        name: "Sakshi Sharma",
        role: "core operations executive",
        image: sakshi,
        socials: {
            instagram: "",
            linkedin: "",
        },
    },
    {
        id: 21,
        name: "Devendra kalmodia",
        role: "technical executive",
        image: sakshi,
        socials: {
            instagram: "devendra-kalmodiya",
            linkedin: "devendra-kalmodiya-633809277",
        },
    },
];
