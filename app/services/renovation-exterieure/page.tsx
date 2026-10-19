import { Container } from "@components/Container";
import { ServiceJsonLd } from "@components/JsonLd";
import { RelatedServices } from "@components/RelatedServices";
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonLink } from "@components/Button";
import { Blocks, PageHeader, Points, Section } from "@components/Page";

export const metadata: Metadata = {
  title: 'Ravalement de Façade et ITE à Pamfou',
  description: 'Ravalement de façade, isolation thermique extérieure, bardage, menuiseries et terrasses bois à Pamfou (77830). Devis gratuit GD Construction.',
  keywords: ['ravalement façade Pamfou', 'isolation thermique extérieure Seine-et-Marne', 'bardage façade 77830', 'menuiseries extérieures', 'terrasse bois composite', 'clôture portail'],
  openGraph: {
    title: 'Ravalement de Façade et ITE | GD Construction Pamfou',
    description: 'Ravalement, isolation extérieure, bardage et menuiseries à Pamfou.',
    url: 'https://www.gdconstruction.net/services/renovation-exterieure',
  },
  alternates: {
    canonical: 'https://www.gdconstruction.net/services/renovation-exterieure',
  },
};

const services = [
  {
    title: "Ravalement de Façade",
    icon: "🏢",
    description: "Remise à neuf du support et de l'enduit de vos murs",
    details: [
      "Diagnostic de l'état du support",
      "Déclaration préalable et respect du PLU",
      "Nettoyage haute pression et gommage",
      "Traitement et pontage des fissures",
      "Enduit monocouche ou traditionnel",
      "Hydrofuge de surface"
    ]
  },
  {
    title: "Isolation Thermique par l'Extérieur",
    icon: "🌡️",
    description: "ITE sous enduit : confort et économies d'énergie",
    details: [
      "Polystyrène expansé et laine de roche",
      "Fixation calée-chevillée ou rail",
      "Traitement des ponts thermiques",
      "Rehausse des appuis et tableaux",
      "Finition enduit mince ou hydraulique"
    ]
  },
  {
    title: "Bardage & Habillage de Façade",
    icon: "🪵",
    description: "Habillage ventilé pour protéger et moderniser",
    details: [
      "Bardage bois, composite, fibre-ciment",
      "Ossature bois ou rails métalliques",
      "Lame d'air et grille anti-rongeurs",
      "Pose claire-voie ou à recouvrement",
      "Bardage sur ITE ou sur support existant",
      "Habillage de soubassement"
    ]
  },
  {
    title: "Menuiseries Extérieures",
    icon: "🚪",
    description: "Remplacement portes et fenêtres",
    details: [
      "Fenêtres PVC, alu, bois",
      "Portes d'entrée sécurisées",
      "Volets roulants motorisés",
      "Double et triple vitrage",
      "Pose en rénovation ou dépose totale",
      "Étanchéité à l'air et calfeutrement"
    ]
  },
  {
    title: "Terrasses Bois & Composite",
    icon: "🌿",
    description: "Terrasses et structures bois pour vos extérieurs",
    details: [
      "Ossature et lambourdage sur plots",
      "Lames bois exotique et pin traité",
      "Composite co-extrudé sans entretien",
      "Escaliers et garde-corps extérieurs",
      "Pergolas et abris adossés",
      "Saturateur et entretien annuel"
    ]
  },
  {
    title: "Clôtures, Portails & Limites",
    icon: "🚧",
    description: "Délimitation et sécurisation de votre propriété",
    details: [
      "Clôture rigide, bois ou gabion",
      "Portail battant ou coulissant",
      "Motorisation et interphone",
      "Portillon et brise-vue",
      "Muret de soubassement enduit",
      "Bornage et respect des limites"
    ]
  }
];

const link = "font-semibold text-ardoise underline decoration-signal decoration-2 underline-offset-4 hover:decoration-ardoise";

export default function RenovationExterieur() {
  return (
    <Container>
      <ServiceJsonLd
        name="Rénovation extérieure"
        description="Ravalement de façade, isolation thermique par l'extérieur, bardage, menuiseries extérieures et terrasses bois à Pamfou et en Seine-et-Marne."
        slug="renovation-exterieure"
      />
      <PageHeader
        kicker="Rénovation extérieure"
        title="Ravalement de façade et rénovation extérieure à Pamfou"
        intro="GD Construction traite l'enveloppe verticale de votre maison en Seine-et-Marne : ravalement, isolation par l'extérieur, bardage, menuiseries et aménagement de vos abords. Un chantier qui protège le bâti, fait baisser vos factures et transforme l'allure de votre habitation."
        image="/images/maconnerie-enduit.webp"
        imageAlt="Application d'un enduit de façade"
      >
        <ButtonLink href="/contact" variant="signal">Demander une étude gratuite</ButtonLink>
        <ButtonLink href="tel:+33695918103" variant="line">06 95 91 81 03</ButtonLink>
      </PageHeader>

      <Section title="La façade et l'extérieur en images" intro="Photos d'illustration des travaux que nous réalisons.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { src: "/images/facade-echafaudage-maison.webp", alt: "Maison sous échafaudage pour ravalement", caption: "Échafaudage avant ravalement de façade" },
            { src: "/images/facade-echafaudage-brique.webp", alt: "Façade en brique en cours de rénovation", caption: "Rénovation d'une façade en brique" },
            { src: "/images/menuiserie-rabotage.webp", alt: "Travaux de menuiserie extérieure", caption: "Menuiseries extérieures" },
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

      <Section title="Nos prestations de rénovation extérieure">
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
        title="Un chantier extérieur complet, sans sous-traitance"
        intro="Cette page couvre tout ce qui touche aux murs et aux abords de votre maison. Un projet de rénovation extérieure mobilise souvent d'autres corps d'état, que nous assurons avec nos propres équipes — vous gardez un seul interlocuteur du diagnostic à la réception."
      >
        <Points
          className="max-w-3xl text-lg"
          items={[
            <>Toiture, charpente, gouttières et isolation des combles :{" "}<Link href="/services/couverture" className={link}>voir notre pôle couverture</Link></>,
            <>Extension, création d&apos;ouverture, dalle et fondations :{" "}<Link href="/services/maconnerie-generale" className={link}>voir notre pôle maçonnerie générale</Link></>,
            <>Mise en peinture des façades, volets et boiseries :{" "}<Link href="/services/peinture-finitions" className={link}>voir notre pôle peinture et finitions</Link></>,
            <>Dallage, pavés et carrelage de terrasse :{" "}<Link href="/services/carrelage-sols" className={link}>voir notre pôle carrelage et sols</Link></>,
          ]}
        />
      </Section>

      <Section title="Les étapes de votre projet de rénovation">
        <Blocks
          cols={3}
          items={[
            { step: "1", title: "Diagnostic", desc: "État des lieux complet" },
            { step: "2", title: "Étude", desc: "Solutions et devis" },
            { step: "3", title: "Planning", desc: "Organisation chantier" },
            { step: "4", title: "Travaux", desc: "Réalisation soignée" },
            { step: "5", title: "Réception", desc: "Contrôle et garanties" },
          ].map((item) => ({ title: `${item.step}. ${item.title}`, text: item.desc }))}
        />
      </Section>

      <Section tone="white" title="Pourquoi rénover l'extérieur de votre maison ?">
        <Blocks
          cols={3}
          items={[
            { title: "Économies d'énergie", text: "Jusqu'à 30% d'économies sur votre facture énergétique." },
            { title: "Plus-value immobilière", text: "Augmentation significative de la valeur de votre bien." },
            { title: "Protection durable", text: "Préservation du bâti contre les intempéries." },
          ]}
        />
      </Section>

      <RelatedServices slugs={["couverture", "peinture-finitions", "maconnerie-generale"]} />
    </Container>
  );
}
