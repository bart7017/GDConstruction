import Image from "next/image";
import { ButtonLink } from "./Button";
import { Cote } from "./Cote";

// Photo d'ambiance Unsplash (Solømen), jamais présentée comme une réalisation : voir design/direction.md.
export const Hero = () => (
  <section className="relative flex min-h-[calc(100svh-4.5rem)] items-end overflow-hidden bg-ardoise px-4 pb-10 pt-24">
    <Image
      src="/images/hero-maconnerie-parpaings.webp"
      alt="Maçon posant du mortier sur un mur de parpaings"
      fill
      preload
      fetchPriority="high"
      sizes="100vw"
      className="object-cover object-[70%_50%]"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-ardoise via-ardoise/75 to-ardoise/5" />
    <div className="relative mx-auto w-full max-w-7xl text-chaux">
      <p className="text-chaux/80">Maçon à Pamfou, Seine-et-Marne</p>
      <h1 className="display-title hero-in relative mt-6 max-w-5xl text-[2.6rem] sm:text-7xl lg:text-8xl">
        Maçonnerie et rénovation, du gros œuvre aux finitions.
        <span aria-hidden className="laser absolute -left-4 right-[-100vw] top-[calc(100%+0.12em)] h-0.5 bg-signal" />
      </h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <p className="max-w-xl text-lg leading-relaxed text-chaux/85">
          GD Construction construit, répare et rénove les maisons autour de Pamfou. Un seul interlocuteur pour les neuf corps
          de métier, du mur porteur à la dernière couche de peinture.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="signal">Demander un devis gratuit</ButtonLink>
          <ButtonLink href="tel:+33695918103" variant="line-light">06 95 91 81 03</ButtonLink>
        </div>
      </div>
      <div className="mt-14 grid gap-5 text-chaux/70 sm:grid-cols-3">
        <Cote>50 km autour de Pamfou</Cote>
        <Cote>9 corps de métier</Cote>
        <Cote>Devis sous 48 h</Cote>
      </div>
    </div>
  </section>
);
