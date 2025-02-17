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

const TeamCard = ({ member }: { member: (typeof teamMembers)[0] }) => {
  return (
    <div className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-theme-gold/10 transition-all duration-300 hover:border-theme-gold/20 h-full">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10" />
        <Image
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Social Icons - Appear on Hover */}
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-theme-gold mb-1 capitalize">
          {member.name}
        </h3>
        <p className="text-theme-gold/70 capitalize">{member.role}</p>
        <div className="flex items-center justify-center gap-4 group-hover:opacity-100 mt-3 transition-opacity duration-300">
          <a
            href={` https://www.instagram.com/${member.socials?.instagram}/`}
            target="_blank"
            className="p-2 bg-theme-red/20 rounded-full border border-theme-gold/10 hover:bg-theme-red/30 transition-colors"
          >
            <Instagram className="w-5 h-5 text-theme-gold" />
          </a>
          <a
            href={` https://www.linkedin.com/in/${member.socials?.linkedin}/`}
            target="_blank"
            className="p-2 bg-theme-red/20 rounded-full border border-theme-gold/10 hover:bg-theme-red/30 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-theme-gold" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const TeamSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-zinc-900/50" id="team">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-theme-gold mb-4">
          Meet Our Team
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          The passionate individuals behind Litopia who work tirelessly to bring
          literature to life.
        </p>
      </motion.div>

      {/* Team Slider */}
      <div className="max-w-7xl mx-auto">
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
            // delay: 3000,
            delay: 10000000000,
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
