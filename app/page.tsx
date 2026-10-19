import { Container } from "@components/Container";
import { Hero } from "@components/Hero";
import { About } from "@components/About";
import { Section } from "@components/Page";
import { ServicesMosaic } from "@components/ServicesMosaic";
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
      <Section
        id="services"
        title="Nos métiers"
        intro="Maçonnerie, rénovation intérieure et extérieure, plomberie, électricité, couverture : nous coordonnons tous les corps d'état pour un chantier clé en main."
      >
        <ServicesMosaic />
      </Section>
      <About />
      <Testimonials />
    </Container>
  );
}
