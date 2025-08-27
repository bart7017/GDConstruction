import { Container } from "@components/Container";
import { CTA } from "@components/CTA";
import { Hero } from "@components/Hero";
import { SubHero } from "@components/SubHero";
import { About } from "@components/About";
import { Testimonials } from "@components/Testimonials";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GD Construction | Maçonnerie Générale et Rénovation à Pamfou (77830)',
  description: 'Entreprise GD Construction spécialisée en maçonnerie générale et rénovation à Pamfou. Tous corps d\'état : plomberie, électricité, couverture. Devis gratuit au 06 95 91 81 03.',
  keywords: ['maçon Pamfou', 'rénovation Pamfou', 'maçonnerie Seine-et-Marne', 'plombier Pamfou', 'électricien 77830', 'couvreur Pamfou', 'devis gratuit maçonnerie'],
  openGraph: {
    title: 'GD Construction | Maçonnerie Générale et Rénovation à Pamfou',
    description: 'Entreprise GD Construction spécialisée en maçonnerie générale et rénovation à Pamfou. Tous corps d\'état.',
    url: 'https://www.gdconstruction.net',
  },
  alternates: {
    canonical: 'https://www.gdconstruction.net',
  },
};

export default function Home() {
  return (
    <Container>
      <Hero />
      <SubHero />
      <About />
      <Testimonials />
      <CTA />
    </Container>
  );
}