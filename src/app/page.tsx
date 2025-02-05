import { Hero } from "./sections/Hero";
// import { Benefits } from "./sections/Benefits";
// import { FAQ } from "./sections/Faq";
// import { Footer } from "./sections/Footer";
// import { Sponsors } from "./sections/Investors";
// import { Testimonials } from "./sections/Testimonials";
import Tiles from "./sections/Tiles";
import { InfoSection } from "./sections/InfoSection";
import { Events } from "./sections/Events";
import { ProfileSection } from "./sections/ProfileSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Hero id="top" />
      <InfoSection id="about" />
      <Events />
      <Tiles />
      <ProfileSection />
      {/* <Benefits id="benefits" />
            <Sponsors id="investors" />
            <Testimonials id="testimonials" />
            <FAQ id="faq" />
            <Footer /> */}
    </div>
  );
}
