import { Hero } from "../components/sections/Hero";
// import Tiles from "../components/sections/Tiles";
import { InfoSection } from "../components/sections/InfoSection";
import { Events } from "../components/sections/Events";
import { ProfileSection } from "../components/sections/ProfileSection";
import { TeamSection } from "../components/sections/TeamSection";
import { Footer } from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Sponsors } from "@/components/sections/Investors";

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Analytics />
      <Hero id="top" />
      <InfoSection id="about" />
      <Events />
      {/* <Tiles /> */}
      <ProfileSection />
      <TeamSection />
      <Sponsors id={"123"} />
      <Footer />
    </div>
  );
}
