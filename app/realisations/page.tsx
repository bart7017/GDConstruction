import { Container } from "@components/Container";
import { RealisationsGrid } from "@components/RealisationsGrid";
import { Metadata } from 'next';
import { PageHeader, Section } from "@components/Page";

export const metadata: Metadata = {
  title: 'Nos Réalisations en Seine-et-Marne',
  description: 'Découvrez nos dernières réalisations de maçonnerie, rénovation, plomberie et électricité à Pamfou et Seine-et-Marne. Portfolio de travaux de qualité avec photos avant/après.',
  keywords: ['réalisations GD Construction', 'chantiers Pamfou', 'portfolio maçonnerie', 'travaux Seine-et-Marne', 'avant après rénovation', 'photos chantier'],
  alternates: {
    canonical: 'https://www.gdconstruction.net/realisations',
  },
  openGraph: {
    title: 'Nos Réalisations | GD Construction Portfolio',
    description: 'Portfolio de nos réalisations en maçonnerie et rénovation à Pamfou.',
    type: 'website',
  },
};


export default function Realisations() {
  return (
    <Container>
      <PageHeader
        kicker="Réalisations"
        title="Nos réalisations"
        intro="Découvrez notre savoir-faire à travers nos derniers chantiers en Seine-et-Marne. Des projets qui témoignent de notre expertise dans tous les corps d'état."
      />
      <RealisationsGrid />

      <Section tone="white">
        <dl className="grid gap-10 md:grid-cols-3">
          {[
            { value: "150+", label: "Chantiers réalisés" },
            { value: "2014", label: "Création de l'entreprise" },
            { value: "50km", label: "Zone d'intervention" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse border-t border-ardoise/15 pt-6">
              <dt className="mt-2 text-ardoise/75">{stat.label}</dt>
              <dd className="display-title text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </Container>
  );
}
