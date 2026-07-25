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
