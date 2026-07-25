'use client';

import { CustomLink } from "@components/CustomLink";
import { NavItem } from "@constants/navItems";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { IoIosCloseCircleOutline, IoIosMenu } from "react-icons/io";

export const MobileNav = ({ navItems }: { navItems: NavItem[] }) => {
  const [open, setOpen] = useState(false);
  const item: Variants = {
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.1,
      },
    },
    show: {
      opacity: 1,
      transition: { duration: 0.1, staggerChildren: 0.1 },
    },
    hidden: {
      opacity: 0,
    },
  };

  const childItems: Variants = {
    hidden: { x: "-2vw", opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  const panel = (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed inset-0 h-dvh w-screen bg-gray-100 z-50 flex flex-col justify-center items-center gap-8 text-2xl font-bold text-gray-800 transition duration-200"
        >
          <button
            type="button"
            aria-label="Fermer le menu"
            className="absolute right-6 top-6 text-gray-500 hover:text-gray-800 transition-colors"
            onClick={() => setOpen(false)}
          >
            <IoIosCloseCircleOutline className="h-9 w-9" />
          </button>

          {navItems.map((navItem, idx) => (
            <CustomLink key={`link=${idx}`} href={navItem.link}>
              <motion.span
                variants={childItems}
                className="block"
                onClick={() => setOpen(false)}
              >
                {navItem.name}
              </motion.span>
            </CustomLink>
          ))}

          {/* Contact direct : sur mobile c'est l'action la plus utile du menu. */}
          <motion.div variants={childItems} className="flex flex-col gap-4 mt-4 text-base">
            <a
              href="tel:0695918103"
              className="flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-white transition-colors hover:bg-secondary"
            >
              <AiOutlinePhone className="h-6 w-6" />
              06 95 91 81 03
            </a>
            <a
              href="https://wa.me/33695918103"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full border-2 border-green-500 px-6 py-3 text-green-600 transition-colors hover:bg-green-50"
            >
              <AiOutlineWhatsApp className="h-6 w-6" />
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className="flex flex-row justify-between items-center w-full">
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
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="text-gray-800 p-2"
        >
          <IoIosMenu className="h-8 w-8" />
        </button>
      </div>
      {/* La navbar porte un backdrop-blur, qui cree un bloc conteneur pour les
          descendants position:fixed. Sans portail vers le body, le panneau se
          cale sur la navbar (largeur w-fit) au lieu du viewport. */}
      {typeof document !== "undefined"
        ? createPortal(panel, document.body)
        : null}
    </>
  );
};
