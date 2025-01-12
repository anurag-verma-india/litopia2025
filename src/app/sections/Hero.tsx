"use client";

import type { AnimatedProps } from "@/types/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import LitopiaLogo from "./../../assets/logo.webp";
import MedicapsLogo from "./../../assets/medicaps_logo.png";
import YearsLogo from "./../../assets/logo_25.png";
import SahityikLogo from "./../../assets/sahityik_logo.png";

export function Hero({ id }: AnimatedProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden hero-section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-red-500/30 dark:from-pink-500/80 dark:via-purple-500/20 dark:to-red-500/20 rounded-full blur-3xl animate-slow-spin"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-gradient-to-l from-red-500/30 via-pink-500/30 to-purple-500/70 dark:from-red-500/50 dark:via-pink-500/50 dark:to-purple-500/40 rounded-full blur-3xl animate-slow-spin-reverse"></div>
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-transparent dark:from-pink-500/10 dark:via-purple-500/10 rounded-full blur-3xl animate-slow-spin-reverse delay-75"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-bl from-red-500/20 via-purple-500/20 to-transparent dark:from-red-500/10 dark:via-purple-500/10 rounded-full blur-3xl animate-slow-spin delay-75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>
        <div className="absolute inset-0 opacity-30 mix-blend-overlay"></div>
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
          className="text-6xl text-[#222111] md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 pb-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          The Literature Fest
        </motion.h1>
        <motion.h6
          className="text-[#222111] text-xl uppercase font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 "
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
              src={MedicapsLogo}
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
              src={SahityikLogo}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
