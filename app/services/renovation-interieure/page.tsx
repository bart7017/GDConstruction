import { Container } from "@components/Container";
import { ServiceJsonLd } from "@components/JsonLd";
import { RelatedServices } from "@components/RelatedServices";
import { Metadata } from 'next';
import Link from 'next/link';
import { ButtonLink } from "@components/Button";
import { Blocks, Gallery, PageHeader, Points, Section } from "@components/Page";

export const metadata: Metadata = {
  title: 'Rénovation Intérieure à Pamfou',
  description: 'Rénovation intérieure clé en main à Pamfou (77830) : cuisine, salle de bain, cloisons, menuiseries, adaptation PMR. Un seul interlocuteur. Devis gratuit.',
  keywords: ['rénovation intérieure Pamfou', 'rénovation cuisine Seine-et-Marne', 'rénovation salle de bain 77830', 'cloison placo', 'verrière atelier', 'adaptation PMR logement'],
  openGraph: {
    title: 'Rénovation Intérieure | GD Construction Pamfou',
    description: 'Rénovation clé en main à Pamfou : cuisine, salle de bain, cloisons, menuiseries.',
    url: 'https://www.gdconstruction.net/services/renovation-interieure',
  },
  alternates: {
    canonical: 'https://www.gdconstruction.net/services/renovation-interieure',
  },
};

const services = [
  {
    title: "Rénovation de Cuisine",
    icon: "🍽️",
    description: "Création et rénovation complète de cuisines modernes et fonctionnelles",
    details: [
      "Conception et aménagement sur-mesure",
      "Plomberie : évacuation, alimentation eau",
      "Électricité : prises, éclairage, hotte",
      "Carrelage mural et sol",
      "Peinture et finitions"
    ]
  },
  {
    title: "Rénovation Salle de Bain",
    icon: "🚿",
    description: "Transformation complète de vos salles de bain et salles d'eau",
    details: [
      "Douche italienne et baignoires",
      "Plomberie sanitaire complète",
      "Électricité sécurisée (normes NF C 15-100)",
      "VMC et aération",
      "Carrelage étanche et décoratif",
      "Mobilier et accessoires"
    ]
  },
  {
    title: "Cloisons et Aménagements",
    icon: "🧱",
    description: "Création et modification de cloisons pour optimiser vos espaces",
    details: [
      "Cloisons en placo et béton cellulaire",
      "Ouverture et fermeture de murs",
      "Isolation thermique et phonique",
      "Création de placards intégrés",
      "Aménagement sous combles"
    ]
  },
  {
    title: "Menuiseries et Rangements",
    icon: "🚪",
    description: "Menuiseries intérieures et rangements sur-mesure",
    details: [
      "Portes intérieures et blocs-portes",
      "Verrière d'atelier et cloison vitrée",
      "Dressing et placards sur-mesure",
      "Escaliers intérieurs et garde-corps",
      "Plinthes, habillages et finitions bois"
    ]
  },
  {
    title: "Adaptation du Logement",
    icon: "♿",
    description: "Aménagements pour seniors et personnes à mobilité réduite",
    details: [
      "Douche plain-pied et receveur extra-plat",
      "Élargissement des portes",
      "Barres d'appui et sièges de douche",
      "Suppression des seuils et ressauts",
      "Accompagnement dossiers d'aide"
    ]
  },
  {
    title: "Rénovation Clé en Main",
    icon: "🔑",
    description: "Coordination complète de votre chantier, un seul interlocuteur",
    details: [
      "Chiffrage global tous corps d'état",
      "Planning et enchaînement des lots",
      "Commande et réception des matériaux",
      "Gestion des accès en copropriété",
      "Réception de chantier et levée de réserves"
    ]
  }
];

const link = "font-semibold text-ardoise underline decoration-signal decoration-2 underline-offset-4 hover:decoration-ardoise";

export default function RenovationInterieure() {
  return (
    <Container>
      <ServiceJsonLd
        name="Rénovation intérieure"
        description="Rénovation clé en main de cuisine, salle de bain, cloisons, menuiseries intérieures et adaptation du logement à Pamfou et en Seine-et-Marne."
        slug="renovation-interieure"
      />
      <PageHeader
        kicker="Rénovation intérieure"
        title="Rénovation intérieure complète à Pamfou"
        intro="GD Construction repense vos pièces de vie en Seine-et-Marne : cuisine, salle de bain, cloisons, menuiseries et rangements. Nous pilotons l'ensemble des corps d'état pour que votre chantier avance dans le bon ordre, sans coordination à votre charge."
        image="/images/renovation-cuisine-chantier.webp"
        imageAlt="Ossature métallique d'un plafond en cours de pose"
      >
        <ButtonLink href="/contact" variant="signal">Demander un devis gratuit</ButtonLink>
        <ButtonLink href="tel:+33695918103" variant="line">06 95 91 81 03</ButtonLink>
      </PageHeader>

      <Section title="Nos prestations de rénovation intérieure">
        <Blocks
          cols={3}
          items={services.map((service) => ({
            title: service.title,
            text: service.description,
            children: <Points items={service.details} />,
          }))}
        />
      </Section>

      <Section
        tone="white"
        title="Les lots techniques de votre rénovation"
        intro="Une rénovation intérieure enchaîne plusieurs métiers. Nous les réalisons tous en interne, chacun détaillé sur sa propre page — vous n'avez qu'un devis, qu'un planning et qu'un interlocuteur."
      >
        <Points
          className="max-w-3xl text-lg"
          items={[
            <>Carrelage, parquet, sols souples et ragréage :{" "}<Link href="/services/carrelage-sols" className={link}>voir notre pôle carrelage et sols</Link></>,
            <>Peinture, enduits décoratifs et papier peint :{" "}<Link href="/services/peinture-finitions" className={link}>voir notre pôle peinture et finitions</Link></>,
            <>Tableau, prises, éclairage et mise aux normes NF C 15-100 :{" "}<Link href="/services/electricite" className={link}>voir notre pôle électricité</Link></>,
            <>Alimentation, évacuation et sanitaires :{" "}<Link href="/services/plomberie" className={link}>voir notre pôle plomberie</Link></>,
          ]}
        />
      </Section>

      <Section title="Notre méthode de rénovation intérieure">
        <Blocks
          cols={4}
          items={[
            { step: "1", title: "Diagnostic", desc: "Visite technique et conseils personnalisés" },
            { step: "2", title: "Conception", desc: "Plans 3D et devis détaillé gratuit" },
            { step: "3", title: "Réalisation", desc: "Travaux coordonnés par nos équipes" },
            { step: "4", title: "Finition", desc: "Contrôle qualité et nettoyage complet" },
          ].map((item) => ({ title: `${item.step}. ${item.title}`, text: item.desc }))}
        />
      </Section>

      <Section tone="dark" title="Matériaux et équipements de qualité">
        <Blocks
          tone="dark"
          items={[
            {
              title: "Nos partenaires",
              children: (
                <Points
                  items={[
                    <><strong className="text-chaux">Carrelage :</strong> Porcelanosa, Marazzi, Imola</>,
                    <><strong className="text-chaux">Sanitaires :</strong> Grohe, Hansgrohe, Villeroy &amp; Boch</>,
                    <><strong className="text-chaux">Électricité :</strong> Legrand, Schneider Electric</>,
                    <><strong className="text-chaux">Peinture :</strong> Seigneurie, Tollens, Dulux Valentine</>,
                  ]}
                />
              ),
            },
            {
              title: "Nos garanties",
              children: (
                <Points
                  items={["Matériaux certifiés et garantis", "Main d'œuvre garantie 2 ans", "Assurance décennale", "Suivi post-chantier"]}
                />
              ),
            },
          ]}
        />
      </Section>

      <Section title="Exemples de rénovations intérieures" intro="Prix indicatifs, devis personnalisé selon vos besoins.">
        <Blocks
          cols={3}
          items={[
            { type: "Cuisine moderne", surface: "15m²", durée: "2 semaines", prix: "À partir de 8 000€" },
            { type: "Salle de bain complète", surface: "6m²", durée: "1 semaine", prix: "À partir de 5 500€" },
            { type: "Salon + carrelage", surface: "30m²", durée: "3 jours", prix: "À partir de 2 800€" },
          ].map((example) => ({
            title: example.type,
            children: (
              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 tabular-nums">
                <dt className="text-ardoise/60">Surface</dt><dd>{example.surface}</dd>
                <dt className="text-ardoise/60">Durée</dt><dd>{example.durée}</dd>
                <dt className="text-ardoise/60">Prix</dt><dd className="font-semibold">{example.prix}</dd>
              </dl>
            ),
          }))}
        />
      </Section>

      <Section title="La rénovation intérieure en images" intro="Photos d'illustration des travaux que nous réalisons.">
        <Gallery
          photos={[
            { src: "/images/renovation-salle-de-bain-douche.webp", alt: "Salle de bain avec douche à l'italienne", caption: "Salle de bain et douche à l'italienne" },
            { src: "/images/renovation-salle-de-bain.webp", alt: "Salle de bain avec baignoire et douche", caption: "Salle de bain complète" },
            { src: "/images/plafond-ossature.webp", alt: "Pose d'une ossature de faux plafond", caption: "Ossature de faux plafond" },
          ]}
        />
      </Section>

      <RelatedServices slugs={["peinture-finitions", "carrelage-sols", "plomberie"]} />
    </Container>
  );
}
