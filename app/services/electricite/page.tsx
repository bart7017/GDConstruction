import { Container } from "@components/Container";
import { ServiceJsonLd } from "@components/JsonLd";
import { RelatedServices } from "@components/RelatedServices";
import { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from "@components/Button";
import { Blocks, PageHeader, Points, Section } from "@components/Page";

export const metadata: Metadata = {
  title: 'Électricien à Pamfou | Électricité Seine-et-Marne',
  description: 'Électricien professionnel à Pamfou (77830). Installation électrique, tableau, domotique, dépannage. Mise aux normes NF C 15-100. Devis gratuit GD Construction.',
  keywords: ['électricien Pamfou', 'électricité Seine-et-Marne', 'installation électrique 77830', 'tableau électrique', 'mise aux normes', 'domotique', 'dépannage électrique'],
  openGraph: {
    title: 'Électricité | GD Construction Pamfou',
    description: 'Électricien professionnel à Pamfou. Installation, dépannage, mise aux normes.',
    url: 'https://www.gdconstruction.net/services/electricite',
  },
  alternates: {
    canonical: 'https://www.gdconstruction.net/services/electricite',
  },
};

const services = [
  {
    title: "Tableaux Électriques",
    icon: "⚡",
    description: "Installation et mise aux normes de tableaux électriques",
    details: [
      "Tableau divisionnaire complet",
      "Disjoncteurs et différentiels", 
      "Parafoudre et délesteur",
      "Mise aux normes NF C 15-100",
      "Extension de tableau existant",
      "Télé-report et supervision"
    ]
  },
  {
    title: "Installation Complète",
    icon: "🔌",
    description: "Électricité générale pour neuf et rénovation",
    details: [
      "Prises de courant 16A et 32A",
      "Interrupteurs et va-et-vient",
      "Éclairage LED et traditionnel",
      "Circuits spécialisés (four, lave-vaisselle)",
      "Prises TV, téléphone, internet",
      "Gaines et chemins de câbles"
    ]
  },
  {
    title: "Éclairage & Domotique",
    icon: "💡",
    description: "Solutions d'éclairage modernes et connectées",
    details: [
      "Éclairage LED haute efficacité",
      "Variateurs et télécommandes",
      "Spots encastrés et suspensions",
      "Éclairage extérieur et sécurité",
      "Domotique et maison connectée",
      "Programmation et scénarios"
    ]
  },
  {
    title: "Chauffage Électrique",
    icon: "🔥",
    description: "Installation de systèmes de chauffage électriques",
    details: [
      "Radiateurs à inertie et chaleur douce",
      "Plancher chauffant électrique",
      "Pompe à chaleur air/air",
      "Programmation et régulation",
      "Sonde de température",
      "Fil pilote et gestionnaire d'énergie"
    ]
  },
  {
    title: "Dépannage & SAV",
    icon: "🔧",
    description: "Intervention rapide et diagnostic",
    details: [
      "Panne électrique totale ou partielle",
      "Disjoncteur qui saute",
      "Recherche de défaut",
      "Remplacement appareillage",
      "Court-circuit et surtension",
      "Contrôle périodique de l'installation"
    ]
  },
  {
    title: "Sécurité & Normes",
    icon: "🛡️",
    description: "Conformité et mise en sécurité",
    details: [
      "Diagnostic électrique obligatoire",
      "Mise en sécurité installation",
      "Liaison équipotentielle",
      "Protection différentielle",
      "Contrôle avant mise en service",
      "Attestation Consuel"
    ]
  }
];

const normes = [
  {
    norme: "NF C 15-100",
    description: "Norme française pour installations électriques basse tension",
    points: [
      "Protection des personnes et des biens",
      "Nombre minimal de prises par pièce", 
      "Circuits spécialisés obligatoires",
      "Protection différentielle 30mA",
      "Liaison équipotentielle salle de bain"
    ]
  },
  {
    norme: "RT 2012/RE 2020", 
    description: "Réglementation thermique et environnementale",
    points: [
      "Performance énergétique du bâtiment",
      "Éclairage LED basse consommation",
      "Programmation du chauffage",
      "Gestion automatisée de l'énergie",
      "Indicateurs de consommation"
    ]
  }
];

const PriceList = ({ rows }: { rows: [string, string][] }) => (
  <dl className="grid">
    {rows.map(([label, price]) => (
      <div key={label} className="flex justify-between gap-4 border-b border-ardoise/10 py-2.5">
        <dt>{label}</dt>
        <dd className="font-semibold tabular-nums">{price}</dd>
      </div>
    ))}
  </dl>
);

export default function Electricite() {
  return (
    <Container>
      <ServiceJsonLd
        name="Électricité"
        description="Installation électrique, tableau, mise aux normes et dépannage à Pamfou et en Seine-et-Marne."
        slug="electricite"
      />
      <PageHeader
        kicker="Électricité"
        title="Électricien professionnel à Pamfou"
        intro="GD Construction maîtrise tous les aspects de l'électricité en Seine-et-Marne. Installation complète, mise aux normes, domotique : nos électriciens qualifiés garantissent votre sécurité et votre confort électrique."
        image="/images/electricite-tableau.webp"
        imageAlt="Tableau électrique"
      >
        <ButtonLink href="/contact" variant="signal">Demander un devis</ButtonLink>
        <ButtonLink href="tel:+33695918103" variant="line">06 95 91 81 03</ButtonLink>
      </PageHeader>

      <Section title="L'électricité en images" intro="Photos d'illustration des travaux que nous réalisons.">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { src: "/images/electricite-prise.webp", alt: "Électricien posant une prise murale", caption: "Pose de prises et d'appareillage" },
            { src: "/images/electricite-prise-brique.webp", alt: "Raccordement d'une prise", caption: "Raccordement et mise en sécurité" },
          ].map((photo) => (
            <figure key={photo.caption}>
              <div className="relative aspect-[4/3] overflow-hidden [&_img]:reveal-zoom rounded-2xl">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-ardoise/70">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section title="Nos prestations en électricité">
        <Blocks
          cols={3}
          items={services.map((service) => ({
            title: service.title,
            text: service.description,
            children: <Points items={service.details} />,
          }))}
        />
      </Section>

      <Section tone="dark" title="Conformité et réglementations" intro="Respect scrupuleux des normes en vigueur.">
        <Blocks
          tone="dark"
          items={normes.map((item) => ({
            title: item.norme,
            text: item.description,
            children: <Points items={item.points} />,
          }))}
        />
      </Section>

      <Section title="Nous intervenons sur tous types de logements">
        <Blocks
          cols={4}
          items={[
            { type: "Maisons individuelles", desc: "Neuf et rénovation complète" },
            { type: "Appartements", desc: "Studio, F2 à F6" },
            { type: "Locaux commerciaux", desc: "Bureaux, magasins, ateliers" },
            { type: "Locaux industriels", desc: "Hangars, entrepôts, usines" },
          ].map((item) => ({ title: item.type, text: item.desc }))}
        />
      </Section>

      <Section tone="white" title="Tarifs électricité indicatifs" intro="Prix TTC installation comprise, déplacement gratuit dans un rayon de 50km.">
        <Blocks
          items={[
            {
              title: "Installations courantes",
              children: (
                <PriceList
                  rows={[
                    ["Prise de courant 16A", "25-40€"],
                    ["Interrupteur simple", "20-35€"],
                    ["Point lumineux", "35-60€"],
                    ["Circuit spécialisé 32A", "80-150€"],
                    ["Tableau électrique complet", "800-1500€"],
                  ]}
                />
              ),
            },
            {
              title: "Services spéciaux",
              children: (
                <PriceList
                  rows={[
                    ["Diagnostic électrique", "120-180€"],
                    ["Mise aux normes partielle", "500-1200€"],
                    ["Dépannage urgence", "120-250€"],
                    ["Installation domotique", "300-800€"],
                    ["Chauffage électrique", "150-400€"],
                  ]}
                />
              ),
            },
          ]}
        />
      </Section>

      <Section title="Matériel professionnel de qualité">
        <Blocks
          items={[
            {
              title: "Nos marques",
              children: (
                <Points
                  items={[
                    <><strong>Appareillage :</strong> Legrand, Schneider Electric, Hager</>,
                    <><strong>Éclairage :</strong> Philips, Osram, Ledvance</>,
                    <><strong>Câblage :</strong> Nexans, Prysmian</>,
                    <><strong>Protection :</strong> ABB, Merlin Gerin</>,
                  ]}
                />
              ),
            },
            {
              title: "Nos garanties",
              children: (
                <Points items={["Matériel certifié CE et NF", "Installation garantie 2 ans", "Assurance décennale", "SAV et maintenance"]} />
              ),
            },
          ]}
        />
      </Section>

      <RelatedServices slugs={["plomberie", "renovation-interieure", "pompe-chaleur-climatisation"]} />
    </Container>
  );
}
