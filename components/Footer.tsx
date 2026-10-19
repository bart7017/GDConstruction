import Link from "next/link";
import { navItems } from "@constants/navItems";
import { servicesBySlug } from "@constants/services";
import { ButtonLink } from "./Button";
import { Cote } from "./Cote";

const linkClass =
  "text-chaux/75 transition-colors hover:text-chaux focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chaux";

export const Footer = () => (
  <footer className="bg-ardoise text-chaux">
    <div className="mx-auto max-w-7xl px-4 pb-10 pt-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <p className="display-title max-w-3xl text-4xl sm:text-6xl">Un projet de maçonnerie ou de rénovation ?</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="signal">Demander un devis gratuit</ButtonLink>
          <ButtonLink href="tel:+33695918103" variant="line-light">06 95 91 81 03</ButtonLink>
        </div>
      </div>

      <div className="mt-14 grid gap-6 text-chaux/60 sm:grid-cols-3">
        <Cote>50 km autour de Pamfou</Cote>
        <Cote>9 corps de métier</Cote>
        <Cote>Devis sous 48 h</Cote>
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_2fr_1.2fr]">
        <div>
          <p className="display-title text-2xl">GD Construction</p>
          <p className="mt-3 max-w-xs text-chaux/75">
            Maçonnerie générale et rénovation tous corps d&apos;état, à Pamfou et dans un rayon de 50 km.
          </p>
        </div>

        <nav aria-label="Nos métiers">
          <h2 className="font-semibold">Nos métiers</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {Object.values(servicesBySlug).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className={linkClass}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <nav aria-label="Pied de page">
            <h2 className="font-semibold">Navigation</h2>
            <ul className="mt-4 grid gap-2">
              {navItems.map((item) => (
                <li key={item.link}>
                  <Link href={item.link} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="font-semibold">Contact</h2>
            <ul className="mt-4 grid gap-2">
              <li><a href="tel:+33695918103" className={linkClass}>06 95 91 81 03</a></li>
              <li><a href="https://wa.me/33695918103" target="_blank" rel="noopener noreferrer" className={linkClass}>WhatsApp</a></li>
              <li><a href="https://maps.google.com/?q=Pamfou+77830" target="_blank" rel="noopener noreferrer" className={linkClass}>77830 Pamfou</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-chaux/15 pt-6 text-sm text-chaux/60 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} GD Construction · <Link href="/mentions-legales" className={`${linkClass} underline underline-offset-2`}>Mentions légales</Link></p>
        <p>SIRET 503 834 426 00028 · Assurance décennale</p>
      </div>
    </div>
  </footer>
);
