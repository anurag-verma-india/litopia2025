"use client";
import React from "react";
import Image from "next/image";
import { events } from "@/constants";
import { motion } from "framer-motion";

const EventCard = ({
  event,
  index,
}: {
  event: (typeof events)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-theme-gold/10 bg-zinc-900/50 transition-all duration-300 hover:border-theme-gold/20"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
        <Image
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute right-4 top-4 z-20">
          <span className="rounded-full border border-theme-gold/10 bg-theme-red/20 px-3 py-1 text-sm text-theme-gold">
            {event.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-theme-gold">{event.title}</h3>
          <p className="text-sm text-theme-gold/70">{event.date}</p>
        </div>
        <p className="flex-grow text-gray-300">{event.description}</p>

        {/* Button */}
        <button className="mt-4 w-full rounded-lg border border-theme-gold/10 bg-gradient-to-r from-theme-red/20 to-theme-gold/20 px-4 py-2 text-theme-gold transition-all duration-300 hover:from-theme-red/30 hover:to-theme-gold/30">
          Registrations opening soon
        </button>
      </div>
    </motion.div>
  );
};

export const Events = () => {
  return (
    <section className="w-full bg-zinc-900/50 px-4 py-12" id="events">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-16 max-w-7xl text-center"
      >
        <h2 className="mb-4 text-4xl font-bold text-theme-gold md:text-5xl">
          Events
        </h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-300">
          Join us for these exciting events that celebrate literature,
          creativity, and community.
        </p>
      </motion.div>

      {/* Events Grid */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
