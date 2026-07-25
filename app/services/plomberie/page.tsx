import { Container } from "@components/Container";
import { ServiceJsonLd } from "@components/JsonLd";
import { RelatedServices } from "@components/RelatedServices";
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

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
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header avec photo */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-4xl">🔧</span>
            <span className="text-primary font-semibold">Plomberie</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Plombier Professionnel à Pamfou
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            GD Construction assure tous vos travaux de plomberie en Seine-et-Marne. 
            Installation, réparation, dépannage d'urgence : notre expertise technique 
            garantit des solutions durables pour votre confort quotidien.
          </p>
          
          {/* Photo d'illustration */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="/images/plomberie-robinet.webp"
              alt="Installation de robinetterie - Plomberie professionnelle"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium">Installation robinetterie - Réalisation GD Construction</p>
            </div>
          </div>
        </div>

        {/* Galerie de nos réalisations plomberie */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Nos Réalisations en Plomberie
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/plomberie-vanne.webp"
                alt="Installation de vannes et tuyauterie"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                <p className="text-sm font-medium">Installation vannes et tuyauterie</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/chauffage-tuyaux.webp"
                alt="Installation système de chauffage"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                <p className="text-sm font-medium">Système de chauffage central</p>
              </div>
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

        {/* Dépannage urgence */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-3">🚨</span>
            <div>
              <h2 className="text-3xl font-bold text-red-800">Dépannage Urgence 24h/24</h2>
              <p className="text-red-600 text-lg">Intervention rapide sur Pamfou et 50km</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            {urgenceSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-1 text-red-800">{item.title}</h3>
                <p className="text-red-600 text-sm mb-1">{item.desc}</p>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">{item.time}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="tel:0695918103"
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors inline-flex items-center space-x-2 text-lg"
            >
              <span>🚨</span>
              <span>Urgence : 06 95 91 81 03</span>
            </a>
          </div>
        </div>

        {/* Tarifs indicatifs */}
        <div className="bg-gradient-to-r from-building-50 to-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Tarifs Plomberie Indicatifs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { service: "Réparation fuite", description: "Détection + réparation simple", prix: "80-150€" },
              { service: "Installation WC", description: "Dépose + pose + raccordement", prix: "200-350€" },
              { service: "Remplacement robinet", description: "Dépose + pose + essais", prix: "120-250€" },
              { service: "Débouchage canalisation", description: "Débouchage mécanique", prix: "90-180€" },
              { service: "Installation lavabo", description: "Pose complète + robinetterie", prix: "250-450€" },
              { service: "Dépannage urgence", description: "Intervention + 1h de main d'œuvre", prix: "150-300€" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="font-semibold text-lg text-primary mb-2">{item.service}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="text-2xl font-bold text-secondary">{item.prix}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            * Tarifs TTC, déplacement gratuit dans un rayon de 50km de Pamfou
          </p>
        </div>

        {/* Équipements et marques */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Matériaux et Équipements Professionnels
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Nos Marques Partenaires :</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Sanitaires :</strong> Grohe, Hansgrohe, Jacob Delafon</p>
                <p className="text-gray-700"><strong>Canalisations :</strong> Nicoll, Geberit, Wavin</p>
                <p className="text-gray-700"><strong>Chauffage :</strong> Saunier Duval, Chappée, Atlantic</p>
                <p className="text-gray-700"><strong>Robinetterie :</strong> Grohe, Hansgrohe, Ideal Standard</p>
              </div>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Nos Certifications :</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Artisan qualifié RGE</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Assurance décennale plomberie</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Habilitation gaz naturel</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Formation continue obligatoire</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <RelatedServices slugs={["renovation-interieure", "carrelage-sols", "electricite"]} />

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'un Plombier à Pamfou ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Devis gratuit • Intervention rapide • Tarifs transparents
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