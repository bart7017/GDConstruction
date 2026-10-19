import { Container } from "@components/Container";
import { ServiceJsonLd } from "@components/JsonLd";
import { RelatedServices } from "@components/RelatedServices";
import { Metadata } from 'next';
import { ButtonLink } from "@components/Button";
import { Blocks, Gallery, PageHeader, Points, Section } from "@components/Page";

export const metadata: Metadata = {
  title: 'Peinture et Finitions à Pamfou | Peintre Seine-et-Marne',
  description: 'Peintre professionnel à Pamfou (77830). Peinture intérieure, extérieure, finitions décoratives, enduits. Devis gratuit GD Construction.',
  keywords: ['peintre Pamfou', 'peinture Seine-et-Marne', 'peinture intérieure 77830', 'peinture extérieure', 'finitions décoratives', 'enduit décoratif'],
  openGraph: {
    title: 'Peinture et Finitions | GD Construction Pamfou',
    description: 'Peintre professionnel à Pamfou. Peinture intérieure, extérieure, finitions.',
    url: 'https://www.gdconstruction.net/services/peinture-finitions',
  },
  alternates: {
    canonical: 'https://www.gdconstruction.net/services/peinture-finitions',
  },
};

const services = [
  {
    title: "Peinture Intérieure",
    icon: "🎨",
    description: "Peinture et décoration de tous vos espaces intérieurs",
    details: [
      "Peinture murs et plafonds",
      "Peinture acrylique et glycéro",
      "Finitions mate, satinée, velours, brillante",
      "Plafonds tendus et sous-pente",
      "Nuancier et conseils couleurs",
      "Chantier occupé : travail par pièce"
    ]
  },
  {
    title: "Peinture Extérieure",
    icon: "🏠",
    description: "Mise en peinture des façades et boiseries extérieures",
    details: [
      "Peinture pliolite et siloxane",
      "Peinture minérale sur support ancien",
      "Peinture bois extérieur et bardage",
      "Volets, portails et garde-corps",
      "Lasure et saturateur",
      "Teintes conformes au PLU"
    ]
  },
  {
    title: "Enduits Décoratifs",
    icon: "✨", 
    description: "Finitions décoratives et texturées",
    details: [
      "Enduit à la chaux",
      "Crépi d'intérieur",
      "Stuc et tadelakt",
      "Béton ciré mural et plan de travail",
      "Patines et effets",
      "Techniques traditionnelles"
    ]
  },
  {
    title: "Papier Peint",
    icon: "📜",
    description: "Pose de papier peint et revêtements muraux",
    details: [
      "Dépose ancien papier",
      "Papier peint traditionnel",
      "Intissé et vinyle",
      "Toile de verre",
      "Fibres naturelles",
      "Raccords et angles parfaits"
    ]
  },
  {
    title: "Préparation des Murs et Plafonds",
    icon: "🔨",
    description: "Préparation soignée avant finitions", 
    details: [
      "Bâchage et protection des sols",
      "Lessivage des supports",
      "Rebouchage fissures et trous",
      "Ratissage et enduit de lissage",
      "Ponçage, égrenage et dépoussiérage",
      "Sous-couche adaptée au support"
    ]
  },
  {
    title: "Peinture Spécialisée",
    icon: "🎯",
    description: "Peintures techniques et spécialisées",
    details: [
      "Peinture anti-humidité et anti-salpêtre",
      "Peinture isolante thermique",
      "Sol garage et atelier",
      "Peinture magnétique",
      "Peinture tableau noir",
      "Marquage au sol"
    ]
  }
];

export default function PeintureFinition() {
  return (
    <Container>
      <ServiceJsonLd
        name="Peinture et finitions"
        description="Peinture intérieure et extérieure, enduits décoratifs et finitions à Pamfou et en Seine-et-Marne."
        slug="peinture-finitions"
      />
      <PageHeader
        kicker="Peinture et finitions"
        title="Peintre professionnel à Pamfou"
        intro="GD Construction transforme vos espaces avec des finitions peinture de qualité en Seine-et-Marne. Intérieur, extérieur, décoration : notre expertise artisanale sublime vos projets avec soin et précision."
        image="/images/peinture-rouleau.webp"
        imageAlt="Préparation pour travaux de peinture"
      >
        <ButtonLink href="/contact" variant="signal">Demander un devis gratuit</ButtonLink>
        <ButtonLink href="tel:+33695918103" variant="line">06 95 91 81 03</ButtonLink>
      </PageHeader>

      <Section title="Nos prestations de peinture et finitions">
        <Blocks
          cols={3}
          items={services.map((service) => ({
            title: service.title,
            text: service.description,
            children: <Points items={service.details} />,
          }))}
        />
      </Section>

      <Section tone="white" title="Peintures et finitions disponibles">
        <Blocks
          cols={4}
          items={[
            { type: "Acrylique", desc: "Lessivable, écologique", prix: "8-15€/m²" },
            { type: "Glycéro", desc: "Résistante, haute qualité", prix: "12-20€/m²" },
            { type: "Facade", desc: "Pliolite, anti-mousse", prix: "15-25€/m²" },
            { type: "Décorative", desc: "Enduits, effets spéciaux", prix: "20-40€/m²" },
          ].map((item) => ({
            title: item.type,
            text: item.desc,
            children: <p className="display-title text-3xl">{item.prix}</p>,
          }))}
        />
        <p className="mt-10 text-sm text-ardoise/70">* Prix TTC main d&apos;œuvre comprise, hors préparation support</p>
      </Section>

      <Section title="Notre méthode de travail professionnelle">
        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { title: "Diagnostic", desc: "État des supports" },
            { title: "Protection", desc: "Bâchage des sols et meubles, adhésif de masquage" },
            { title: "Préparation", desc: "Lessivage, rebouchage, ponçage, dépoussiérage" },
            { title: "Application", desc: "Sous-couche puis deux couches de finition" },
            { title: "Finitions", desc: "Retrait des protections, retouches, nettoyage" },
          ].map((item, index) => (
            <li key={item.title} className="border-t border-ardoise/15 pt-5">
              <span className="display-title text-4xl text-ardoise/30">{index + 1}</span>
              <h3 className="mt-3 font-display text-xl font-bold [font-stretch:115%]">{item.title}</h3>
              <p className="mt-2 text-ardoise/75">{item.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="dark" title="Peintures de marques reconnues">
        <Blocks
          tone="dark"
          items={[
            {
              title: "Nos marques",
              children: (
                <Points
                  items={[
                    <><strong className="text-chaux">Haut de gamme :</strong> Tollens, Sikkens, Zolpan</>,
                    <><strong className="text-chaux">Qualité pro :</strong> Dulux Valentine, Ripolin</>,
                    <><strong className="text-chaux">Écologique :</strong> Natura, Algo</>,
                    <><strong className="text-chaux">Spécialisée :</strong> Toupret, Weber, Knauf</>,
                  ]}
                />
              ),
            },
            {
              title: "Nos garanties",
              children: (
                <Points items={["Finition garantie 2 ans", "Assurance décennale", "Conseils décoration"]} />
              ),
            },
          ]}
        />
      </Section>

      <Section title="La peinture en images" intro="Photos d'illustration des travaux que nous réalisons.">
        <Gallery
          photos={[
            { src: "/images/peinture-mur-blanc.webp", alt: "Peinture d'un mur blanc au rouleau", caption: "Mise en peinture au rouleau" },
            { src: "/images/peinture-peintre.webp", alt: "Peintre appliquant une couleur au rouleau", caption: "Peinture de couleur sur mur intérieur" },
          ]}
        />
      </Section>

      <RelatedServices slugs={["renovation-interieure", "renovation-exterieure", "carrelage-sols"]} />
    </Container>
  );
}
