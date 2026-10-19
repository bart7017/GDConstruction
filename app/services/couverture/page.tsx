import { Container } from "@components/Container";
import { ServiceJsonLd } from "@components/JsonLd";
import { RelatedServices } from "@components/RelatedServices";
import { Metadata } from 'next';
import { ButtonLink } from "@components/Button";
import { Blocks, Gallery, PageHeader, Points, Section } from "@components/Page";

export const metadata: Metadata = {
  title: 'Couverture Toiture à Pamfou | Couvreur Seine-et-Marne',
  description: 'Couvreur professionnel à Pamfou (77830). Toiture, charpente, gouttières, isolation. Réparation, rénovation, neuf. Devis gratuit GD Construction.',
  keywords: ['couvreur Pamfou', 'toiture Seine-et-Marne', 'réparation toiture 77830', 'charpente', 'gouttières', 'isolation toiture', 'couverture ardoise tuile'],
  openGraph: {
    title: 'Couverture Toiture | GD Construction Pamfou',
    description: 'Couvreur professionnel à Pamfou. Toiture, charpente, gouttières.',
    url: 'https://www.gdconstruction.net/services/couverture',
  },
  alternates: {
    canonical: 'https://www.gdconstruction.net/services/couverture',
  },
};

const services = [
  {
    title: "Toiture Complète",
    icon: "🏘️",
    description: "Création et rénovation de toitures tous matériaux",
    details: [
      "Tuiles terre cuite et béton",
      "Ardoises naturelles et synthétiques", 
      "Bac acier et tôles ondulées",
      "Zinc et cuivre traditionnel",
      "Shingle et membranes EPDM",
      "Toitures végétalisées"
    ]
  },
  {
    title: "Charpente Bois",
    icon: "🏗️", 
    description: "Construction et réparation de charpentes",
    details: [
      "Charpente traditionnelle fermette",
      "Modification et renforcement", 
      "Traitement contre parasites",
      "Isolation sous toiture",
      "Aménagement de combles",
      "Création d'ouvertures (Velux)"
    ]
  },
  {
    title: "Zinguerie & Étanchéité",
    icon: "💧",
    description: "Évacuation des eaux et étanchéité",
    details: [
      "Gouttières zinc, PVC, alu",
      "Descentes et collecteurs",
      "Noues et solins",
      "Faîtages et arêtiers",
      "Étanchéité terrasse",
      "Membrane d'étanchéité"
    ]
  },
  {
    title: "Isolation Thermique",
    icon: "🌡️",
    description: "Isolation performante de vos combles",
    details: [
      "Laine de verre et roche",
      "Ouate de cellulose soufflée",
      "Isolation des rampants sous toiture",
      "Sarking par-dessus la charpente",
      "Pare-vapeur et freine-vapeur"
    ]
  },
  {
    title: "Réparations Urgentes",
    icon: "🚨",
    description: "Intervention rapide sur sinistres",
    details: [
      "Fuite de toiture",
      "Tuiles cassées ou déplacées",
      "Gouttière débordante",
      "Après tempête ou grêle",
      "Bâchage provisoire",
      "Dossier assurance"
    ]
  },
  {
    title: "Démoussage & Entretien",
    icon: "🧽",
    description: "Nettoyage et maintenance de toitures",
    details: [
      "Contrôle et diagnostic",
      "Démoussage haute pression",
      "Traitement anti-mousse",
      "Hydrofuge et imperméabilisant",
      "Nettoyage de gouttières",
      "Contrat d'entretien annuel"
    ]
  }
];

export default function Couverture() {
  return (
    <Container>
      <ServiceJsonLd
        name="Couverture"
        description="Réfection de toiture, charpente, gouttières et étanchéité à Pamfou et en Seine-et-Marne."
        slug="couverture"
      />
      <PageHeader
        kicker="Couverture"
        title="Couvreur professionnel à Pamfou"
        intro="GD Construction assure tous vos travaux de couverture en Seine-et-Marne. Toiture neuve, réparation, charpente, gouttières : notre savoir-faire artisanal protège votre habitat durablement."
        image="/images/couverture-maisons.webp"
        imageAlt="Charpente et toiture en construction"
      >
        <ButtonLink href="/contact" variant="signal">Demander un devis gratuit</ButtonLink>
        <ButtonLink href="tel:+33695918103" variant="line">06 95 91 81 03</ButtonLink>
      </PageHeader>

      <Section title="Nos prestations de couverture">
        <Blocks
          cols={3}
          items={services.map((service) => ({
            title: service.title,
            text: service.description,
            children: <Points items={service.details} />,
          }))}
        />
      </Section>

      <Section tone="white" title="Types de couvertures réalisées">
        <Blocks
          cols={4}
          items={[
            { type: "Tuiles", desc: "Terre cuite, béton, canal", prix: "45-80€/m²" },
            { type: "Ardoises", desc: "Naturelles, fibrociment", prix: "60-120€/m²" },
            { type: "Zinc", desc: "Joint debout, tasseaux", prix: "70-100€/m²" },
            { type: "Bac Acier", desc: "Sandwich, simple peau", prix: "25-45€/m²" },
          ].map((item) => ({
            title: item.type,
            text: item.desc,
            children: <p className="display-title text-3xl">{item.prix}</p>,
          }))}
        />
        <p className="mt-10 text-sm text-ardoise/70">* Prix TTC pose comprise, hors charpente et isolation</p>
      </Section>

      <Section
        tone="dark"
        title="Urgences toiture 7j/7"
        intro="Intervention rapide sur fuites et sinistres"
      >
        <Blocks
          tone="dark"
          items={[
            {
              title: "Situations d'urgence",
              children: (
                <Points
                  items={[
                    "Fuite importante après tempête",
                    "Tuiles arrachées ou cassées",
                    "Gouttière arrachée",
                    "Chute d'arbre sur toiture",
                  ]}
                />
              ),
            },
            {
              title: "Appelez-nous",
              text: "Bâchage provisoire si nécessaire",
              children: <ButtonLink href="tel:+33695918103" variant="signal">Urgence : 06 95 91 81 03</ButtonLink>,
            },
          ]}
        />
      </Section>

      <Section title="La couverture en images" intro="Photos d'illustration des travaux que nous réalisons.">
        <Gallery
          photos={[
            { src: "/images/couverture-tuiles.webp", alt: "Toiture en tuiles terre cuite", caption: "Tuiles terre cuite" },
            { src: "/images/couverture-velux.webp", alt: "Toit avec fenêtre de toit", caption: "Fenêtre de toit et ventilation" },
            { src: "/images/charpente-toiture.webp", alt: "Chevrons d'une charpente bois", caption: "Charpente bois avant couverture" },
          ]}
        />
      </Section>

      <RelatedServices slugs={["renovation-exterieure", "maconnerie-generale", "peinture-finitions"]} />
    </Container>
  );
}
