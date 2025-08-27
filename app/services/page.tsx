import { Container } from "@components/Container";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nos Services',
  description: 'Découvrez tous les services de GD Construction à Pamfou : maçonnerie, rénovation intérieure et extérieure, plomberie, électricité, couverture. Tous corps d\'état.',
  keywords: ['services maçonnerie', 'rénovation tous corps état', 'plomberie Pamfou', 'électricité Seine-et-Marne', 'couverture 77830'],
  openGraph: {
    title: 'Nos Services | GD Construction',
    description: 'Découvrez tous les services de GD Construction à Pamfou : maçonnerie, rénovation, plomberie, électricité, couverture.',
    url: 'https://gd-construction.fr/services',
  },
  alternates: {
    canonical: 'https://gd-construction.fr/services',
  },
};

const services = [
  {
    title: "Maçonnerie Générale",
    slug: "maconnerie-generale",
    description: "Construction de murs, dalles béton, fondations, extensions",
    icon: "🏗️",
    keywords: "maçon Pamfou, construction mur, dalle béton, fondations"
  },
  {
    title: "Rénovation Intérieure", 
    slug: "renovation-interieure",
    description: "Cuisine, salle de bain, sols, cloisons, peinture",
    icon: "🏠",
    keywords: "rénovation intérieure Pamfou, cuisine, salle de bain"
  },
  {
    title: "Rénovation Extérieure",
    slug: "renovation-exterieure", 
    description: "Façades, isolation, terrasses, allées, cours",
    icon: "🏡",
    keywords: "ravalement façade, isolation extérieure, terrasse"
  },
  {
    title: "Plomberie",
    slug: "plomberie",
    description: "Installation, réparation, dépannage sanitaire",
    icon: "🔧",
    keywords: "plombier Pamfou, installation sanitaire, dépannage"
  },
  {
    title: "Électricité",
    slug: "electricite",
    description: "Installation électrique, tableau, dépannage",
    icon: "⚡",
    keywords: "électricien Seine-et-Marne, installation électrique, tableau"
  },
  {
    title: "Couverture",
    slug: "couverture",
    description: "Toiture, charpente, gouttières, étanchéité",
    icon: "🏘️", 
    keywords: "couvreur 77830, toiture, charpente, gouttières"
  },
  {
    title: "Carrelage & Sols",
    slug: "carrelage-sols",
    description: "Pose de carrelage, parquet, sols PVC",
    icon: "🏛️",
    keywords: "carreleur Pamfou, pose carrelage, parquet"
  },
  {
    title: "Peinture & Finitions",
    slug: "peinture-finitions", 
    description: "Peinture intérieure/extérieure, enduits, finitions",
    icon: "🎨",
    keywords: "peintre Seine-et-Marne, peinture intérieure, enduits"
  }
];

export default function Services() {
  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Services de Maçonnerie et Rénovation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GD Construction intervient pour tous vos travaux de maçonnerie générale et rénovation 
            à Pamfou et dans toute la Seine-et-Marne. Spécialistes tous corps d'état.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.slug} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <Link 
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                En savoir plus →
              </Link>
            </div>
          ))}
        </div>

        {/* Zone d'intervention */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Zone d'Intervention</h2>
          <p className="text-xl mb-6">
            Nous intervenons à Pamfou et dans un rayon de 30 km
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Seine-et-Marne (77)</h3>
              <p className="text-sm">Melun, Fontainebleau, Montereau-Fault-Yonne</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Essonne (91)</h3>
              <p className="text-sm">Milly-la-Forêt, La Ferté-Alais</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Yonne (89)</h3>
              <p className="text-sm">Sens, Villeneuve-sur-Yonne</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Besoin d'un devis gratuit ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez-nous pour une étude personnalisée de votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Demander un devis
            </Link>
            <a 
              href="tel:0695918103"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              06 95 91 81 03
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}