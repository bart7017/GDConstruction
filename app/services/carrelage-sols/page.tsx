import { Container } from "@components/Container";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Carrelage et Sols à Pamfou | Carreleur Seine-et-Marne',
  description: 'Carreleur professionnel à Pamfou (77830). Pose carrelage, parquet, sols PVC, faïence. Intérieur et extérieur. Devis gratuit GD Construction.',
  keywords: ['carreleur Pamfou', 'pose carrelage Seine-et-Marne', 'carrelage sol mur 77830', 'parquet', 'sols PVC', 'faïence salle de bain'],
  openGraph: {
    title: 'Carrelage et Sols | GD Construction Pamfou',
    description: 'Carreleur professionnel à Pamfou. Carrelage, parquet, sols PVC.',
    url: 'https://gd-construction.fr/services/carrelage-sols',
  },
  alternates: {
    canonical: 'https://gd-construction.fr/services/carrelage-sols',
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
    title: "Préparation Supports",
    icon: "🔨",
    description: "Mise à niveau et préparation parfaite",
    details: [
      "Ragréage autolissant",
      "Chape sèche et liquide",
      "Dépose ancien revêtement",
      "Traitement humidité",
      "Primaire d'accrochage",
      "Planéité et nivellement"
    ]
  }
];

export default function CarrelageSols() {
  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-4xl">🏛️</span>
            <span className="text-primary font-semibold">Carrelage & Sols</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Carreleur Professionnel à Pamfou
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            GD Construction maîtrise la pose de tous revêtements de sols et murs en Seine-et-Marne. 
            Carrelage, parquet, PVC : notre expertise technique garantit un résultat parfait 
            et durable dans tous vos espaces.
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

        {/* Types de carrelage */}
        <div className="bg-gradient-to-r from-building-50 to-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Carrelages et Matériaux Disponibles
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { type: "Grès Cérame", desc: "Intérieur/extérieur, tous formats", prix: "20-60€/m²" },
              { type: "Faïence", desc: "Mur cuisine, salle de bain", prix: "15-45€/m²" },
              { type: "Pierre Naturelle", desc: "Travertin, marbre, granit", prix: "40-120€/m²" },
              { type: "Parquet Massif", desc: "Chêne, hêtre, châtaignier", prix: "50-150€/m²" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <h3 className="font-semibold text-lg text-primary mb-2">{item.type}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <div className="text-lg font-bold text-secondary">{item.prix}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            * Prix TTC pose comprise, hors préparation support
          </p>
        </div>

        {/* Processus de pose */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Notre Méthode de Pose Professionnelle
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Diagnostic", desc: "Mesures et état du support" },
              { step: "2", title: "Préparation", desc: "Ragréage et mise à niveau" },
              { step: "3", title: "Calepinage", desc: "Plan de pose optimal" },
              { step: "4", title: "Pose", desc: "Collage et alignement" },
              { step: "5", title: "Finitions", desc: "Joints et nettoyage" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Réalisations types */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Exemples de Réalisations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                type: "Salle de Bain Complète", 
                details: "Sol 60x60 + mur faïence + mosaïque",
                surface: "6m²",
                duree: "2 jours",
                prix: "À partir de 950€"
              },
              { 
                type: "Cuisine Moderne", 
                details: "Crédence + sol grand format",
                surface: "15m²", 
                duree: "3 jours",
                prix: "À partir de 1350€"
              },
              { 
                type: "Terrasse Extérieure",
                details: "Carrelage antidérapant sur plot",
                surface: "25m²",
                duree: "4 jours", 
                prix: "À partir de 1800€"
              }
            ].map((example, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-lg text-primary mb-3">{example.type}</h3>
                <p className="text-gray-600 text-sm mb-4">{example.details}</p>
                <div className="space-y-1 text-sm text-gray-600 border-t pt-3">
                  <p><strong>Surface :</strong> {example.surface}</p>
                  <p><strong>Durée :</strong> {example.duree}</p>
                  <p className="text-lg font-bold text-secondary">{example.prix}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            * Prix indicatifs fourniture et pose, devis personnalisé selon matériaux choisis
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Projet Carrelage à Pamfou ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Devis gratuit • Large choix • Pose soignée
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