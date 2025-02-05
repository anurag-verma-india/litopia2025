"use client";

import type { AnimatedProps } from "@/types/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import LitopiaLogo from "./../../assets/logo.webp";
import MedicapsDarkLogo from "./../../assets/medicaps_dark_logo.png";
import YearsLogo from "./../../assets/logo_25.png";
import SahityikDarkLogo from "./../../assets/sahityik_light_logo.png";

export function Hero({ id }: AnimatedProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden hero-section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-gradient-to-r from-theme-red/[0.03] via-theme-gold/[0.02] to-theme-yellow/[0.03] sm:from-theme-red/10 sm:via-theme-gold/5 sm:to-theme-yellow/10 dark:from-theme-red/[0.05] dark:via-theme-gold/[0.03] dark:to-theme-yellow/[0.05] dark:sm:from-theme-red/20 dark:sm:via-theme-gold/10 dark:sm:to-theme-yellow/10 rounded-full blur-3xl animate-slow-spin"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-gradient-to-l from-theme-yellow/[0.03] via-theme-gold/[0.02] to-theme-red/[0.05] sm:from-theme-yellow/10 sm:via-theme-gold/5 sm:to-theme-red/20 dark:from-theme-yellow/[0.05] dark:via-theme-gold/[0.03] dark:to-theme-red/[0.05] dark:sm:from-theme-yellow/20 dark:sm:via-theme-gold/10 dark:sm:to-theme-red/20 rounded-full blur-3xl animate-slow-spin-reverse"></div>
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-theme-red/[0.02] via-theme-gold/[0.02] to-transparent sm:from-theme-red/5 sm:via-theme-gold/5 dark:from-theme-red/[0.03] dark:via-theme-gold/[0.02] dark:sm:from-theme-red/10 dark:sm:via-theme-gold/5 rounded-full blur-3xl animate-slow-spin-reverse delay-75"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-bl from-theme-yellow/[0.02] via-theme-gold/[0.02] to-transparent sm:from-theme-yellow/5 sm:via-theme-gold/5 dark:from-theme-yellow/[0.03] dark:via-theme-gold/[0.02] dark:sm:from-theme-yellow/10 dark:sm:via-theme-gold/5 rounded-full blur-3xl animate-slow-spin delay-75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/40 sm:via-background/10 sm:to-background/60"></div>
        <div className="absolute inset-0 opacity-10 sm:opacity-20 mix-blend-overlay"></div>
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            className="block mx-auto drop-shadow-2xl contrast-125"
            width={500}
            // height={500}
            alt="Litopia Logo"
            src={LitopiaLogo}
          />
        </motion.p>

        <motion.h1
          className="text-6xl text-[#CCC] md:text-8xl font-bold mb-6 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          The Literature Fest
        </motion.h1>
        <motion.h6
          className="text-[#222111] text-xl uppercase font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-theme-red via-theme-gold to-theme-yellow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Presented By
        </motion.h6>

        <div className="flex items-center justify-center gap-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              className="block mx-auto drop-shadow-2xl contrast-125"
              width={100}
              // height={500}
              alt="Medicaps Logo"
              src={MedicapsDarkLogo}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              className="block mx-auto drop-shadow-2xl contrast-125"
              width={100}
              // height={500}
              alt="25 years Logo"
              src={YearsLogo}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              className="block mx-auto drop-shadow-2xl contrast-125"
              width={100}
              // height={500}
              alt="Sahityik Logo"
              src={SahityikDarkLogo}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
