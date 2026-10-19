import { Container } from "@components/Container";
import { ServiceJsonLd } from "@components/JsonLd";
import { RelatedServices } from "@components/RelatedServices";
import { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from "@components/Button";
import { Blocks, PageHeader, Points, Section } from "@components/Page";

export const metadata: Metadata = {
  title: 'Plomberie à Pamfou | Plombier Seine-et-Marne',
  description: 'Plombier professionnel à Pamfou (77830). Installation, réparation, dépannage urgence. Sanitaires, chauffage, canalisations. Devis gratuit GD Construction.',
  keywords: ['plombier Pamfou', 'plomberie Seine-et-Marne', 'dépannage plomberie 77830', 'installation sanitaire', 'réparation fuite', 'chauffage plomberie'],
  openGraph: {
    title: 'Plomberie | GD Construction Pamfou',
    description: 'Plombier professionnel à Pamfou. Installation, réparation, dépannage.',
    url: 'https://www.gdconstruction.net/services/plomberie',
  },
  alternates: {
    canonical: 'https://www.gdconstruction.net/services/plomberie',
  },
};

const services = [
  {
    title: "Installation Sanitaire",
    icon: "🚿",
    description: "Pose complète d'équipements sanitaires neufs",
    details: [
      "Douches et baignoires",
      "Lavabos, vasques et éviers",
      "WC et bidets",
      "Robinetterie moderne",
      "Raccordements eau chaude/froide",
      "Évacuations et siphons"
    ]
  },
  {
    title: "Réparation & Maintenance",
    icon: "🔧", 
    description: "Dépannage et entretien de vos installations",
    details: [
      "Réparation de fuites",
      "Détartrage et débouchage",
      "Remplacement de joints",
      "Réparation robinetterie",
      "Entretien préventif du réseau",
      "Diagnostic et contrôle"
    ]
  },
  {
    title: "Canalisations",
    icon: "🚰",
    description: "Création et rénovation de réseaux",
    details: [
      "Canalisations PVC, cuivre, PER",
      "Évacuations eaux usées",
      "Collecteurs et regards",
      "Isolation tuyauteries",
      "Passage en gaines techniques",
      "Raccordement tout-à-l'égout"
    ]
  },
  {
    title: "Chauffage Central",
    icon: "🔥",
    description: "Installation et entretien chauffage",
    details: [
      "Chaudières gaz et fioul",
      "Radiateurs et plancher chauffant",
      "Pompes à chaleur",
      "Vase d'expansion et circulateurs",
      "Régulation et programmation", 
      "Contrat d'entretien"
    ]
  },
  {
    title: "Dépannage Urgence",
    icon: "🚨",
    description: "Intervention rapide 7j/7",
    details: [
      "Fuites d'eau importantes",
      "Canalisation bouchée",
      "Panne chaudière",
      "Robinetterie défaillante",
      "Recherche de fuite",
      "Coupure d'eau d'urgence"
    ]
  },
  {
    title: "Mise aux Normes",
    icon: "📋",
    description: "Conformité et réglementations",
    details: [
      "Normes NF DTU 60.1",
      "Accessibilité PMR",
      "Économies d'eau",
      "Sécurité gaz",
      "Attestation de conformité",
      "Diagnostic plomberie"
    ]
  }
];

const urgenceSteps = [
  { step: "1", title: "Appel", desc: "Contactez-nous 24h/24", time: "Immédiat" },
  { step: "2", title: "Diagnostic", desc: "Évaluation sur place", time: "< 1h" },
  { step: "3", title: "Réparation", desc: "Intervention d'urgence", time: "< 2h" },
  { step: "4", title: "Suivi", desc: "Contrôle et garantie", time: "48h" }
];

export default function Plomberie() {
  return (
    <Container>
      <ServiceJsonLd
        name="Plomberie"
        description="Installation, réparation et dépannage de plomberie sanitaire à Pamfou et en Seine-et-Marne."
        slug="plomberie"
      />
      <PageHeader
        kicker="Plomberie"
        title="Plombier professionnel à Pamfou"
        intro="GD Construction assure tous vos travaux de plomberie en Seine-et-Marne. Installation, réparation, dépannage d'urgence : notre expertise technique garantit des solutions durables pour votre confort quotidien."
        image="/images/plomberie-robinet.webp"
        imageAlt="Installation de robinetterie"
      >
        <ButtonLink href="/contact" variant="signal">Demander un devis</ButtonLink>
        <ButtonLink href="tel:+33695918103" variant="line">06 95 91 81 03</ButtonLink>
      </PageHeader>

      <Section title="La plomberie en images" intro="Photos d'illustration des travaux que nous réalisons.">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { src: "/images/plomberie-vanne.webp", alt: "Vannes et tuyauterie", caption: "Installation vannes et tuyauterie" },
            { src: "/images/chauffage-tuyaux.webp", alt: "Tuyauterie d'un système de chauffage", caption: "Système de chauffage central" },
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

      <Section title="Nos prestations de plomberie">
        <Blocks
          cols={3}
          items={services.map((service) => ({
            title: service.title,
            text: service.description,
            children: <Points items={service.details} />,
          }))}
        />
      </Section>

      <Section tone="dark" title="Dépannage urgence 24h/24" intro="Intervention rapide sur Pamfou et 50km.">
        <Blocks
          tone="dark"
          cols={4}
          items={urgenceSteps.map((item) => ({
            title: `${item.step}. ${item.title}`,
            text: item.desc,
            children: <span className="inline-block rounded-full bg-signal px-3 py-1 text-sm font-semibold text-ardoise">{item.time}</span>,
          }))}
        />
        <div className="mt-12">
          <ButtonLink href="tel:+33695918103" variant="signal">Urgence : 06 95 91 81 03</ButtonLink>
        </div>
      </Section>

      <Section title="Tarifs plomberie indicatifs" intro="Tarifs TTC, déplacement gratuit dans un rayon de 50km de Pamfou.">
        <Blocks
          cols={3}
          items={[
            { service: "Réparation fuite", description: "Détection + réparation simple", prix: "80-150€" },
            { service: "Installation WC", description: "Dépose + pose + raccordement", prix: "200-350€" },
            { service: "Remplacement robinet", description: "Dépose + pose + essais", prix: "120-250€" },
            { service: "Débouchage canalisation", description: "Débouchage mécanique", prix: "90-180€" },
            { service: "Installation lavabo", description: "Pose complète + robinetterie", prix: "250-450€" },
            { service: "Dépannage urgence", description: "Intervention + 1h de main d'œuvre", prix: "150-300€" },
          ].map((item) => ({
            title: item.service,
            text: item.description,
            children: <p className="display-title text-3xl tabular-nums">{item.prix}</p>,
          }))}
        />
      </Section>

      <Section tone="white" title="Matériaux et équipements professionnels">
        <Blocks
          items={[
            {
              title: "Nos marques partenaires",
              children: (
                <Points
                  items={[
                    <><strong>Sanitaires :</strong> Grohe, Hansgrohe, Jacob Delafon</>,
                    <><strong>Canalisations :</strong> Nicoll, Geberit, Wavin</>,
                    <><strong>Chauffage :</strong> Saunier Duval, Chappée, Atlantic</>,
                    <><strong>Robinetterie :</strong> Grohe, Hansgrohe, Ideal Standard</>,
                  ]}
                />
              ),
            },
            {
              title: "Nos garanties",
              children: (
                <Points
                  items={["Assurance décennale plomberie", "Formation continue obligatoire"]}
                />
              ),
            },
          ]}
        />
      </Section>

      <RelatedServices slugs={["renovation-interieure", "carrelage-sols", "electricite"]} />
    </Container>
  );
}
