import { Container } from "@components/Container";
import { ServiceJsonLd } from "@components/JsonLd";
import { RelatedServices } from "@components/RelatedServices";
import { Metadata } from 'next';
import Link from 'next/link';

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
      "Carrelage étanche et décoratif", 
      "Électricité sécurisée (normes NF C 15-100)",
      "VMC et aération",
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

export default function RenovationInterieure() {
  return (
    <Container>
      <ServiceJsonLd
        name="Rénovation intérieure"
        description="Rénovation clé en main de cuisine, salle de bain, cloisons, menuiseries intérieures et adaptation du logement à Pamfou et en Seine-et-Marne."
        slug="renovation-interieure"
      />
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
            GD Construction repense vos pièces de vie en Seine-et-Marne : cuisine, salle de bain,
            cloisons, menuiseries et rangements. Nous pilotons l'ensemble des corps d'état pour
            que votre chantier avance dans le bon ordre, sans coordination à votre charge.
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

        {/* Périmètre et prestations traitées ailleurs */}
        <div className="bg-white border rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Les Lots Techniques de Votre Rénovation
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Une rénovation intérieure enchaîne plusieurs métiers. Nous les réalisons tous en
            interne, chacun détaillé sur sa propre page — vous n'avez qu'un devis, qu'un planning
            et qu'un interlocuteur.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>
                Carrelage, parquet, sols souples et ragréage :{" "}
                <Link href="/services/carrelage-sols" className="text-primary font-semibold hover:underline">
                  voir notre pôle carrelage et sols
                </Link>
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>
                Peinture, enduits décoratifs et papier peint :{" "}
                <Link href="/services/peinture-finitions" className="text-primary font-semibold hover:underline">
                  voir notre pôle peinture et finitions
                </Link>
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>
                Tableau, prises, éclairage et mise aux normes NF C 15-100 :{" "}
                <Link href="/services/electricite" className="text-primary font-semibold hover:underline">
                  voir notre pôle électricité
                </Link>
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>
                Alimentation, évacuation et sanitaires :{" "}
                <Link href="/services/plomberie" className="text-primary font-semibold hover:underline">
                  voir notre pôle plomberie
                </Link>
              </span>
            </li>
          </ul>
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

        <RelatedServices slugs={["peinture-finitions", "carrelage-sols", "plomberie"]} />

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