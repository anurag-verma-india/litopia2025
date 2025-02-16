import { Hero } from "./sections/Hero";
import Tiles from "./sections/Tiles";
import { InfoSection } from "./sections/InfoSection";
import { Events } from "./sections/Events";
import { ProfileSection } from "./sections/ProfileSection";
import { TeamSection } from "./sections/TeamSection";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Hero id="top" />
      <InfoSection id="about" />
      <Events />
      <Tiles />
      <ProfileSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
