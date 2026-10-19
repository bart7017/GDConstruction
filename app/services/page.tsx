import { Container } from "@components/Container";
import { Metadata } from 'next';
import { ButtonLink } from "@components/Button";
import { Blocks, PageHeader, Section } from "@components/Page";
import { ServicesMosaic } from "@components/ServicesMosaic";

export const metadata: Metadata = {
  title: 'Nos Services Tous Corps d\'État à Pamfou',
  description: 'Découvrez tous les services de GD Construction à Pamfou : maçonnerie, rénovation intérieure et extérieure, plomberie, électricité, couverture. Tous corps d\'état.',
  keywords: ['services maçonnerie', 'rénovation tous corps état', 'plomberie Pamfou', 'électricité Seine-et-Marne', 'couverture 77830'],
  openGraph: {
    title: 'Nos Services | GD Construction',
    description: 'Découvrez tous les services de GD Construction à Pamfou : maçonnerie, rénovation, plomberie, électricité, couverture.',
    url: 'https://www.gdconstruction.net/services',
  },
  alternates: {
    canonical: 'https://www.gdconstruction.net/services',
  },
};

export default function Services() {
  return (
    <Container>
      <PageHeader
        kicker="Tous corps d'état"
        title="Nos services de maçonnerie et rénovation"
        intro="GD Construction intervient pour tous vos travaux de maçonnerie générale et rénovation à Pamfou et dans toute la Seine-et-Marne. Spécialistes tous corps d'état."
      >
        <ButtonLink href="/contact" variant="signal">Demander un devis</ButtonLink>
        <ButtonLink href="tel:+33695918103" variant="line">06 95 91 81 03</ButtonLink>
      </PageHeader>

      <Section className="pt-0 sm:pt-4">
        <ServicesMosaic />
      </Section>

      <Section tone="dark" title="Zone d'intervention" intro="Nous intervenons à Pamfou et dans un rayon de 50 km.">
        <Blocks
          tone="dark"
          cols={4}
          items={[
            { title: "Seine-et-Marne (77)", text: "Pamfou, Melun, Fontainebleau, Montereau-Fault-Yonne, Nemours" },
            { title: "Essonne (91)", text: "Milly-la-Forêt, La Ferté-Alais, Boutigny-sur-Essonne" },
            { title: "Yonne (89)", text: "Sens, Villeneuve-sur-Yonne, Pont-sur-Yonne" },
            { title: "Val-de-Marne (94)", text: "Communes limitrophes" },
          ]}
        />
      </Section>
    </Container>
  );
}
