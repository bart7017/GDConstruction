export type ServiceEntry = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export const servicesBySlug: Record<string, ServiceEntry> = {
  "maconnerie-generale": {
    slug: "maconnerie-generale",
    title: "Maçonnerie Générale",
    description: "Murs, dalles béton, fondations, extensions et gros œuvre",
    icon: "🏗️",
  },
  "renovation-interieure": {
    slug: "renovation-interieure",
    title: "Rénovation Intérieure",
    description: "Cuisine, salle de bain, cloisons et menuiseries intérieures",
    icon: "🏠",
  },
  "renovation-exterieure": {
    slug: "renovation-exterieure",
    title: "Rénovation Extérieure",
    description: "Ravalement, isolation par l'extérieur, bardage et menuiseries",
    icon: "🏡",
  },
  plomberie: {
    slug: "plomberie",
    title: "Plomberie",
    description: "Installation, réparation et dépannage sanitaire",
    icon: "🔧",
  },
  electricite: {
    slug: "electricite",
    title: "Électricité",
    description: "Installation électrique, tableau, mise aux normes",
    icon: "⚡",
  },
  couverture: {
    slug: "couverture",
    title: "Couverture",
    description: "Toiture, charpente, gouttières et étanchéité",
    icon: "🏘️",
  },
  "carrelage-sols": {
    slug: "carrelage-sols",
    title: "Carrelage & Sols",
    description: "Pose de carrelage, parquet et sols PVC",
    icon: "🏛️",
  },
  "peinture-finitions": {
    slug: "peinture-finitions",
    title: "Peinture & Finitions",
    description: "Peinture intérieure/extérieure, enduits et finitions",
    icon: "🎨",
  },
  "pompe-chaleur-climatisation": {
    slug: "pompe-chaleur-climatisation",
    title: "Pompe à Chaleur & Climatisation",
    description: "PAC air-air, air-eau et systèmes de climatisation",
    icon: "❄️",
  },
};
