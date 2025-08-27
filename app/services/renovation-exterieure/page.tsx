import { Container } from "@components/Container";
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Rénovation Extérieur à Pamfou | Façade Seine-et-Marne',
  description: 'Spécialiste rénovation extérieur à Pamfou (77830). Ravalement façade, terrasse, toiture, menuiseries. Devis gratuit GD Construction.',
  keywords: ['rénovation extérieur Pamfou', 'ravalement façade Seine-et-Marne', 'rénovation terrasse 77830', 'isolation extérieure', 'menuiseries extérieures'],
  openGraph: {
    title: 'Rénovation Extérieur | GD Construction Pamfou',
    description: 'Expert en rénovation extérieur à Pamfou. Façades, terrasses, toiture.',
    url: 'https://gd-construction.fr/services/renovation-exterieure',
  },
  alternates: {
    canonical: 'https://gd-construction.fr/services/renovation-exterieure',
  },
};

const services = [
  {
    title: "Ravalement de Façade",
    icon: "🏢",
    description: "Rénovation complète de vos façades extérieures",
    details: [
      "Nettoyage haute pression",
      "Traitement des fissures",
      "Enduit de façade neuf",
      "Peinture de protection",
      "Isolation thermique extérieure",
      "Respect PLU et copropriété"
    ]
  },
  {
    title: "Toiture & Couverture",
    icon: "🏘️",
    description: "Réfection et entretien de toitures",
    details: [
      "Changement de tuiles",
      "Réparation charpente",
      "Démoussage traitement",
      "Gouttières et zinguerie",
      "Isolation combles",
      "Étanchéité terrasse"
    ]
  },
  {
    title: "Menuiseries Extérieures", 
    icon: "🚪",
    description: "Remplacement portes et fenêtres",
    details: [
      "Fenêtres PVC, alu, bois",
      "Portes d'entrée sécurisées",
      "Volets roulants motorisés",
      "Double et triple vitrage",
      "Pose en rénovation",
      "Crédit d'impôt éligible"
    ]
  },
  {
    title: "Terrasses & Extérieurs",
    icon: "🌿",
    description: "Aménagement espaces extérieurs",
    details: [
      "Terrasse bois composite",
      "Carrelage extérieur antidérapant",
      "Création de murets",
      "Escaliers extérieurs",
      "Clôtures et portails",
      "Éclairage extérieur"
    ]
  },
  {
    title: "Isolation Extérieure",
    icon: "🌡️", 
    description: "ITE et performance énergétique",
    details: [
      "Isolation thermique extérieure",
      "Polystyrène et laine minérale",
      "Finition enduit ou bardage",
      "Traitement ponts thermiques",
      "Économies énergie garanties",
      "Aides MaPrimeRénov'"
    ]
  },
  {
    title: "Maçonnerie Extérieure",
    icon: "🧱",
    description: "Travaux de gros œuvre extérieur",
    details: [
      "Extension de maison",
      "Création d'ouvertures",
      "Murs de soutènement", 
      "Allées et parking",
      "Fondations superficielles",
      "Assainissement extérieur"
    ]
  }
];

export default function RenovationExterieur() {
  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header avec photo */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-4xl">🏢</span>
            <span className="text-primary font-semibold">Rénovation Extérieur</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rénovation Extérieur à Pamfou
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            GD Construction redonne vie à l'extérieur de votre habitat en Seine-et-Marne. 
            Façade, toiture, menuiseries, terrasses : nos solutions complètes valorisent 
            et protègent durablement votre patrimoine.
          </p>
          
          {/* Photo d'illustration */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="/images/maconnerie-enduit.webp"
              alt="Rénovation façade et enduit extérieur"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium">Rénovation façade - Réalisation GD Construction</p>
            </div>
          </div>
        </div>

        {/* Galerie de nos réalisations extérieures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Nos Réalisations en Rénovation Extérieur
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/charpente-toiture.webp"
                alt="Rénovation charpente et toiture"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                <p className="text-sm font-medium">Rénovation charpente et couverture</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/maconnerie-decoupe-mur.webp"
                alt="Création d'ouverture en façade"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                <p className="text-sm font-medium">Création d'ouvertures</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/menuiserie-rabotage.webp"
                alt="Travaux menuiserie extérieure"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                <p className="text-sm font-medium">Menuiseries extérieures</p>
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

        {/* Aides et financements */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-8 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-3">💰</span>
            <div>
              <h2 className="text-3xl font-bold text-green-800">Aides et Financements Disponibles</h2>
              <p className="text-green-600 text-lg">Réduisez le coût de vos travaux de rénovation</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Principales Aides :</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">•</span>
                  <span>MaPrimeRénov' jusqu'à 20 000€</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">•</span>
                  <span>Eco-PTZ jusqu'à 50 000€</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">•</span>
                  <span>CEE Certificats d'Économie d'Énergie</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">•</span>
                  <span>TVA réduite à 5,5%</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Notre Accompagnement :</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Conseil éligibilité aux aides</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Montage dossiers administratifs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Entreprise RGE qualifiée</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Avance des frais si besoin</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Étapes du projet */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Les Étapes de Votre Projet de Rénovation
          </h2>
          <div className="grid md:grid-cols-6 gap-4">
            {[
              { step: "1", title: "Diagnostic", desc: "État des lieux complet" },
              { step: "2", title: "Étude", desc: "Solutions et devis" },
              { step: "3", title: "Aides", desc: "Recherche financement" },
              { step: "4", title: "Planning", desc: "Organisation chantier" },
              { step: "5", title: "Travaux", desc: "Réalisation soignée" },
              { step: "6", title: "Réception", desc: "Contrôle et garanties" }
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

        {/* Avantages rénovation extérieur */}
        <div className="bg-gradient-to-r from-building-50 to-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Pourquoi Rénover l'Extérieur de Votre Maison ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Économies d'Énergie</h3>
              <p className="text-gray-600 text-sm">Jusqu'à 30% d'économies sur votre facture énergétique</p>
            </div>
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Plus-Value Immobilière</h3>
              <p className="text-gray-600 text-sm">Augmentation significative de la valeur de votre bien</p>
            </div>
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Protection Durable</h3>
              <p className="text-gray-600 text-sm">Préservation du bâti contre les intempéries</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Projet de Rénovation Extérieur à Pamfou ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Étude gratuite • Aides financières • Garantie décennale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Demander une étude
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