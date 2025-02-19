"use client";
import React from "react";
import Image from "next/image";
// import img from "@/assets/logo.webp";
import { motion } from "framer-motion";

import DrRupaliChaturvedi from "@/assets/faculty/Dr. Rupali Chaturvedi Longer.png";
import DrShaliniModh from "@/assets/faculty/Dr. Shalini Modh.jpg";
import MsAayushiBharadwaj from "@/assets/faculty/Ms. Aayushi Bharadwaj.jpg";
import MsShubhrataKanungo from "@/assets/faculty/Ms. Shubhrata Kanungo.jpg";

interface ProfileSectionProps {
    id?: string;
}

const facultyData = [
    {
        name: "Dr. Shalini Modh",
        role: "Faculty Incharge",
        image: DrShaliniModh,
    },
    {
        name: "Dr.Rupali Chaturvedi",
        role: "Faculty Coordinator",
        image: DrRupaliChaturvedi,
    },
    {
        name: "Ms. Aayushi Bharadwaj",
        role: "Faculty Coordinator",
        image: MsAayushiBharadwaj,
    },
    {
        name: "Ms. Shubhrata Kanungo",
        role: "Faculty Coordinator",
        image: MsShubhrataKanungo,
    },
];

export const ProfileSection = ({ id }: ProfileSectionProps) => {
    return (
        <section id={id} className="w-full py-16 bg-background my-16">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-theme-red text-center mb-12"
                >
                    Meet Our Faculty Team
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {facultyData.map((faculty, index) => (
                        <motion.div
                            key={faculty.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex flex-col items-center space-y-6 p-6 border-2 border-theme-gold/20 rounded-lg"
                        >
                            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-theme-gold/20">
                                <Image
                                    src={faculty.image}
                                    alt={faculty.name}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    priority={index === 0}
                                />
                            </div>
                            <div className="text-center space-y-2">
                                <h3 className="text-xl md:text-2xl font-semibold text-theme-gold">
                                    {faculty.name}
                                </h3>
                                <p className="text-lg text-theme-gold/70">
                                    {faculty.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
