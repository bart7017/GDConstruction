import { Container } from "@components/Container";
import { ServiceJsonLd } from "@components/JsonLd";
import { RelatedServices } from "@components/RelatedServices";
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Ravalement de Façade et ITE à Pamfou | Rénovation Extérieure 77830',
  description: 'Ravalement de façade, isolation thermique extérieure, bardage, menuiseries et terrasses bois à Pamfou (77830). Devis gratuit GD Construction.',
  keywords: ['ravalement façade Pamfou', 'isolation thermique extérieure Seine-et-Marne', 'bardage façade 77830', 'menuiseries extérieures', 'terrasse bois composite', 'clôture portail'],
  openGraph: {
    title: 'Ravalement de Façade et ITE | GD Construction Pamfou',
    description: 'Ravalement, isolation extérieure, bardage et menuiseries à Pamfou.',
    url: 'https://www.gdconstruction.net/services/renovation-exterieure',
  },
  alternates: {
    canonical: 'https://www.gdconstruction.net/services/renovation-exterieure',
  },
};

const services = [
  {
    title: "Ravalement de Façade",
    icon: "🏢",
    description: "Remise à neuf du support et de l'enduit de vos murs",
    details: [
      "Diagnostic de l'état du support",
      "Nettoyage haute pression et gommage",
      "Traitement et pontage des fissures",
      "Enduit monocouche ou traditionnel",
      "Hydrofuge de surface",
      "Déclaration préalable et respect du PLU"
    ]
  },
  {
    title: "Isolation Thermique par l'Extérieur",
    icon: "🌡️",
    description: "ITE sous enduit : confort et économies d'énergie",
    details: [
      "Polystyrène expansé et laine de roche",
      "Fixation calée-chevillée ou rail",
      "Traitement des ponts thermiques",
      "Rehausse des appuis et tableaux",
      "Finition enduit mince ou hydraulique",
      "Éligible MaPrimeRénov' et CEE"
    ]
  },
  {
    title: "Bardage & Habillage de Façade",
    icon: "🪵",
    description: "Habillage ventilé pour protéger et moderniser",
    details: [
      "Bardage bois, composite, fibre-ciment",
      "Ossature bois ou rails métalliques",
      "Lame d'air et grille anti-rongeurs",
      "Pose claire-voie ou à recouvrement",
      "Bardage sur ITE ou sur support existant",
      "Habillage de soubassement"
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
      "Pose en rénovation ou dépose totale",
      "Étanchéité à l'air et calfeutrement"
    ]
  },
  {
    title: "Terrasses Bois & Composite",
    icon: "🌿",
    description: "Terrasses et structures bois pour vos extérieurs",
    details: [
      "Ossature et lambourdage sur plots",
      "Lames bois exotique et pin traité",
      "Composite co-extrudé sans entretien",
      "Escaliers et garde-corps extérieurs",
      "Pergolas et abris adossés",
      "Saturateur et entretien annuel"
    ]
  },
  {
    title: "Clôtures, Portails & Limites",
    icon: "🚧",
    description: "Délimitation et sécurisation de votre propriété",
    details: [
      "Clôture rigide, bois ou gabion",
      "Portail battant ou coulissant",
      "Motorisation et interphone",
      "Portillon et brise-vue",
      "Muret de soubassement enduit",
      "Bornage et respect des limites"
    ]
  }
];

export default function RenovationExterieur() {
  return (
    <Container>
      <ServiceJsonLd
        name="Rénovation extérieure"
        description="Ravalement de façade, isolation thermique par l'extérieur, bardage, menuiseries extérieures et terrasses bois à Pamfou et en Seine-et-Marne."
        slug="renovation-exterieure"
      />
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header avec photo */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-4xl">🏢</span>
            <span className="text-primary font-semibold">Rénovation Extérieure</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ravalement de Façade et Rénovation Extérieure à Pamfou
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            GD Construction traite l'enveloppe verticale de votre maison en Seine-et-Marne :
            ravalement, isolation par l'extérieur, bardage, menuiseries et aménagement de vos
            abords. Un chantier qui protège le bâti, fait baisser vos factures et transforme
            l'allure de votre habitation.
          </p>
          
          {/* Photo d'illustration */}
          <div className="relative aspect-16/9 rounded-2xl overflow-hidden shadow-xl mb-8">
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
            Nos Réalisations en Façade et Extérieur
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/maconnerie-brique.webp"
                alt="Mur extérieur en brique avant enduit de façade"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                <p className="text-sm font-medium">Support de façade avant ravalement</p>
              </div>
            </div>
            <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/maconnerie-decoupe-mur.webp"
                alt="Ouverture en façade pour pose de menuiserie extérieure"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                <p className="text-sm font-medium">Préparation d'une baie avant pose</p>
              </div>
            </div>
            <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-lg">
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

        {/* Périmètre et prestations traitées ailleurs */}
        <div className="bg-white border rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Un Chantier Extérieur Complet, Sans Sous-Traitance
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cette page couvre tout ce qui touche aux murs et aux abords de votre maison. Un projet
            de rénovation extérieure mobilise souvent d'autres corps d'état, que nous assurons avec
            nos propres équipes — vous gardez un seul interlocuteur du diagnostic à la réception.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>
                Toiture, charpente, gouttières et isolation des combles :{" "}
                <Link href="/services/couverture" className="text-primary font-semibold hover:underline">
                  voir notre pôle couverture
                </Link>
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>
                Extension, création d'ouverture, dalle et fondations :{" "}
                <Link href="/services/maconnerie-generale" className="text-primary font-semibold hover:underline">
                  voir notre pôle maçonnerie générale
                </Link>
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>
                Mise en peinture des façades, volets et boiseries :{" "}
                <Link href="/services/peinture-finitions" className="text-primary font-semibold hover:underline">
                  voir notre pôle peinture et finitions
                </Link>
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold">•</span>
              <span>
                Dallage, pavés et carrelage de terrasse :{" "}
                <Link href="/services/carrelage-sols" className="text-primary font-semibold hover:underline">
                  voir notre pôle carrelage et sols
                </Link>
              </span>
            </li>
          </ul>
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
        <div className="bg-linear-to-r from-building-50 to-blue-50 rounded-lg p-8 mb-16">
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

        <RelatedServices slugs={["couverture", "peinture-finitions", "maconnerie-generale"]} />

        {/* CTA */}
        <div className="bg-linear-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Projet de Ravalement ou d'Isolation Extérieure à Pamfou ?
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