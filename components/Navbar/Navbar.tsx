'use client';

import { navItems } from "@constants/navItems";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@components/Button";

const PHONE = "06 95 91 81 03";
const PHONE_HREF = "tel:+33695918103";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const sheet = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const drag = useRef<{ y: number; t: number } | null>(null);

  // Tiroir ouvert : on bloque le défilement, Échap ferme, le focus va au premier lien.
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") return setOpen(false);
      if (e.key !== "Tab") return;
      // Garde le focus dans le tiroir.
      const items = document.querySelectorAll<HTMLElement>("#menu-mobile a, #menu-mobile button");
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
      menuButton.current?.focus();
    };
  }, [open]);

  const isActive = (link: string) => (link === "/" ? pathname === "/" : pathname.startsWith(link));

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ardoise/10 bg-chaux/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
          <Link href="/" className="shrink-0 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ardoise">
            <Image src="/images/GDConstructionLogo.png" alt="GD Construction, accueil" width={950} height={347} sizes="132px" className="h-12 w-auto" />
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    aria-current={isActive(item.link) ? "page" : undefined}
                    className="relative py-2 text-ardoise/80 transition-colors hover:text-ardoise aria-[current=page]:text-ardoise aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-signal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ardoise"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a href={PHONE_HREF} className="hidden font-semibold text-ardoise xl:block">
              {PHONE}
            </a>
            <ButtonLink href="/contact" variant="signal" size="sm" className="hidden sm:inline-flex">
              Devis gratuit
            </ButtonLink>
            <button
              ref={menuButton}
              type="button"
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen(true)}
              className="rounded-full border border-ardoise/20 px-4 py-2 font-semibold text-ardoise transition-transform active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise lg:hidden"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Tiroir mobile, hors du header : son backdrop-blur casserait le position:fixed.
          Toujours monté (inert quand fermé) pour que les transitions CSS jouent à l'ouverture
          comme à la fermeture et restent interruptibles. */}
      <div className={clsx("fixed inset-0 z-[60] lg:hidden", !open && "pointer-events-none")} inert={!open}>
        <div
          className={clsx("absolute inset-0 bg-ardoise/50 transition-opacity duration-200 motion-reduce:transition-none", open ? "opacity-100" : "opacity-0")}
          onClick={() => setOpen(false)}
        />
        <div
          ref={sheet}
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={clsx(
            "absolute inset-x-0 bottom-0 touch-pan-x rounded-t-3xl bg-chaux px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-3 transition-transform duration-[450ms] ease-[cubic-bezier(.32,.72,0,1)] motion-reduce:transition-none",
            open ? "translate-y-0" : "translate-y-full",
          )}
          // Glisser vers le bas pour fermer : le tiroir suit le doigt, puis se ferme
          // au-delà de 100 px ou sur un geste rapide, sinon revient en place.
          onPointerDown={(e) => {
            if ((e.target as HTMLElement).closest("a, button")) return;
            drag.current = { y: e.clientY, t: e.timeStamp };
            e.currentTarget.setPointerCapture(e.pointerId);
            e.currentTarget.style.transition = "none";
          }}
          onPointerMove={(e) => {
            if (!drag.current) return;
            e.currentTarget.style.transform = `translateY(${Math.max(0, e.clientY - drag.current.y)}px)`;
          }}
          onPointerUp={(e) => {
            if (!drag.current) return;
            const dy = e.clientY - drag.current.y;
            const speed = dy / Math.max(1, e.timeStamp - drag.current.t);
            drag.current = null;
            e.currentTarget.style.transition = "";
            e.currentTarget.style.transform = "";
            if (dy > 100 || speed > 0.5) setOpen(false);
          }}
        >
          <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-ardoise/25" aria-hidden />
          <div className="flex items-center justify-between">
            <p className="text-sm text-ardoise/70">Maçon à Pamfou, Seine-et-Marne</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-ardoise focus-visible:outline-2 focus-visible:outline-ardoise"
            >
              Fermer
            </button>
          </div>
          <nav aria-label="Navigation principale" className="mt-2">
            <ul>
              {navItems.map((item, i) => (
                <li key={item.link} className="border-b border-ardoise/10">
                  <Link
                    ref={i === 0 ? firstLink : undefined}
                    href={item.link}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.link) ? "page" : undefined}
                    className="display-title block rounded-md py-4 text-2xl text-ardoise focus-visible:outline-offset-[-2px] aria-[current=page]:underline aria-[current=page]:decoration-signal aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8 focus-visible:outline-2 focus-visible:outline-ardoise"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 grid gap-3">
            <ButtonLink href="/contact" variant="signal" onClick={() => setOpen(false)}>
              Demander un devis gratuit
            </ButtonLink>
            <div className="grid grid-cols-2 gap-3">
              <ButtonLink href={PHONE_HREF} variant="line">
                Appeler
              </ButtonLink>
              <ButtonLink href="https://wa.me/33695918103" variant="line" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
