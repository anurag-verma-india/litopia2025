"use client";
// import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import Image from "next/image";
// import img from "@/assets/logo.webp";
import { motion } from "framer-motion";
import { facultyData } from "@/constants";

interface ProfileSectionProps {
  id?: string;
}

export const TeamCard = ({ member }: { member: (typeof facultyData)[0] }) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-theme-gold/10 bg-zinc-900/50 transition-all duration-300 hover:border-theme-gold/20">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
        <Image
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Social Icons - Appear on Hover */}
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="mb-1 text-xl font-bold capitalize text-theme-gold">
          {member.name}
        </h3>
        <p className="capitalize text-theme-gold/70">{member.role}</p>
        {/* <div className="mt-3 flex items-center justify-center gap-4 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={` https://www.instagram.com/${member.socials?.instagram}/`}
            target="_blank"
            className="rounded-full border border-theme-gold/10 bg-theme-red/20 p-2 transition-colors hover:bg-theme-red/30"
          >
            <Instagram className="h-5 w-5 text-theme-gold" />
          </a>
          <a
            href={` https://www.linkedin.com/in/${member.socials?.linkedin}/`}
            target="_blank"
            className="rounded-full border border-theme-gold/10 bg-theme-red/20 p-2 transition-colors hover:bg-theme-red/30"
          >
            <Linkedin className="h-5 w-5 text-theme-gold" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export const ProfileSection = ({ id }: ProfileSectionProps) => {
  return (
    <section id={id} className="my-16 w-full bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold text-theme-red"
        >
          Meet Our Faculty Team
        </motion.h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {facultyData.map((faculty, index) => (
            <motion.div
              key={faculty.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center space-y-6 rounded-lg border-2 border-theme-gold/20 p-6"
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-theme-gold/20 md:h-64 md:w-64">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  priority={index === 0}
                />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-semibold text-theme-gold md:text-2xl">
                  {faculty.name}
                </h3>
                <p className="text-lg text-theme-gold/70">{faculty.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
