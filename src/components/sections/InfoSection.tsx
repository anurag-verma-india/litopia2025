"use client";
import React from "react";
import Image from "next/image";
import img from "@/assets/logo.webp";
import { motion } from "framer-motion";

interface InfoSectionProps {
  id?: string;
}

export const InfoSection = ({ id }: InfoSectionProps) => {
  return (
    <section id={id} className="w-full py-16 bg-background my-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-theme-red"
            >
              Welcome to Litopia 2.0!
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg text-foreground/80 leading-relaxed">
                The biggest and grandest literary fest, the Medi-caps University
                has ever seen! Litopia 2.0, organized by The Sahityik Club at
                Medi-Caps University, is happening on March 11th and 12th, 2025,
                and {"it’s"} packed with exciting events you {"won’t"} want to
                miss!
              </p>
            </motion.div>

            {/* Stats or Features */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6"
            >
              {[
                { value: "5+", label: "Events" },
                { value: "2+", label: "Days" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className={`text-center md:text-left ${
                    index === 2 ? "col-span-2 md:col-span-1" : ""
                  }`}
                >
                  <h4 className="text-2xl font-bold text-theme-gold">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full aspect-square max-w-xl"
          >
            <div className="relative flex items-center justify-center w-full h-full overflow-hidden ">
              <Image
                src={img}
                alt="Info Section Image"
                className="object-cover w-full  transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
