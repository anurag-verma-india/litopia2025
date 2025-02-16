"use client";
import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import img from "@/assets/logo.webp";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer
      className="w-full bg-zinc-900/80 border-t border-theme-gold/10"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start space-y-4 md:max-w-sm"
          >
            <div className="relative w-32 h-32">
              <Image
                src={img}
                alt="Litopia Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-300 text-center md:text-left">
              Empowering literary minds and fostering creativity through
              community engagement.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <h3 className="text-xl font-semibold text-theme-gold">
              Contact Us
            </h3>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <a
                href="mailto:thesahityikclub@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-theme-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>thesahityikclub@gmail.com</span>
              </a>
              <a
                href="tel:+917043177152"
                className="flex items-center space-x-2 text-gray-300 hover:text-theme-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 704 317 7152</span>
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <h3 className="text-xl font-semibold text-theme-gold">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/medicaps_sahityik/"
                target="_blank"
                className="p-2 bg-theme-red/20 rounded-full border border-theme-gold/10 hover:bg-theme-red/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-theme-gold" />
              </a>
              <a
                href="https://www.linkedin.com/company/the-sahityik"
                target="_blank"
                className="p-2 bg-theme-red/20 rounded-full border border-theme-gold/10 hover:bg-theme-red/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-theme-gold" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-theme-gold/10"
        >
          <p className="text-center text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} The Sahityik. All rights are
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
