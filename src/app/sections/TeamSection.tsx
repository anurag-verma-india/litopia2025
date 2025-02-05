"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import img from "@/assets/logo.webp";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "President",
    image: img,
    socials: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Vice President",
    image: img,
    socials: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Secretary",
    image: img,
    socials: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Alex Turner",
    role: "Treasurer",
    image: img,
    socials: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const TeamCard = ({ member }: { member: typeof teamMembers[0] }) => {
  return (
    <div className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-theme-gold/10 transition-all duration-300 hover:border-theme-gold/20">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10" />
        <Image
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Social Icons - Appear on Hover */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={member.socials.twitter} className="p-2 bg-theme-red/20 rounded-full border border-theme-gold/10 hover:bg-theme-red/30 transition-colors">
            <Twitter className="w-5 h-5 text-theme-gold" />
          </a>
          <a href={member.socials.facebook} className="p-2 bg-theme-red/20 rounded-full border border-theme-gold/10 hover:bg-theme-red/30 transition-colors">
            <Facebook className="w-5 h-5 text-theme-gold" />
          </a>
          <a href={member.socials.instagram} className="p-2 bg-theme-red/20 rounded-full border border-theme-gold/10 hover:bg-theme-red/30 transition-colors">
            <Instagram className="w-5 h-5 text-theme-gold" />
          </a>
          <a href={member.socials.linkedin} className="p-2 bg-theme-red/20 rounded-full border border-theme-gold/10 hover:bg-theme-red/30 transition-colors">
            <Linkedin className="w-5 h-5 text-theme-gold" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-theme-gold mb-1">
          {member.name}
        </h3>
        <p className="text-theme-gold/70">
          {member.role}
        </p>
      </div>
    </div>
  );
};

export const TeamSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-zinc-900/50">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-theme-gold mb-4">
          Meet Our Team
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          The passionate individuals behind Litopia who work tirelessly to bring literature to life.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
