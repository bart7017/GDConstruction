'use client';

import { CustomLink } from "@components/CustomLink";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";

export const DesktopNav = ({ navItems }: any) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-row space-x-8 items-center antialiased border px-6 py-3 rounded-2xl bg-gray-100 w-fit max-w-5xl mx-auto">
      <Link href="/" className="flex items-center justify-center">
        <div className="relative w-48 h-24">
          <Image
            src="/images/GDConstructionLogo.png"
            alt="GD Construction Logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>
      {navItems.map((navItem: any, idx: number) => (
        <CustomLink
          key={`link=${idx}`}
          href={navItem.link}
          className="text-gray-700 text-base relative hover:text-white transition-colors"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0  transform  bg-gradient-to-b from-orange-400 to-orange-500 scale-105 rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10 px-2 py-2 inline-block">
            {navItem.name}
          </span>
        </CustomLink>
      ))}
      
      {/* Icônes téléphone et WhatsApp */}
      <div className="flex items-center space-x-4 ml-4">
        <a
          href="tel:0695918103"
          className="text-orange-500 hover:text-orange-600 transition-colors p-2 rounded-full hover:bg-orange-50"
          title="Appelez-nous"
        >
          <AiOutlinePhone className="h-5 w-5" />
        </a>
        <a
          href="https://wa.me/33695918103"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 transition-colors p-2 rounded-full hover:bg-green-50"
          title="Contactez-nous sur WhatsApp"
        >
          <AiOutlineWhatsApp className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};
