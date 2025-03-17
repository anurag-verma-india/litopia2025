"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { type AnimatedProps } from "@/types/motion";
import { useEffect, useState } from "react";

// Assets
import LitopiaLogo from "@/assets/logo.webp";
// import MedicapsDarkLogo from "@/assets/medicaps_dark_logo.png";
// import YearsLogo from "@/assets/logo_25.png";
// import SahityikDarkLogo from "@/assets/sahityik_light_logo.png";

// Animation variants for better performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
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

  if (!isLoaded) return null;

  return (
    <section
      id={id}
      className={`hero-section relative flex min-h-screen items-center justify-center overflow-hidden px-4 transition-opacity duration-300 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Effects - Optimized for mobile */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 -top-1/4 h-[100vw] w-[100vw] rounded-full bg-gradient-to-r from-theme-red/[0.03] via-theme-gold/[0.02] to-theme-yellow/[0.03] blur-2xl will-change-transform dark:from-theme-red/[0.05] dark:via-theme-gold/[0.03] dark:to-theme-yellow/[0.05] sm:from-theme-red/10 sm:via-theme-gold/5 sm:to-theme-yellow/10 dark:sm:from-theme-red/20 dark:sm:via-theme-gold/10 dark:sm:to-theme-yellow/10 md:h-[1000px] md:w-[1000px] md:blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 h-[100vw] w-[100vw] rounded-full bg-gradient-to-l from-theme-yellow/[0.03] via-theme-gold/[0.02] to-theme-red/[0.05] blur-2xl will-change-transform dark:from-theme-yellow/[0.05] dark:via-theme-gold/[0.03] dark:to-theme-red/[0.05] sm:from-theme-yellow/10 sm:via-theme-gold/5 sm:to-theme-red/20 dark:sm:from-theme-yellow/20 dark:sm:via-theme-gold/10 dark:sm:to-theme-red/20 md:h-[1000px] md:w-[1000px] md:blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/40 backdrop-blur-[1px] sm:via-background/10 sm:to-background/60"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative mx-auto max-w-4xl text-center"
        variants={containerVariants}
        initial={hasAnimated || prefersReducedMotion ? false : "hidden"}
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Image
            className="mx-auto block h-auto w-[300px] contrast-125 drop-shadow-2xl md:w-[500px]"
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
          variants={itemVariants}
          className="mb-6 text-4xl font-bold text-[#CCC] md:text-6xl lg:text-8xl"
        >
          <br />
          404 Error
        </motion.h1>

        {/* Subtitle */}
        <motion.h6
          variants={itemVariants}
          className="mb-4 bg-gradient-to-r from-theme-red via-theme-gold to-theme-yellow bg-clip-text text-lg font-bold uppercase text-transparent md:text-xl"
        >
          Sorry guys, you missed it
          <br />
          Litopia 2.0 is over
        </motion.h6>
      </motion.div>
    </section>
  );
}
