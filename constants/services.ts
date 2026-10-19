export type ServiceEntry = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  /** Photo d'illustration (image de métier, pas une réalisation GD Construction). */
  image: string;
};

export const servicesBySlug: Record<string, ServiceEntry> = {
  "maconnerie-generale": {
    slug: "maconnerie-generale",
    title: "Maçonnerie Générale",
    description: "Murs, dalles béton, fondations, extensions et gros œuvre",
    icon: "🏗️",
    image: "/images/maconnerie-brique.webp",
  },
  "renovation-interieure": {
    slug: "renovation-interieure",
    title: "Rénovation Intérieure",
    description: "Cuisine, salle de bain, cloisons et menuiseries intérieures",
    icon: "🏠",
    image: "/images/renovation-cuisine-chantier.webp",
  },
  "renovation-exterieure": {
    slug: "renovation-exterieure",
    title: "Rénovation Extérieure",
    description: "Ravalement, isolation par l'extérieur, bardage et menuiseries",
    icon: "🏡",
    image: "/images/maconnerie-enduit.webp",
  },
  plomberie: {
    slug: "plomberie",
    title: "Plomberie",
    description: "Installation, réparation et dépannage sanitaire",
    icon: "🔧",
    image: "/images/plomberie-vanne.webp",
  },
  electricite: {
    slug: "electricite",
    title: "Électricité",
    description: "Installation électrique, tableau, mise aux normes",
    icon: "⚡",
    image: "/images/electricite-tableau.webp",
  },
  couverture: {
    slug: "couverture",
    title: "Couverture",
    description: "Toiture, charpente, gouttières et étanchéité",
    icon: "🏘️",
    image: "/images/couverture-maisons.webp",
  },
  "carrelage-sols": {
    slug: "carrelage-sols",
    title: "Carrelage & Sols",
    description: "Pose de carrelage, parquet et sols PVC",
    icon: "🏛️",
    image: "/images/carrelage-laser.webp",
  },
  "peinture-finitions": {
    slug: "peinture-finitions",
    title: "Peinture & Finitions",
    description: "Peinture intérieure/extérieure, enduits et finitions",
    icon: "🎨",
    image: "/images/peinture-rouleau.webp",
  },
  "pompe-chaleur-climatisation": {
    slug: "pompe-chaleur-climatisation",
    title: "Pompe à Chaleur & Climatisation",
    description: "PAC air-air, air-eau et systèmes de climatisation",
    icon: "❄️",
    image: "/images/pac-jardin.webp",
  },
};
