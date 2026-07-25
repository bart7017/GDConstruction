import { Container } from "@components/Container";
import { ServiceJsonLd } from "@components/JsonLd";
import { RelatedServices } from "@components/RelatedServices";
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

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
      "Pare-vapeur et freine-vapeur",
      "Crédit d'impôt et CEE"
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
      "Démoussage haute pression",
      "Traitement anti-mousse",
      "Nettoyage de gouttières",
      "Contrôle et diagnostic",
      "Contrat d'entretien annuel",
      "Hydrofuge et imperméabilisant"
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
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-4xl">🏘️</span>
            <span className="text-primary font-semibold">Couverture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Couvreur Professionnel à Pamfou
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            GD Construction assure tous vos travaux de couverture en Seine-et-Marne. 
            Toiture neuve, réparation, charpente, gouttières : notre savoir-faire artisanal 
            protège votre habitat durablement.
          </p>
          
          {/* Photo d'illustration */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="/images/charpente-toiture.webp"
              alt="Charpente et toiture en construction"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium">Charpente et couverture - Réalisation GD Construction</p>
            </div>
          </div>
        </div>


        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <span className="text-5xl">{service.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-3">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-center text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-primary font-bold text-sm">•</span>
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Matériaux de couverture */}
        <div className="bg-gradient-to-r from-building-50 to-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Types de Couvertures Réalisées
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { type: "Tuiles", desc: "Terre cuite, béton, canal", prix: "45-80€/m²" },
              { type: "Ardoises", desc: "Naturelles, fibrociment", prix: "60-120€/m²" },
              { type: "Zinc", desc: "Joint debout, tasseaux", prix: "70-100€/m²" },
              { type: "Bac Acier", desc: "Sandwich, simple peau", prix: "25-45€/m²" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <h3 className="font-semibold text-lg text-primary mb-2">{item.type}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <div className="text-lg font-bold text-secondary">{item.prix}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            * Prix TTC pose comprise, hors charpente et isolation
          </p>
        </div>

        {/* Urgences */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-3">🚨</span>
            <div>
              <h2 className="text-3xl font-bold text-red-800">Urgences Toiture 7j/7</h2>
              <p className="text-red-600 text-lg">Intervention rapide sur fuites et sinistres</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-800 mb-4">Situations d'Urgence :</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-red-600">•</span>
                  <span>Fuite importante après tempête</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-600">•</span>
                  <span>Tuiles arrachées ou cassées</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-600">•</span>
                  <span>Gouttière arrachée</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-600">•</span>
                  <span>Chute d'arbre sur toiture</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <a 
                href="tel:0695918103"
                className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors inline-flex items-center space-x-2 text-lg"
              >
                <span>🚨</span>
                <span>Urgence : 06 95 91 81 03</span>
              </a>
              <p className="text-red-600 text-sm mt-3">Bâchage provisoire si nécessaire</p>
            </div>
          </div>
        </div>

        <RelatedServices slugs={["renovation-exterieure", "maconnerie-generale", "peinture-finitions"]} />

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Projet de Couverture à Pamfou ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Devis gratuit • Matériaux de qualité • Garantie décennale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Demander un devis
            </Link>
            <a 
              href="tel:0695918103"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              06 95 91 81 03
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}