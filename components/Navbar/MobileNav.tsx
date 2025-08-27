'use client';

import { CustomLink } from "@components/CustomLink";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosCloseCircleOutline, IoIosMenu } from "react-icons/io";

export const MobileNav = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);
  const item = {
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.1,
      },
    },
    show: {
      height: "100vh",
      opacity: 1,
      transition: { duration: 0.1, staggerChildren: 0.1 },
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const childItems = {
    hidden: { x: "-2vw", opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
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
        <IoIosMenu onClick={() => setOpen(!open)} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 bg-gray-100 z-50 flex flex-col justify-center items-center space-y-10  text-2xl font-bold text-gray-800  hover:text-gray-600 transition duration-200"
          >
            <IoIosCloseCircleOutline
              className="absolute right-8 top-14 h-5 w-5 "
              onClick={() => setOpen(!open)}
            />
            {navItems.map((navItem: any, idx: number) => (
              <CustomLink key={`link=${idx}`} href={navItem.link}>
                <motion.span variants={childItems} className="block">
                  {navItem.name}
                </motion.span>
              </CustomLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
