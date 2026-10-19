import { Container } from "@components/Container";
import { ServiceJsonLd } from "@components/JsonLd";
import { RelatedServices } from "@components/RelatedServices";
import { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from "@components/Button";
import { Blocks, PageHeader, Points, Section } from "@components/Page";

export const metadata: Metadata = {
  title: 'Maçonnerie Générale à Pamfou',
  description: 'Spécialiste en maçonnerie générale à Pamfou (77830). Construction de murs, dalles béton, fondations, extensions. Devis gratuit GD Construction.',
  keywords: ['maçon Pamfou', 'maçonnerie générale Seine-et-Marne', 'construction mur béton', 'dalle béton 77830', 'fondations maison', 'extension maçonnerie'],
  openGraph: {
    title: 'Maçonnerie Générale | GD Construction Pamfou',
    description: 'Expert en maçonnerie générale à Pamfou. Construction, extensions, fondations.',
    url: 'https://www.gdconstruction.net/services/maconnerie-generale',
  },
  alternates: {
    canonical: 'https://www.gdconstruction.net/services/maconnerie-generale',
  },
};

const serviceDetails = [
  {
    title: "Construction de Murs",
    description: "Murs porteurs, murs de clôture, murets en béton, parpaings ou pierre naturelle",
    details: ["Murs porteurs intérieurs et extérieurs", "Murs de clôture et murets décoratifs", "Maçonnerie traditionnelle et moderne", "Respect des DTU et normes"]
  },
  {
    title: "Dalles et Fondations", 
    description: "Coulage de dalles béton, fondations de maisons, radiers et semelles",
    details: ["Étude de sol et calcul de charges", "Fondations superficielles et profondes", "Radiers et longrines", "Dalles béton armé toutes épaisseurs"]
  },
  {
    title: "Extensions et Agrandissements",
    description: "Création d'extensions de maison, vérandas, garages et dépendances",
    details: ["Extensions en dur tous styles", "Surélévations et combles", "Garages et abris", "Intégration architecturale parfaite"]
  },
  {
    title: "Gros Œuvre",
    description: "Réalisation complète du gros œuvre pour constructions neuves",
    details: ["Terrassement et préparation", "Structure béton armé", "Élévation des murs", "Coordination avec autres corps d'état"]
  }
];

export default function MaconnerieGenerale() {
  return (
    <Container>
      <ServiceJsonLd
        name="Maçonnerie générale"
        description="Construction de murs, dalles béton, fondations, extensions et travaux de gros œuvre à Pamfou et en Seine-et-Marne."
        slug="maconnerie-generale"
      />
      <PageHeader
        kicker="Maçonnerie générale"
        title="Expert en maçonnerie générale à Pamfou"
        intro="GD Construction réalise tous vos travaux de maçonnerie générale en Seine-et-Marne. De la simple réparation aux constructions neuves, notre expertise technique garantit des réalisations durables et conformes aux normes."
        image="/images/maconnerie-brique.webp"
        imageAlt="Construction d'un mur en brique"
      >
        <ButtonLink href="/contact" variant="signal">Demander un devis gratuit</ButtonLink>
        <ButtonLink href="tel:+33695918103" variant="line">06 95 91 81 03</ButtonLink>
      </PageHeader>

      <Section title="Nos prestations de maçonnerie">
        <Blocks
          items={serviceDetails.map((service) => ({
            title: service.title,
            text: service.description,
            children: <Points items={service.details} />,
          }))}
        />
      </Section>

      <Section title="La maçonnerie en images" intro="Photos d'illustration des travaux que nous réalisons.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { src: "/images/maconnerie-enduit.webp", alt: "Application d'enduit sur un mur", caption: "Finition enduit extérieur" },
            { src: "/images/maconnerie-decoupe-mur.webp", alt: "Découpe d'un mur", caption: "Découpe de mur porteur" },
            { src: "/images/charpente-toiture.webp", alt: "Charpente et gros œuvre", caption: "Gros œuvre et charpente" },
          ].map((photo) => (
            <figure key={photo.src}>
              <div className="relative aspect-[4/3] overflow-hidden [&_img]:reveal-zoom rounded-2xl">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-ardoise/70">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="white" title="Pourquoi choisir GD Construction pour vos travaux de maçonnerie ?">
        <Blocks
          cols={3}
          items={[
            { title: "Expertise reconnue", text: "24 ans d'expérience dans tous types de maçonnerie." },
            { title: "Réactivité", text: "Devis sous 48h, intervention rapide sur Pamfou et 50km." },
            { title: "Garanties", text: "Assurance décennale, garantie sur tous nos travaux." },
          ]}
        />
      </Section>

      <Section tone="dark" title="Zone d'intervention maçonnerie">
        <Blocks
          tone="dark"
          items={[
            {
              title: "Secteurs d'intervention",
              children: (
                <Points
                  items={[
                    <><strong className="text-chaux">Seine-et-Marne (77) :</strong> Pamfou, Melun, Fontainebleau, Montereau-Fault-Yonne, Nemours</>,
                    <><strong className="text-chaux">Essonne (91) :</strong> Milly-la-Forêt, La Ferté-Alais, Boutigny-sur-Essonne</>,
                    <><strong className="text-chaux">Yonne (89) :</strong> Sens, Villeneuve-sur-Yonne, Pont-sur-Yonne</>,
                  ]}
                />
              ),
            },
            {
              title: "Nos engagements",
              children: (
                <Points
                  items={[
                    "Déplacement gratuit dans un rayon de 50km",
                    "Devis détaillé et gratuit sous 48h",
                    "Respect des délais convenus",
                    "Chantier propre et sécurisé",
                  ]}
                />
              ),
            },
          ]}
        />
      </Section>

      <RelatedServices slugs={["renovation-exterieure", "couverture", "renovation-interieure"]} />
    </Container>
  );
}
