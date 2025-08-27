import { Container } from "@components/Container";
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Maçonnerie Générale à Pamfou',
  description: 'Spécialiste en maçonnerie générale à Pamfou (77830). Construction de murs, dalles béton, fondations, extensions. Devis gratuit GD Construction.',
  keywords: ['maçon Pamfou', 'maçonnerie générale Seine-et-Marne', 'construction mur béton', 'dalle béton 77830', 'fondations maison', 'extension maçonnerie'],
  openGraph: {
    title: 'Maçonnerie Générale | GD Construction Pamfou',
    description: 'Expert en maçonnerie générale à Pamfou. Construction, extensions, fondations.',
    url: 'https://gd-construction.fr/services/maconnerie-generale',
  },
  alternates: {
    canonical: 'https://gd-construction.fr/services/maconnerie-generale',
  },
};

const serviceDetails = [
  {
    title: "Construction de Murs",
    description: "Murs porteurs, murs de clôture, murets en béton, parpaings ou pierre naturelle",
    details: ["Murs porteurs intérieurs et extérieurs", "Murs de clôture et murets décoratifs", "Maçonnerie traditionnelle et moderne", "Respect des DTU et normes"]
  },
  {
    title: "Dalles et Fondations", 
    description: "Coulage de dalles béton, fondations de maisons, radiers et semelles",
    details: ["Dalles béton armé toutes épaisseurs", "Fondations superficielles et profondes", "Radiers et longrines", "Étude de sol et calcul de charges"]
  },
  {
    title: "Extensions et Agrandissements",
    description: "Création d'extensions de maison, vérandas, garages et dépendances",
    details: ["Extensions en dur tous styles", "Surélévations et combles", "Garages et abris", "Intégration architecturale parfaite"]
  },
  {
    title: "Gros Œuvre",
    description: "Réalisation complète du gros œuvre pour constructions neuves",
    details: ["Terrassement et préparation", "Structure béton armé", "Élévation des murs", "Coordination avec autres corps d'état"]
  }
];

export default function MaconnerieGenerale() {
  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header avec photo */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-4xl">🏗️</span>
            <span className="text-primary font-semibold">Maçonnerie Générale</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expert en Maçonnerie Générale à Pamfou
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            GD Construction réalise tous vos travaux de maçonnerie générale en Seine-et-Marne. 
            De la simple réparation aux constructions neuves, notre expertise technique garantit 
            des réalisations durables et conformes aux normes.
          </p>
          
          {/* Photo d'illustration */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="/images/maconnerie-brique.webp"
              alt="Travaux de maçonnerie - Construction de murs en brique"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium">Construction de mur en brique - Réalisation GD Construction</p>
            </div>
          </div>
        </div>

        {/* Services détaillés */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {serviceDetails.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 border hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Galerie de nos réalisations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Nos Réalisations en Maçonnerie
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/maconnerie-enduit.webp"
                alt="Application d'enduit sur mur"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                <p className="text-sm font-medium">Finition enduit extérieur</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/maconnerie-decoupe-mur.webp"
                alt="Découpe précise de mur"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                <p className="text-sm font-medium">Découpe de mur porteur</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/charpente-toiture.webp"
                alt="Charpente et gros œuvre"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                <p className="text-sm font-medium">Gros œuvre et charpente</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pourquoi nous choisir */}
        <div className="bg-gradient-to-r from-building-50 to-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Pourquoi Choisir GD Construction pour vos Travaux de Maçonnerie ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Expertise Reconnue</h3>
              <p className="text-gray-600 text-sm">Plus de 10 ans d'expérience dans tous types de maçonnerie</p>
            </div>
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Réactivité</h3>
              <p className="text-gray-600 text-sm">Devis sous 48h, intervention rapide sur Pamfou et 30km</p>
            </div>
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Garanties</h3>
              <p className="text-gray-600 text-sm">Assurance décennale, garantie sur tous nos travaux</p>
            </div>
          </div>
        </div>

        {/* Zone d'intervention */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Zone d'Intervention Maçonnerie
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Secteurs d'Intervention :</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Seine-et-Marne (77) :</strong> Pamfou, Melun, Fontainebleau, Montereau-Fault-Yonne, Nemours</p>
                <p><strong>Essonne (91) :</strong> Milly-la-Forêt, La Ferté-Alais, Boutigny-sur-Essonne</p>
                <p><strong>Yonne (89) :</strong> Sens, Villeneuve-sur-Yonne, Pont-sur-Yonne</p>
              </div>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Nos Engagements :</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Déplacement gratuit dans un rayon de 30km</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Devis détaillé et gratuit sous 48h</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Respect des délais convenus</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Chantier propre et sécurisé</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Projet de Maçonnerie à Pamfou ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Demander un devis gratuit
            </Link>
            <a 
              href="tel:0695918103"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Appeler : 06 95 91 81 03
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}