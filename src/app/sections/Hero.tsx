"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { type AnimatedProps } from "@/types/motion";
import { useEffect, useState } from "react";

// Assets
import LitopiaLogo from "@/assets/logo.webp";
import MedicapsDarkLogo from "@/assets/medicaps_dark_logo.png";
import YearsLogo from "@/assets/logo_25.png";
import SahityikDarkLogo from "@/assets/sahityik_light_logo.png";

// Constants
const ANIMATION_DURATION = {
  FAST: 0.4,
  MEDIUM: 0.5,
};

const ANIMATION_DELAY = {
  LOGO: 0,
  TITLE: 0.2,
  SUBTITLE: 0.3,
  SPONSORS: 0.4,
};

export function Hero({ id }: AnimatedProps) {
  const prefersReducedMotion = useReducedMotion();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after mount
    setIsLoaded(true);

    // Check if animation has played before
    const hasPlayedBefore = localStorage.getItem("animationPlayed");
    if (hasPlayedBefore) {
      setHasAnimated(true);
    } else {
      localStorage.setItem("animationPlayed", "true");
    }
  }, []);

  // Base animation config that respects user preferences
  const baseAnimation =
    prefersReducedMotion || hasAnimated
      ? { animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: ANIMATION_DURATION.FAST },
        };

  return (
    <section
      id={id}
      className={`relative min-h-screen flex items-center justify-center px-4 overflow-hidden hero-section transition-opacity duration-300 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Effects - Optimized for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[100vw] h-[100vw] md:w-[1000px] md:h-[1000px] bg-gradient-to-r from-theme-red/[0.03] via-theme-gold/[0.02] to-theme-yellow/[0.03] sm:from-theme-red/10 sm:via-theme-gold/5 sm:to-theme-yellow/10 dark:from-theme-red/[0.05] dark:via-theme-gold/[0.03] dark:to-theme-yellow/[0.05] dark:sm:from-theme-red/20 dark:sm:via-theme-gold/10 dark:sm:to-theme-yellow/10 rounded-full blur-2xl md:blur-3xl will-change-transform"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[100vw] h-[100vw] md:w-[1000px] md:h-[1000px] bg-gradient-to-l from-theme-yellow/[0.03] via-theme-gold/[0.02] to-theme-red/[0.05] sm:from-theme-yellow/10 sm:via-theme-gold/5 sm:to-theme-red/20 dark:from-theme-yellow/[0.05] dark:via-theme-gold/[0.03] dark:to-theme-red/[0.05] dark:sm:from-theme-yellow/20 dark:sm:via-theme-gold/10 dark:sm:to-theme-red/20 rounded-full blur-2xl md:blur-3xl will-change-transform"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/40 sm:via-background/10 sm:to-background/60 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          {...baseAnimation}
          transition={{
            duration: ANIMATION_DURATION.FAST,
            delay: hasAnimated ? 0 : ANIMATION_DELAY.LOGO,
          }}
        >
          <Image
            className="block mx-auto drop-shadow-2xl contrast-125 w-[300px] md:w-[500px] h-auto"
            width={500}
            height={200}
            alt="Litopia Logo"
            src={LitopiaLogo}
            priority
            loading="eager"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-[#CCC]"
          {...baseAnimation}
          transition={{
            duration: ANIMATION_DURATION.MEDIUM,
            delay: hasAnimated ? 0 : ANIMATION_DELAY.TITLE,
          }}
        >
          The Literature Fest
        </motion.h1>

        {/* Subtitle */}
        <motion.h6
          className="text-lg md:text-xl uppercase font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-theme-red via-theme-gold to-theme-yellow"
          {...baseAnimation}
          transition={{
            duration: ANIMATION_DURATION.MEDIUM,
            delay: hasAnimated ? 0 : ANIMATION_DELAY.SUBTITLE,
          }}
        >
          Presented By
        </motion.h6>

        {/* Sponsor Logos */}
        <div className="flex items-center justify-center gap-4 relative">
          {[
            { src: MedicapsDarkLogo, alt: "Medicaps Logo" },
            { src: YearsLogo, alt: "25 years Logo" },
            { src: SahityikDarkLogo, alt: "Sahityik Logo" },
          ].map((logo) => (
            <motion.div
              key={logo.alt}
              {...baseAnimation}
              transition={{
                duration: ANIMATION_DURATION.MEDIUM,
                delay: hasAnimated ? 0 : ANIMATION_DELAY.SPONSORS,
              }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              className="w-[80px] md:w-[100px]"
            >
              <Image
                className="block mx-auto drop-shadow-2xl contrast-125 w-full h-auto"
                width={100}
                height={100}
                alt={logo.alt}
                src={logo.src}
                loading="eager"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
