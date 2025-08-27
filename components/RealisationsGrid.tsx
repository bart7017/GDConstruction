"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "../lib/utils";

interface IBlurImage {
  height?: any;
  width?: any;
  src?: string | any;
  objectFit?: any;
  className?: string | any;
  alt?: string | undefined;
  layout?: any;
  [x: string]: any;
}

const BlurImage = ({
  height,
  width,
  src,
  className,
  objectFit,
  alt,
  layout,
  ...rest
}: IBlurImage) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300 transform",
        isLoading ? "blur-sm scale-105" : "blur-0 scale-100",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={src}
      alt={alt ? alt : "Réalisation GD Construction"}
      {...rest}
    />
  );
};

interface Realisation {
  title: string;
  description: string;
  slug: string;
  image: string;
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
    <div className="relative overflow-hidden py-20">
      <div className="py-4 md:py-10 overflow-hidden relative px-4 md:px-8">
        <GridPatternContainer className="opacity-50" />
        <div className="relative z-20 py-10 max-w-7xl mx-auto">
          <h1 className="scroll-m-20 text-4xl md:text-6xl font-bold text-center tracking-tight text-gray-800 mb-6">
            Nos <span className="text-primary">Réalisations</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-center leading-relaxed">
            Découvrez notre savoir-faire à travers nos derniers chantiers en Seine-et-Marne. 
            Des projets qui témoignent de notre expertise dans tous les corps d'état.
          </p>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-primary hover:text-white hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between pb-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-20">
          {filteredRealisations.map((realisation, index) => (
            <RealisationCard realisation={realisation} key={realisation.title + index} />
          ))}
        </div>
        
        {filteredRealisations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucune réalisation trouvée pour cette catégorie.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export const RealisationCard = ({ realisation }: { realisation: Realisation }) => {
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <Link
      className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group"
      href={`/realisations/${realisation.slug}`}
    >
      {/* Image réelle */}
      <div className="relative h-64 overflow-hidden">
        <BlurImage
          src={realisation.image}
          alt={realisation.title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
            {realisation.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
            {formatDate(realisation.date)}
          </span>
        </div>

        {/* Overlay au hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <div className="text-2xl mb-2">👁️</div>
            <div className="text-sm font-medium">Voir les détails</div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white">
        {/* Métadonnées rapides */}
        <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500">
          <span className="flex items-center">
            <span className="mr-1">📍</span>
            {realisation.location}
          </span>
          <span className="flex items-center">
            <span className="mr-1">📏</span>
            {realisation.surface}
          </span>
          <span className="flex items-center">
            <span className="mr-1">⏱️</span>
            {realisation.duration}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors">
          {realisation.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {truncate(realisation.description, 120)}
        </p>

        {/* CTA subtil */}
        <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
          <span>Découvrir le projet</span>
          <span className="ml-2">→</span>
        </div>
      </div>
    </Link>
  );
};

export function GridPatternContainer({ className }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent)] ${className}`}
    >
      <GridPattern />
    </div>
  );
}

export function GridPattern() {
  const columns = 30;
  const rows = 11;
  return (
    <div className="flex bg-gray-50 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex flex-shrink-0 rounded-[1px] ${
                index % 2 === 0
                  ? "bg-gray-100"
                  : "bg-gray-100 shadow-[0px_0px_0px_3px_rgba(255,255,255,1)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}