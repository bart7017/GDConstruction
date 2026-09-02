import { servicesBySlug } from '@constants/services';
import { realisationSlugs, realisationLabels } from '@constants/realisations';

const BASE_URL = 'https://www.gdconstruction.net';

// Format llmstxt.org : un H1, un résumé en blockquote, puis des sections de
// liens. Généré depuis les mêmes constantes que le sitemap pour rester aligné.
export const dynamic = 'force-static';

export function GET() {
  const services = Object.values(servicesBySlug)
    .map((s) => `- [${s.title}](${BASE_URL}/services/${s.slug}) : ${s.description}`)
    .join('\n');

  const realisations = realisationSlugs
    .map((slug) => `- [${realisationLabels[slug]}](${BASE_URL}/realisations/${slug})`)
    .join('\n');

  const body = `# GD Construction

> Entreprise de maçonnerie générale et de rénovation tous corps d'état basée à
> Pamfou (77830), en Seine-et-Marne. Interventions dans un rayon de 50 km autour
> de Pamfou : Melun, Fontainebleau, Nemours, Provins, Dammarie-lès-Lys.
> Devis gratuit au 06 95 91 81 03.

## Prestations

${services}

## Réalisations

- [Toutes nos réalisations](${BASE_URL}/realisations)
${realisations}

## L'entreprise

- [À propos](${BASE_URL}/a-propos) : présentation de GD Construction et de son équipe
- [Contact](${BASE_URL}/contact) : coordonnées, horaires et zone d'intervention
- [Mentions légales](${BASE_URL}/mentions-legales) : éditeur, hébergeur et traitement des données

## Informations pratiques

- Téléphone : 06 95 91 81 03
- Adresse : 77830 Pamfou, Seine-et-Marne, France
- Horaires : lundi-vendredi 8h-18h, samedi 8h-12h, urgences 7j/7
- Zone d'intervention : 50 km autour de Pamfou
- Sitemap : ${BASE_URL}/sitemap.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
