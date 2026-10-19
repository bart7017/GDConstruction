import Link from "next/link";
import React from "react";

import { twMerge } from "tailwind-merge";


/* Boutons de la refonte (voir design/direction.md). Ils naviguent tous : ce sont des liens. */
const variants = {
  signal: "bg-signal text-ardoise hover:brightness-105",
  line: "text-ardoise shadow-[inset_0_0_0_1px_rgb(34_48_58/0.3)] hover:bg-ardoise/5",
  "line-light": "text-chaux shadow-[inset_0_0_0_1px_rgb(238_240_236/0.45)] hover:bg-chaux/10",
};
const sizes = { sm: "px-5 py-2.5 text-sm", md: "px-7 py-4" };

type ButtonLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  href: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export const ButtonLink = ({ href, variant = "signal", size = "md", className, ...props }: ButtonLinkProps) => {
  const classes = twMerge(
    "inline-flex items-center justify-center rounded-full text-center font-semibold transition-[transform,background-color] duration-150 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none",
    variant === "line-light" ? "focus-visible:outline-chaux" : "focus-visible:outline-ardoise",
    variants[variant],
    sizes[size],
    className,
  );
  return href.startsWith("/") ? <Link href={href} className={classes} {...props} /> : <a href={href} className={classes} {...props} />;
};
