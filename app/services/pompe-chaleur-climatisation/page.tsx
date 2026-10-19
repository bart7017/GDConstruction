import { Container } from "@components/Container";
import { ServiceJsonLd } from "@components/JsonLd";
import { RelatedServices } from "@components/RelatedServices";
import { Metadata } from 'next';
import { ButtonLink } from "@components/Button";
import { Blocks, Gallery, PageHeader, Points, Section } from "@components/Page";

export const metadata: Metadata = {
  title: 'Pompe à Chaleur et Climatisation à Pamfou',
  description: 'Installation de pompes à chaleur air-air, air-eau et systèmes de climatisation à Pamfou. Solutions énergétiques performantes et économiques. Devis gratuit.',
  keywords: ['pompe à chaleur Pamfou', 'climatisation Pamfou', 'chauffage économique', 'installation climatiseur', 'pompe chaleur air eau', 'Seine-et-Marne'],
  alternates: {
    canonical: 'https://www.gdconstruction.net/services/pompe-chaleur-climatisation',
  },
};

const solutions = [
  {
    title: "Pompes à Chaleur Air-Air",
    details: [
      "Installation de splits et multi-splits",
      "Chauffage et rafraîchissement réversible",
      "Économies d'énergie jusqu'à 70%",
      "Contrôle intelligent et programmation",
      "Maintenance et entretien annuel",
      "Marques premium (Daikin, Mitsubishi, Panasonic)",
    ],
  },
  {
    title: "Pompes à Chaleur Air-Eau",
    details: [
      "Remplacement de chaudière fioul/gaz",
      "Production d'eau chaude sanitaire",
      "Compatible plancher chauffant et radiateurs",
      "Garantie constructeur étendue",
    ],
  },
  {
    title: "Climatisation Résidentielle",
    details: [
      "Climatiseurs mono et multi-zones",
      "Unités murales design et silencieuses",
      "Climatisation gainable (discret)",
      "Filtration et purification de l'air",
      "Télécommande et contrôle Wi-Fi",
      "Consommation énergétique optimisée (A+++)",
    ],
  },
  {
    title: "Services Associés",
    details: [
      "Étude thermique personnalisée",
      "Raccordement électrique aux normes",
      "Évacuation des condensats",
      "Mise en service et réglages",
      "Formation à l'utilisation",
      "Contrat de maintenance préventive",
    ],
  },
];

const steps = [
  { title: "Étude et Devis Gratuit", desc: "Visite technique, calcul des besoins, étude thermique et proposition personnalisée" },
  { title: "Planification des Travaux", desc: "Organisation du chantier, commande du matériel, coordination des équipes" },
  { title: "Installation Professionnelle", desc: "Pose des unités intérieure et extérieure, raccordements hydrauliques et électriques" },
  { title: "Mise en Service et Formation", desc: "Tests de fonctionnement, réglages optimaux, formation à l'utilisation" },
];

export default function PompeAChaleurClimatisation() {
  return (
    <Container>
      <ServiceJsonLd
        name="Pompe à chaleur et climatisation"
        description="Installation de pompes à chaleur air-air, air-eau et systèmes de climatisation à Pamfou et en Seine-et-Marne."
        slug="pompe-chaleur-climatisation"
      />
      <PageHeader
        kicker="Pompe à chaleur et climatisation"
        title="Pompe à chaleur et climatisation"
        intro="Solutions énergétiques modernes et économiques pour votre confort thermique toute l'année. Installation professionnelle de pompes à chaleur et systèmes de climatisation à Pamfou et Seine-et-Marne."
        image="/images/pac-jardin.webp"
        imageAlt="Tuyaux de chauffage"
      >
        <ButtonLink href="/contact" variant="signal">Demander un devis gratuit</ButtonLink>
        <ButtonLink href="tel:+33695918103" variant="line">06 95 91 81 03</ButtonLink>
      </PageHeader>

      <Section title="Nos solutions de chauffage et climatisation">
        <Blocks items={solutions.map((s) => ({ title: s.title, children: <Points items={s.details} /> }))} />
      </Section>

      <Section tone="dark" title="Pourquoi choisir nos solutions énergétiques ?">
        <Blocks
          tone="dark"
          cols={3}
          items={[
            { title: "Économies Garanties", text: "Réduction de 40 à 70% sur vos factures de chauffage et climatisation" },
            { title: "Écologique", text: "Solutions respectueuses de l'environnement, énergie renouvelable" },
            { title: "Confort Optimal", text: "Température idéale toute l'année, diffusion homogène" },
          ]}
        />
      </Section>

      <Section title="Notre processus d'installation">
        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <li key={item.title} className="border-t border-ardoise/15 pt-5">
              <span className="display-title text-4xl text-ardoise/30">{index + 1}</span>
              <h3 className="mt-3 font-display text-xl font-bold [font-stretch:115%]">{item.title}</h3>
              <p className="mt-2 text-ardoise/75">{item.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="La pompe à chaleur en images" intro="Photos d'illustration des travaux que nous réalisons.">
        <Gallery
          photos={[
            { src: "/images/pac-facade.webp", alt: "Unités extérieures de pompe à chaleur fixées en façade", caption: "Unités murales en façade" },
            { src: "/images/pac-unite.webp", alt: "Unité extérieure de pompe à chaleur", caption: "Unité extérieure air-eau" },
          ]}
        />
      </Section>

      <RelatedServices slugs={["electricite", "plomberie", "renovation-interieure"]} />
    </Container>
  );
}
