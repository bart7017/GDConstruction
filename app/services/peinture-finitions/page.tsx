import { Container } from "@components/Container";
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Peinture et Finitions à Pamfou | Peintre Seine-et-Marne',
  description: 'Peintre professionnel à Pamfou (77830). Peinture intérieure, extérieure, finitions décoratives, enduits. Devis gratuit GD Construction.',
  keywords: ['peintre Pamfou', 'peinture Seine-et-Marne', 'peinture intérieure 77830', 'peinture extérieure', 'finitions décoratives', 'enduit décoratif'],
  openGraph: {
    title: 'Peinture et Finitions | GD Construction Pamfou',
    description: 'Peintre professionnel à Pamfou. Peinture intérieure, extérieure, finitions.',
    url: 'https://www.gdconstruction.net/services/peinture-finitions',
  },
  alternates: {
    canonical: 'https://www.gdconstruction.net/services/peinture-finitions',
  },
};

const services = [
  {
    title: "Peinture Intérieure",
    icon: "🎨",
    description: "Peinture et décoration de tous vos espaces intérieurs",
    details: [
      "Peinture murs et plafonds",
      "Sous-couche et préparation",
      "Peinture acrylique et glycéro",
      "Finitions mate, satinée, brillante",
      "Peinture anti-humidité",
      "Lessivage et dégraissage"
    ]
  },
  {
    title: "Peinture Extérieure", 
    icon: "🏠",
    description: "Protection et embellissement de vos façades",
    details: [
      "Ravalement de façade",
      "Peinture pliolite et siloxane",
      "Traitement anti-mousse",
      "Peinture bois extérieur",
      "Volets et menuiseries",
      "Garantie longue durée"
    ]
  },
  {
    title: "Enduits Décoratifs",
    icon: "✨", 
    description: "Finitions décoratives et texturées",
    details: [
      "Enduit à la chaux",
      "Crépi d'intérieur",
      "Stuc et tadelakt",
      "Enduit béton ciré",
      "Patines et effets",
      "Techniques traditionnelles"
    ]
  },
  {
    title: "Papier Peint",
    icon: "📜",
    description: "Pose de papier peint et revêtements muraux",
    details: [
      "Papier peint traditionnel",
      "Intissé et vinyle",
      "Toile de verre",
      "Fibres naturelles",
      "Raccords et angles parfaits",
      "Dépose ancien papier"
    ]
  },
  {
    title: "Préparation Supports",
    icon: "🔨",
    description: "Préparation soignée avant finitions", 
    details: [
      "Rebouchage fissures",
      "Ponçage et égrenage",
      "Lessivage des murs",
      "Dégraissage et dépoussiérage",
      "Traitement anti-humidité",
      "Protection des sols"
    ]
  },
  {
    title: "Peinture Spécialisée",
    icon: "🎯",
    description: "Peintures techniques et spécialisées",
    details: [
      "Peinture anti-humidité",
      "Peinture isolante thermique",
      "Sol garage et atelier",
      "Peinture magnétique",
      "Peinture tableau noir",
      "Marquage au sol"
    ]
  }
];

export default function PeintureFinition() {
  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header avec photo */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-4xl">🎨</span>
            <span className="text-primary font-semibold">Peinture & Finitions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Peintre Professionnel à Pamfou
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            GD Construction transforme vos espaces avec des finitions peinture de qualité en Seine-et-Marne. 
            Intérieur, extérieur, décoration : notre expertise artisanale sublime vos projets 
            avec soin et précision.
          </p>
          
          {/* Photo d'illustration */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="/images/peinture-preparation.webp"
              alt="Préparation pour travaux de peinture"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium">Préparation peinture - Réalisation GD Construction</p>
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

        {/* Types de peintures */}
        <div className="bg-gradient-to-r from-building-50 to-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Peintures et Finitions Disponibles
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { type: "Acrylique", desc: "Lessivable, écologique", prix: "8-15€/m²" },
              { type: "Glycéro", desc: "Résistante, haute qualité", prix: "12-20€/m²" },
              { type: "Facade", desc: "Pliolite, anti-mousse", prix: "15-25€/m²" },
              { type: "Décorative", desc: "Enduits, effets spéciaux", prix: "20-40€/m²" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <h3 className="font-semibold text-lg text-primary mb-2">{item.type}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <div className="text-lg font-bold text-secondary">{item.prix}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            * Prix TTC main d'œuvre comprise, hors préparation support
          </p>
        </div>

        {/* Étapes de travail */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Notre Méthode de Travail Professionnelle
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Diagnostic", desc: "État des supports" },
              { step: "2", title: "Préparation", desc: "Rebouchage, ponçage" },
              { step: "3", title: "Protection", desc: "Bâchage, adhésif" },
              { step: "4", title: "Application", desc: "Sous-couche et finition" },
              { step: "5", title: "Finitions", desc: "Retouches, nettoyage" }
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

        {/* Marques de peinture */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Peintures de Marques Reconnues
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Nos Marques :</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Haut de gamme :</strong> Tollens, Sikkens, Zolpan</p>
                <p className="text-gray-700"><strong>Qualité pro :</strong> Dulux Valentine, Ripolin</p>
                <p className="text-gray-700"><strong>Écologique :</strong> Natura, Algo</p>
                <p className="text-gray-700"><strong>Spécialisée :</strong> Toupret, Weber, Knauf</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Nos Garanties :</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Peinture certifiée NF</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Finition garantie 2 ans</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Assurance décennale</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Conseils décoration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Projet Peinture à Pamfou ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Devis gratuit • Conseils couleurs • Finition soignée
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