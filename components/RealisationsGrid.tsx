"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { servicesBySlug } from "@constants/services";
import { RealisationSlug } from "@constants/realisations";

interface Realisation {
  title: string;
  description: string;
  slug: RealisationSlug;
  /** Ancienne image de métier, non affichée : la couverture vient de `service`. */
  image: string;
  /** Métier dont l'image d'illustration sert de couverture. */
  service: string;
  category: string;
  location: string;
  date: string;
  duration: string;
  surface: string;
}

const realisations: Realisation[] = [
  {
    title: "Rénovation cuisine moderne - Pamfou",
    description: "Transformation complète d'une cuisine des années 80 en espace moderne avec îlot central et électroménager intégré.",
    slug: "renovation-cuisine-pamfou-2024",
    service: "renovation-interieure",
    image: "/images/maconnerie-enduit.webp",
    category: "Rénovation intérieure",
    location: "Pamfou (77830)",
    date: "2024-12-01",
    duration: "3 semaines",
    surface: "20m²"
  },
  {
    title: "Extension maison 40m² - Melun",
    description: "Création d'une extension avec fondations béton, murs parpaing et charpente traditionnelle pour agrandir l'espace de vie.",
    slug: "extension-maison-melun-2024",
    service: "maconnerie-generale",
    image: "/images/maconnerie-brique.webp",
    category: "Maçonnerie générale",
    location: "Melun (77000)",
    date: "2024-11-15",
    duration: "6 semaines",
    surface: "40m²"
  },
  {
    title: "Salle de bain avec douche italienne - Fontainebleau",
    description: "Rénovation complète avec douche italienne, carrelage haut de gamme et éclairage LED intégré.",
    slug: "salle-bain-fontainebleau-2024",
    service: "carrelage-sols",
    image: "/images/carrelage-sol.webp",
    category: "Plomberie & Carrelage",
    location: "Fontainebleau (77300)",
    date: "2024-10-20",
    duration: "2 semaines",
    surface: "8m²"
  },
  {
    title: "Réfection toiture complète - Nemours",
    description: "Remplacement total de la couverture avec isolation renforcée, zinguerie et gouttières neuves.",
    slug: "toiture-nemours-2024",
    service: "couverture",
    image: "/images/charpente-toiture.webp",
    category: "Couverture",
    location: "Nemours (77140)",
    date: "2024-09-10",
    duration: "4 semaines",
    surface: "150m²"
  },
  {
    title: "Escalier béton design - Provins",
    description: "Création d'un escalier béton extérieur avec garde-corps métallique et éclairage LED intégré.",
    slug: "escalier-beton-provins-2024",
    service: "maconnerie-generale",
    image: "/images/maconnerie-decoupe-mur.webp",
    category: "Maçonnerie générale",
    location: "Provins (77160)",
    date: "2024-08-25",
    duration: "10 jours",
    surface: "15m²"
  },
  {
    title: "Installation pompe à chaleur 16kW - Dammarie",
    description: "Installation PAC air-eau avec plancher chauffant et production eau chaude sanitaire pour économies d'énergie.",
    slug: "pompe-chaleur-dammarie-2024",
    service: "pompe-chaleur-climatisation",
    image: "/images/chauffage-tuyaux.webp",
    category: "Pompe à chaleur",
    location: "Dammarie-lès-Lys (77190)",
    date: "2024-07-30",
    duration: "1 semaine",
    surface: "120m²"
  },
];

const categories = [
  "Toutes",
  "Maçonnerie générale",
  "Rénovation intérieure", 
  "Plomberie & Carrelage",
  "Couverture",
  "Pompe à chaleur"
];

export function RealisationsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const filteredRealisations = selectedCategory === "Toutes"
    ? realisations
    : realisations.filter(r => r.category === selectedCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:pb-24">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
            className="rounded-full px-5 py-2 text-sm font-semibold text-ardoise ring-1 ring-ardoise/20 transition-[transform,background-color] active:scale-[0.97] aria-pressed:bg-ardoise aria-pressed:text-chaux aria-pressed:ring-ardoise hover:bg-ardoise/5 aria-pressed:hover:bg-ardoise focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise motion-reduce:transition-none"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {filteredRealisations.map((realisation) => (
          <RealisationCard realisation={realisation} key={realisation.slug} />
        ))}
      </div>

      {filteredRealisations.length === 0 && (
        <p className="py-12 text-lg text-ardoise/70">Aucune réalisation trouvée pour cette catégorie.</p>
      )}
    </div>
  );
}

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

export const RealisationCard = ({ realisation }: { realisation: Realisation }) => (
  <Link
    href={`/realisations/${realisation.slug}`}
    className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ardoise"
  >
    {/* Pas encore de photo du chantier : image du métier, signalée comme illustration. */}
    <div className="relative aspect-[4/3] overflow-hidden [&_img]:reveal-zoom rounded-2xl bg-ardoise/5">
      <Image
        src={servicesBySlug[realisation.service].image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
      />
      <span className="absolute bottom-3 left-3 rounded-full bg-ardoise/80 px-3 py-1 text-xs text-chaux">Photo d&apos;illustration</span>
    </div>
    <p className="mt-4 text-sm text-ardoise/70">
      {realisation.category}, {formatDate(realisation.date)}
    </p>
    <p className="text-sm text-ardoise/70">
      {realisation.location}, {realisation.surface}, {realisation.duration}
    </p>
    <h2 className="mt-2 font-display text-xl font-bold [font-stretch:115%] text-ardoise">
      <span className="bg-[length:0_2px] bg-left-bottom bg-no-repeat bg-gradient-to-r from-signal to-signal transition-[background-size] duration-300 group-hover:bg-[length:100%_2px] motion-reduce:transition-none">
        {realisation.title}
      </span>
    </h2>
    <p className="mt-2 line-clamp-3 leading-relaxed text-ardoise/75">{realisation.description}</p>
  </Link>
);
