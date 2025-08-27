import clsx from "clsx";
import React from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar/Navbar";
import { CookieBanner } from "./CookieBanner";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <>
      <Navbar />
      <main className={clsx("antialiased", className)}>{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
};
