'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BlurImage } from "./BlurImage";
import Button from "./Button";
import { GridPattern } from "./GridPattern";
import { motion, useScroll } from "framer-motion";

export const Hero = () => {
  const pattern = {
    y: -6,
    squares: [
      [-1, 2],
      [1, 3],
      // Fixed values for consistent SSR/client rendering
      [-8, 5],
      [4, -7],
      [-3, 9],
      [7, -2],
      [-6, -8],
      [2, 6],
      [9, -4],
      [-5, 3],
      [8, 8],
      [-9, -6]
    ],
  };

  const [isHalf, setIsHalf] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > (window.innerHeight * 2) / 10) {
        setIsHalf(true);
      } else {
        setIsHalf(false);
      }
    };
    const unsubscribe = scrollY.on("change", handleScroll);
    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  return (
    <div className=" px-4">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={120}
          height={120}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%]  w-full skew-y-[-5deg] fill-tertiary/[0.05] stroke-gray-100  dark:fill-primary dark:stroke-gray-100"
          {...pattern}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto mt-16">
        <h1 className="font-semibold text-4xl sm:text-7xl text-center max-w-5xl mx-auto text-zinc-800 leading-tight tracking-tight">
          Votre expert en{" "}
          <span className="text-primary">maçonnerie générale</span> et rénovation
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl tracking-tight text-zinc-600 text-center leading-normal">
          GD Construction vous accompagne dans tous vos projets de maçonnerie, rénovation intérieure et extérieure à Pamfou et en Seine-et-Marne. 
          Spécialistes tous corps d'état pour un service complet.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center mt-12">
          <Button
            as="button"
            variant="outline"
            className="rounded-2xl py-2 border border-zinc-200"
          >
            <Link href="/services">Nos Services</Link>
          </Button>
          <Button as="button" variant="large" className="rounded-2xl py-2 bg-primary hover:bg-secondary">
            <Link href="/contact" className="flex items-center space-x-2">
              <span>Devis Gratuit</span>
              <span>📞</span>
            </Link>
          </Button>
        </div>

        {/* Badge zone d'intervention */}
        <div className="flex justify-center mt-8">
          <div className="bg-quaternary px-6 py-3 rounded-full border">
            <p className="text-sm font-medium text-tertiary">
              📍 Pamfou et 50km (77, 91, 94 et limitrophes) - ☎️ 06 95 91 81 03
            </p>
          </div>
        </div>

        <div
          style={{ perspective: "1000px" }}
          className="overflow-hidden pt-20 px-4 w-full relative"
        >
          <motion.div
            animate={{
              rotateX: isHalf ? 0 : 45,
              scale: isHalf ? [0.8, 1.05, 1] : 0.8,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 0.5,
              },
            }}
            className="relative w-[100%] overflow-x-hidden md:w-3/4 mx-auto h-[12rem] sm:h-[16rem] md:h-[24rem] lg:h-[32rem] mb-8 md:mb-8 max-w-5xl"
          >
            <BlurImage
              src={"/images/GDConstructionLogo.png"}
              layout="fill"
              className=" rounded-xl md:rounded-3xl border mx-auto object-contain shadow-sm bg-white p-8"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
