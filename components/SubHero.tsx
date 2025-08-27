'use client';

import { features } from "constants/features";
import { useMotionValue } from "framer-motion";
import React from "react";
import Link from "next/link";

import { AiFillPieChart } from "react-icons/ai";
import { CardPattern } from "./CardPattern";

type FeatureType = {
  heading: string;
  description: string | any;
  icon: any;
  link?: string;
};

export const SubHero = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const pattern = {
    y: -6,
    squares: [
      [-1, 2],
      [1, 3],
      // Fixed values for consistent SSR/client rendering
      [-7, 4],
      [3, -8],
      [-2, 7],
      [8, -3],
      [-5, -9],
      [1, 5],
      [6, -6],
      [-4, 2],
      [9, 9],
      [-8, -5]
    ],
  };
  return (
    <div
      id="services"
      className="px-4 bg-building-800 py-10 md:py-16 relative group"
      onMouseMove={onMouseMove}
    >
      <div className="absolute w-96 h-96 -left-20 -top-20 bg-gradient-to-t from-[#9890e3] to-[#b1f4cf] blur-3xl rounded-full opacity-20" />
      <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
          Une Passion Transmise, Une Expertise Reconnue
        </h2>
        <p className="mt-6 text-lg tracking-tight text-blue-100 max-w-4xl mx-auto leading-relaxed">
          Grégory DA COSTA a appris les métiers du bâtiment aux côtés de son père artisan maçon. 
          Fort de cette transmission familiale et de sa formation chez les Compagnons de France, 
          il a créé GD Construction pour vous offrir une expertise complète dans tous les corps d'état.
        </p>
      </div>

      <CardPattern {...pattern} mouseX={mouseX} mouseY={mouseY} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-16 my-12 md:my-20 px-4">
        {features.map((feature: FeatureType, idx: number) => (
          <Card
            key={`feature-${idx}`}
            heading={feature.heading}
            description={feature.description}
            icon={feature.icon}
            link={feature.link}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ heading, description, icon, link }: FeatureType) => {
  const content = (
    <div className="flex flex-col items-start h-full hover:transform hover:scale-105 transition-all duration-200 cursor-pointer">
      <IconContainer icon={icon} />
      <div className="mt-8 flex-1">
        <h2 className="text-white text-2xl mb-4">{heading}</h2>
        <p className="text-sm text-zinc-100 leading-relaxed">
          {description}
        </p>
        {link && (
          <div className="mt-6">
            <span className="text-primary hover:text-secondary text-sm font-medium">
              En savoir plus →
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return link ? (
    <Link href={link}>
      {content}
    </Link>
  ) : (
    content
  );
};

const IconContainer = ({ icon }: any) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-primary/50 transform  rounded-md blur-lg" />

      <div className="h-10 w-10 rounded-2xl  backdrop-blur-sm flex items-center justify-center  bg-white bg-grid-extrasmall-zinc-200  overflow-hidden">
        {/* <AiFillPieChart className="text-primary h-4 w-4 relative z-50" /> */}
        {icon}
        <div className="absolute inset-0 bg-white [mask-image:linear-gradient(to_bottom,transparent,white_4rem,white_calc(100%-4rem),transparent)] z-40" />
      </div>
    </div>
  );
};
