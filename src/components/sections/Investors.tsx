"use client";

// import DarkLogo from "@/assets/vercel-icon-dark.svg";
// import LightLogo from "@/assets/vercel-icon-light.svg";
// import type { Sponsor } from "@/types";
import type { AnimatedProps } from "@/types/motion";
import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { sponsors } from "@/constants";


export function Sponsors({ id }: AnimatedProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id={id}
      className="w-full bg-background/95 py-16 text-foreground backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-12 bg-gradient-to-r bg-clip-text text-center text-4xl font-bold text-transparent">
          <span className="mb-4 text-4xl font-bold text-theme-gold md:text-5xl">
            Our Sponsors
          </span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          initial={{ x: "100%" }}
          // animate={{ x: "-50%" }}
          animate={{ x: "-225%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            // ease: "easeIn",
            // duration: 15,
            duration: 10,
            // duration: 150000,
          }}
          style={{ display: "flex", gap: "2rem" }}
        >
          {[...sponsors].map((sponsor, index) => (
            <div
              key={index}
              className="mx-8 flex flex-shrink-0 flex-col items-center justify-center"
              style={{ width: "200px" }}
            >
              <div className="relative mb-4 h-32 w-32">
                <Image
                  // src={iconSrc}
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-contain drop-shadow-lg"
                  style={{ filter: "brightness(1.05)" }}
                />
              </div>
              <span className="text-lg font-medium opacity-90">
                {sponsor.name}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
