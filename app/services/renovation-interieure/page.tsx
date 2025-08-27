import { Container } from "@components/Container";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rénovation Intérieure à Pamfou',
  description: 'Spécialiste rénovation intérieure à Pamfou (77830). Cuisine, salle de bain, sols, cloisons, peinture. Tous corps d\'état. Devis gratuit GD Construction.',
  keywords: ['rénovation intérieure Pamfou', 'rénovation cuisine Seine-et-Marne', 'rénovation salle de bain 77830', 'carrelage intérieur', 'peinture intérieure', 'cloisons'],
  openGraph: {
    title: 'Rénovation Intérieure | GD Construction Pamfou',
    description: 'Expert en rénovation intérieure à Pamfou. Cuisine, salle de bain, sols.',
    url: 'https://gd-construction.fr/services/renovation-interieure',
  },
  alternates: {
    canonical: 'https://gd-construction.fr/services/renovation-interieure',
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
      "Carrelage étanche et décoratif", 
      "Électricité sécurisée (normes NF C 15-100)",
      "VMC et aération",
      "Mobilier et accessoires"
    ]
  },
  {
    title: "Sols et Revêtements",
    icon: "🏛️",
    description: "Pose de carrelage, parquet, sols PVC et résines",
    details: [
      "Carrelage toutes dimensions",
      "Parquet massif et stratifié",
      "Sols PVC et linoléum",
      "Résines et béton ciré",
      "Ragréage et préparation supports"
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
    title: "Peinture et Décoration",
    icon: "🎨",
    description: "Travaux de peinture intérieure et décoration",
    details: [
      "Peinture murs et plafonds",
      "Enduits décoratifs et lissés",
      "Papier peint et revêtements muraux",
      "Lasures et vernis",
      "Conseils couleurs et finitions"
    ]
  },
  {
    title: "Électricité Intérieure",
    icon: "⚡",
    description: "Installation électrique complète et mise aux normes",
    details: [
      "Tableau électrique et protection",
      "Prises et interrupteurs",
      "Éclairage LED et domotique",
      "Chauffage électrique",
      "Mise aux normes NF C 15-100"
    ]
  }
];

export default function RenovationInterieure() {
  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-4xl">🏠</span>
            <span className="text-primary font-semibold">Rénovation Intérieure</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rénovation Intérieure Complète à Pamfou
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            GD Construction transforme vos intérieurs en Seine-et-Marne. Cuisine, salle de bain, 
            sols, électricité... Nous maîtrisons tous les corps d'état pour une rénovation 
            harmonieuse et coordonnée de A à Z.
          </p>
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

        {/* Process */}
        <div className="bg-gradient-to-r from-building-50 to-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Notre Méthode de Rénovation Intérieure
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Diagnostic", desc: "Visite technique et conseils personnalisés" },
              { step: "2", title: "Conception", desc: "Plans 3D et devis détaillé gratuit" },
              { step: "3", title: "Réalisation", desc: "Travaux coordonnés par nos équipes" },
              { step: "4", title: "Finition", desc: "Contrôle qualité et nettoyage complet" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Matériaux */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Matériaux et Équipements de Qualité
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Nos Partenaires :</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Carrelage :</strong> Porcelanosa, Marazzi, Imola</p>
                <p className="text-gray-700"><strong>Sanitaires :</strong> Grohe, Hansgrohe, Villeroy & Boch</p>
                <p className="text-gray-700"><strong>Électricité :</strong> Legrand, Schneider Electric</p>
                <p className="text-gray-700"><strong>Peinture :</strong> Seigneurie, Tollens, Dulux Valentine</p>
              </div>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Nos Garanties :</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Matériaux certifiés et garantis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Main d'œuvre garantie 2 ans</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Assurance décennale</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Suivi post-chantier</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exemples de réalisations */}
        <div className="bg-gradient-to-r from-building-100 to-blue-100 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Exemples de Rénovations Intérieures
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: "Cuisine moderne", surface: "15m²", durée: "2 semaines", prix: "À partir de 8 000€" },
              { type: "Salle de bain complète", surface: "6m²", durée: "1 semaine", prix: "À partir de 5 500€" },
              { type: "Salon + carrelage", surface: "30m²", durée: "3 jours", prix: "À partir de 2 800€" }
            ].map((example, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg text-primary mb-3">{example.type}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Surface :</strong> {example.surface}</p>
                  <p><strong>Durée :</strong> {example.durée}</p>
                  <p><strong>Prix :</strong> {example.prix}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            * Prix indicatifs, devis personnalisé selon vos besoins
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Projet de Rénovation Intérieure ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Obtenez votre devis gratuit en 48h maximum
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