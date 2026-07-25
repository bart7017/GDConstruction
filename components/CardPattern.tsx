'use client';

import { useMotionTemplate, motion } from "framer-motion";
import React from "react";
import { MotionValue } from "framer-motion";

export function CardPattern({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary to-indigo-500 via-teal-500 opacity-0 transition duration-300 group-hover:opacity-10 "
        style={style}
      />
    </div>
  );
}
