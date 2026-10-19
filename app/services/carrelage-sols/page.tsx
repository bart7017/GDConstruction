import { Container } from "@components/Container";
import { ServiceJsonLd } from "@components/JsonLd";
import { RelatedServices } from "@components/RelatedServices";
import { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from "@components/Button";
import { Blocks, PageHeader, Points, Section } from "@components/Page";

export const metadata: Metadata = {
  title: 'Carrelage et Sols à Pamfou | Carreleur Seine-et-Marne',
  description: 'Carreleur professionnel à Pamfou (77830). Pose carrelage, parquet, sols PVC, faïence. Intérieur et extérieur. Devis gratuit GD Construction.',
  keywords: ['carreleur Pamfou', 'pose carrelage Seine-et-Marne', 'carrelage sol mur 77830', 'parquet', 'sols PVC', 'faïence salle de bain'],
  openGraph: {
    title: 'Carrelage et Sols | GD Construction Pamfou',
    description: 'Carreleur professionnel à Pamfou. Carrelage, parquet, sols PVC.',
    url: 'https://www.gdconstruction.net/services/carrelage-sols',
  },
  alternates: {
    canonical: 'https://www.gdconstruction.net/services/carrelage-sols',
  },
};

const services = [
  {
    title: "Carrelage Sol",
    icon: "🏛️",
    description: "Pose de carrelage tous formats et matériaux",
    details: [
      "Grès cérame et porcelaine",
      "Carrelage grand format 60x60 à 120x120",
      "Imitation parquet et béton",
      "Carrelage antidérapant",
      "Pose droite, diagonale, chevron",
      "Joints fins et épais"
    ]
  },
  {
    title: "Faïence Murale", 
    icon: "🎨",
    description: "Revêtements muraux cuisine et salle de bain",
    details: [
      "Faïence traditionnelle et moderne",
      "Mosaïque verre et céramique",
      "Carrelage métro et hexagonal",
      "Listel et frise décorative",
      "Pose en quinconce ou alignée",
      "Joints colorés et paillettes"
    ]
  },
  {
    title: "Parquet & Stratifié",
    icon: "🪵",
    description: "Sols bois massif, contrecollé et stratifié",
    details: [
      "Parquet massif chêne, hêtre",
      "Contrecollé 2 et 3 plis",
      "Stratifié haute résistance",
      "Pose clouée, collée, flottante",
      "Plinthes et barres de seuil",
      "Vitrification et entretien"
    ]
  },
  {
    title: "Sols PVC & Lino",
    icon: "📐",
    description: "Revêtements souples résistants",
    details: [
      "Lames PVC clipsables",
      "Dalles et rouleaux",
      "Imitation parquet et carrelage",
      "Sol antibactérien",
      "Pose sur chape ou ancien sol",
      "Soudure et finitions étanches"
    ]
  },
  {
    title: "Terrasse Extérieure",
    icon: "🌿",
    description: "Aménagements extérieurs durables", 
    details: [
      "Carrelage terrasse antidérapant",
      "Dalle sur plot et plot réglable",
      "Pierre naturelle et reconstituée",
      "Pavés et opus romain",
      "Étanchéité et évacuation",
      "Joints de dilatation"
    ]
  },
  {
    title: "Préparation et Ragréage des Sols",
    icon: "🔨",
    description: "Mise à niveau et préparation parfaite",
    details: [
      "Dépose ancien revêtement",
      "Traitement humidité",
      "Chape sèche et liquide",
      "Primaire d'accrochage",
      "Ragréage autolissant",
      "Planéité et nivellement"
    ]
  }
];

export default function CarrelageSols() {
  return (
    <Container>
      <ServiceJsonLd
        name="Carrelage et sols"
        description="Pose de carrelage, parquet et sols PVC à Pamfou et en Seine-et-Marne."
        slug="carrelage-sols"
      />
      <PageHeader
        kicker="Carrelage et sols"
        title="Carreleur professionnel à Pamfou"
        intro="GD Construction maîtrise la pose de tous revêtements de sols et murs en Seine-et-Marne. Carrelage, parquet, PVC : notre expertise technique garantit un résultat parfait et durable dans tous vos espaces."
        image="/images/carrelage-sol.webp"
        imageAlt="Pose de carrelage au sol"
      >
        <ButtonLink href="/contact" variant="signal">Demander un devis gratuit</ButtonLink>
        <ButtonLink href="tel:+33695918103" variant="line">06 95 91 81 03</ButtonLink>
      </PageHeader>

      <Section title="Le carrelage en images" intro="Photos d'illustration des travaux que nous réalisons.">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { src: "/images/carrelage-laser.webp", alt: "Pose de carrelage avec laser d'alignement", caption: "Pose avec laser d'alignement pour précision parfaite" },
            { src: "/images/sol-parquet.webp", alt: "Pose de parquet", caption: "Parquet massif posé en chevron" },
            { src: "/images/carrelage-joints.webp", alt: "Outils de jointoiement sur un carrelage terre cuite", caption: "Joints et finitions" },
            { src: "/images/carrelage-mortier.webp", alt: "Étalement de la colle à carrelage", caption: "Encollage avant pose" },
          ].map((photo) => (
            <figure key={photo.src}>
              <div className="relative aspect-[4/3] overflow-hidden [&_img]:reveal-zoom rounded-2xl">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-ardoise/70">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section title="Nos prestations carrelage et sols">
        <Blocks
          cols={3}
          items={services.map((service) => ({
            title: service.title,
            text: service.description,
            children: <Points items={service.details} />,
          }))}
        />
      </Section>

      <Section tone="white" title="Carrelages et matériaux disponibles">
        <Blocks
          cols={4}
          items={[
            { type: "Grès Cérame", desc: "Intérieur/extérieur, tous formats", prix: "20-60€/m²" },
            { type: "Faïence", desc: "Mur cuisine, salle de bain", prix: "15-45€/m²" },
            { type: "Pierre Naturelle", desc: "Travertin, marbre, granit", prix: "40-120€/m²" },
            { type: "Parquet Massif", desc: "Chêne, hêtre, châtaignier", prix: "50-150€/m²" },
          ].map((item) => ({
            title: item.type,
            text: item.desc,
            children: <p className="display-title text-3xl">{item.prix}</p>,
          }))}
        />
        <p className="mt-10 text-sm text-ardoise/70">* Prix TTC pose comprise, hors préparation support</p>
      </Section>

      <Section title="Notre méthode de pose professionnelle">
        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { title: "Diagnostic", desc: "Mesures et état du support" },
            { title: "Préparation", desc: "Primaire d'accrochage, ragréage et mise à niveau" },
            { title: "Calepinage", desc: "Plan de pose optimal" },
            { title: "Pose", desc: "Collage et alignement" },
            { title: "Finitions", desc: "Joints après séchage, puis nettoyage" },
          ].map((item, index) => (
            <li key={item.title} className="border-t border-ardoise/15 pt-5">
              <span className="display-title text-4xl text-ardoise/30">{index + 1}</span>
              <h3 className="mt-3 font-display text-xl font-bold [font-stretch:115%]">{item.title}</h3>
              <p className="mt-2 text-ardoise/75">{item.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="dark" title="Exemples de chantiers types">
        <Blocks
          tone="dark"
          cols={3}
          items={[
            { type: "Salle de Bain Complète", details: "Sol 60x60 + mur faïence + mosaïque", surface: "6m²", duree: "2 jours", prix: "À partir de 950€" },
            { type: "Cuisine Moderne", details: "Crédence + sol grand format", surface: "15m²", duree: "3 jours", prix: "À partir de 1350€" },
            { type: "Terrasse Extérieure", details: "Carrelage antidérapant sur plot", surface: "25m²", duree: "4 jours", prix: "À partir de 1800€" },
          ].map((example) => ({
            title: example.type,
            text: example.details,
            children: (
              <div className="grid gap-1">
                <p><strong className="text-chaux">Surface :</strong> {example.surface}</p>
                <p><strong className="text-chaux">Durée :</strong> {example.duree}</p>
                <p className="display-title mt-3 text-2xl text-signal">{example.prix}</p>
              </div>
            ),
          }))}
        />
        <p className="mt-10 text-sm text-chaux/70">* Prix indicatifs fourniture et pose, devis personnalisé selon matériaux choisis</p>
      </Section>

      <RelatedServices slugs={["peinture-finitions", "renovation-interieure", "maconnerie-generale"]} />
    </Container>
  );
}
