"use client";
import React from "react";
import Image from "next/image";
import img from "@/assets/logo.webp";

interface ProfileSectionProps {
  id?: string;
}

export const ProfileSection = ({ id }: ProfileSectionProps) => {
  return (
    <section id={id} className="w-full py-16 bg-background my-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image and Name */}
          <div className="flex-1 flex flex-col items-center space-y-2">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-theme-gold/20">
              <Image
                src={img}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-theme-gold text-center">
              Mrs. Shalini Modh
            </h3>
            <p className="text-lg text-theme-gold/70 text-center">
              Faculty Coordinator
            </p>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-theme-red">
                Meet Our Faculty Coordinator
              </h2>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
