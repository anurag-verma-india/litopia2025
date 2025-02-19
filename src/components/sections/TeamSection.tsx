"use client";
import React from "react";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { teamMembers } from "@/constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const TeamCard = ({ member }: { member: (typeof teamMembers)[0] }) => {
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
        <div className="mt-3 flex items-center justify-center gap-4 transition-opacity duration-300 group-hover:opacity-100">
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
        </div>
      </div>
    </div>
  );
};

export const TeamSection = () => {
  return (
    <section className="w-full bg-zinc-900/50 px-4 py-16" id="team">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-16 max-w-7xl text-center"
      >
        <h2 className="mb-4 text-4xl font-bold text-theme-gold md:text-5xl">
          Meet Our Team
        </h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-300">
          The passionate individuals behind Litopia who work tirelessly to bring
          literature to life.
        </p>
      </motion.div>

      {/* Team Slider */}
      <div className="mx-auto max-w-7xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          autoplay={{
            delay: 3000,
            // delay: 10000000000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="w-full pb-20"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <TeamCard member={member} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;
