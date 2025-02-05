"use client";
import React from "react";
import Image from "next/image";
import { events } from "@/constants";

const EventCard = ({ event }: { event: (typeof events)[0] }) => {
  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-theme-gold/10 bg-zinc-900/50 transition-all duration-300 hover:border-theme-gold/20">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-50 z-10" />
        <Image
          src={event.image}
          alt={event.title}
          // fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 text-sm rounded-full bg-theme-red/20 text-theme-gold border border-theme-gold/10">
            {event.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-theme-gold">{event.title}</h3>
          <p className="text-sm text-theme-gold/70">{event.date}</p>
        </div>
        <p className="text-gray-300 flex-grow">{event.description}</p>

        {/* Button */}
        <button className="mt-4 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-theme-red/20 to-theme-gold/20 text-theme-gold border border-theme-gold/10 hover:from-theme-red/30 hover:to-theme-gold/30 transition-all duration-300">
          Register
        </button>
      </div>
    </div>
  );
};

export const Events = () => {
  return (
    <section className="w-full py-12 px-4 bg-zinc-900/50">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-theme-gold mb-4">
          Events
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Join us for these exciting events that celebrate literature,
          creativity, and community.
        </p>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
