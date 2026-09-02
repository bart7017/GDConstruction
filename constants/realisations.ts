// Source unique des slugs de réalisations. Le sitemap, les routes statiques de
// `/realisations/[slug]` et la grille de `/realisations` s'appuient tous dessus :
// ajouter une réalisation ici fait échouer le build tant que les trois ne suivent pas.
export const realisationSlugs = [
  "renovation-cuisine-pamfou-2024",
  "extension-maison-melun-2024",
  "salle-bain-fontainebleau-2024",
  "toiture-nemours-2024",
  "escalier-beton-provins-2024",
  "pompe-chaleur-dammarie-2024",
] as const;

export type RealisationSlug = (typeof realisationSlugs)[number];

// Libellés courts, utilisés par `/llms.txt`. Le `Record` typé sur les slugs
// interdit d'ajouter une réalisation sans lui donner de libellé ici.
export const realisationLabels: Record<RealisationSlug, string> = {
  "renovation-cuisine-pamfou-2024": "Rénovation complète d'une cuisine à Pamfou",
  "extension-maison-melun-2024": "Extension de maison à Melun",
  "salle-bain-fontainebleau-2024": "Rénovation d'une salle de bain à Fontainebleau",
  "toiture-nemours-2024": "Réfection de toiture à Nemours",
  "escalier-beton-provins-2024": "Escalier béton sur mesure à Provins",
  "pompe-chaleur-dammarie-2024": "Installation d'une pompe à chaleur à Dammarie",
};
