'use client';

import { navItems } from "@constants/navItems";
import React from "react";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

const Navbar = () => {
  return (
    // La navbar bureau mesure ~990px (logo w-48 + 5 liens + 2 icones) et ne
    // s'adapte pas : elle bascule donc sur le menu mobile jusqu'a lg, sinon
    // elle deborde et rend la page scrollable horizontalement sur tablette.
    <div className="flex flex-row items-center justify-between lg:justify-center py-4 w-fit max-w-full mx-auto px-4 sticky top-0 z-50 bg-white/70 backdrop-blur-sm rounded-2xl mt-2">
      <div className="hidden lg:flex justify-center">
        <DesktopNav navItems={navItems} />
      </div>

      <div className="flex lg:hidden w-full">
        <MobileNav navItems={navItems} />
      </div>
    </div>
  );
};

export default Navbar;
