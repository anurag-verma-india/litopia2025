"use client";
import React from "react";
import Image from "next/image";
import img from "@/assets/logo.webp";
import { motion } from "framer-motion";

interface ProfileSectionProps {
  id?: string;
}

export const ProfileSection = ({ id }: ProfileSectionProps) => {
  return (
    <section id={id} className="w-full py-16 bg-background my-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image and Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col items-center space-y-2"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-theme-gold/20">
              <Image
                src={img}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-theme-gold text-center">
                Mrs. Shalini Modh
              </h3>
              <p className="text-lg text-theme-gold/70 text-center">
                Faculty Coordinator
              </p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl font-bold text-theme-red"
              >
                Meet Our Faculty Coordinator
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-lg text-foreground/80 leading-relaxed">
                  With over 15 years of experience in literature and academia, Dr.
                  John Doe brings a wealth of knowledge and passion to our
                  literary community. His vision has been instrumental in shaping
                  Litopia into the vibrant hub of creativity it is today.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Under his guidance, we&apos;ve successfully organized numerous
                  literary events, workshops, and collaborative projects that have
                  enriched our college&apos;s cultural landscape.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
