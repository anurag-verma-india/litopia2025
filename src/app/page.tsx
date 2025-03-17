import { Hero } from "../components/sections/Hero";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Analytics />
      <Hero id="top" />
    </div>
  );
}
