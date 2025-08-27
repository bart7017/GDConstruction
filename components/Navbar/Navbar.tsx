'use client';

import { navItems } from "constants/navItems";
import Link from "next/link";
import React, { useState } from "react";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between sm:justify-center py-4 w-fit mx-auto px-4 sticky top-0 z-50 bg-white/70 backdrop-blur-sm rounded-2xl mt-2">
      <div className="hidden sm:flex justify-center">
        <DesktopNav navItems={navItems} />
      </div>

      <div className="flex sm:hidden w-full">
        <MobileNav navItems={navItems} />
      </div>
    </div>
  );
};

export default Navbar;
