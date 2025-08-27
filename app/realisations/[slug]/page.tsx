import { Container } from "@components/Container";
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Types
interface Realisation {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  location: string;
  client: string;
  surface: string;
  duration: string;
  budget: string;
  tags: string[];
  images: { url: string; alt: string; caption?: string }[];
  challenges: string[];
  solutions: string[];
  materials: string[];
  techniques: string[];
  results: string[];
  testimonial?: {
    text: string;
    author: string;
    rating: number;
  };
}

// Base de données des réalisations (en production, cela viendrait d'un CMS)
const realisationsData: { [key: string]: Realisation } = {
  'renovation-cuisine-pamfou-2024': {
    id: 'renovation-cuisine-pamfou-2024',
    title: 'Rénovation complète cuisine - Pamfou',
    description: 'Transformation totale d\'une cuisine des années 80 en espace moderne et fonctionnel avec îlot central et électroménager intégré.',
    category: 'Rénovation intérieure',
    date: '2024-12-01',
    location: 'Pamfou (77830)',
    client: 'Famille Martin',
    surface: '20m²',
    duration: '3 semaines',
    budget: '15 000 - 20 000€',
    tags: ['rénovation', 'cuisine', 'carrelage', 'plomberie', 'électricité'],
    images: [
      { url: '/images/cuisine-pamfou-avant.webp', alt: 'Cuisine avant rénovation', caption: 'État initial de la cuisine' },
      { url: '/images/cuisine-pamfou-travaux.webp', alt: 'Travaux en cours', caption: 'Démolition et préparation' },
      { url: '/images/cuisine-pamfou-apres.webp', alt: 'Cuisine rénovée', caption: 'Résultat final avec îlot central' }
    ],
    challenges: [
      'Ancien carrelage au plomb nécessitant un désamiantage',
      'Réseaux électriques vétustes à refaire entièrement',
      'Optimisation de l\'espace dans une surface contrainte',
      'Intégration harmonieuse avec le salon ouvert'
    ],
    solutions: [
      'Désamiantage professionnel selon les normes en vigueur',
      'Création d\'un tableau électrique dédié à la cuisine',
      'Conception d\'un îlot central multifonction',
      'Choix de matériaux coordonnés avec l\'existant'
    ],
    materials: [
      'Carrelage grès cérame imitation bois au sol',
      'Crédence en carrelage métro blanc',
      'Plan de travail en quartz Silestone',
      'Façades meubles laque blanche mate',
      'Électroménager Bosch encastrable'
    ],
    techniques: [
      'Ragréage autolissant du sol',
      'Pose carrelage en chevrons',
      'Raccordements plomberie cuivre et PER',
      'Installation électrique aux normes NF C 15-100',
      'Menuiserie sur mesure'
    ],
    results: [
      'Gain de 40% d\'espace de rangement',
      'Consommation électrique réduite de 30%',
      'Éclairage LED optimisé',
      'Finitions haut de gamme durables'
    ],
    testimonial: {
      text: 'Grégory et son équipe ont transformé notre ancienne cuisine en un véritable bijou. Le travail est impeccable, les délais respectés et l\'accompagnement parfait du début à la fin.',
      author: 'M. et Mme Martin',
      rating: 5
    }
  },
  
  'extension-maison-melun-2024': {
    id: 'extension-maison-melun-2024',
    title: 'Extension maison individuelle - Melun',
    description: 'Création d\'une extension de 40m² avec fondations béton, murs en parpaing et charpente traditionnelle pour agrandir l\'espace de vie.',
    category: 'Maçonnerie générale',
    date: '2024-11-15',
    location: 'Melun (77000)',
    client: 'M. et Mme Dubois',
    surface: '40m²',
    duration: '6 semaines',
    budget: '35 000 - 45 000€',
    tags: ['extension', 'maçonnerie', 'fondations', 'charpente', 'couverture'],
    images: [
      { url: '/images/extension-melun-terrain.webp', alt: 'Terrain avant travaux', caption: 'Préparation du terrain' },
      { url: '/images/extension-melun-fondations.webp', alt: 'Coulage fondations', caption: 'Fondations béton armé' },
      { url: '/images/extension-melun-murs.webp', alt: 'Élévation murs', caption: 'Montage murs parpaing' },
      { url: '/images/extension-melun-charpente.webp', alt: 'Pose charpente', caption: 'Charpente traditionnelle' },
      { url: '/images/extension-melun-finale.webp', alt: 'Extension terminée', caption: 'Extension achevée et raccordée' }
    ],
    challenges: [
      'Terrain en pente nécessitant un terrassement spécifique',
      'Raccordement étanche avec l\'existant',
      'Respect des règles d\'urbanisme locales',
      'Coordination avec les autres corps d\'état'
    ],
    solutions: [
      'Étude géotechnique et adaptation des fondations',
      'Système d\'étanchéité renforcé aux jonctions',
      'Conception respectant le PLU de Melun',
      'Planning coordonné avec plombier et électricien'
    ],
    materials: [
      'Béton dosé à 350kg/m³ pour les fondations',
      'Parpaing creux 20cm avec isolation',
      'Charpente bois Douglas traité classe 2',
      'Couverture tuiles mécaniques Terreal',
      'Membrane d\'étanchéité haute performance'
    ],
    techniques: [
      'Terrassement avec mini-pelle',
      'Ferraillage adapté au terrain',
      'Levage charpente avec grue',
      'Zinguerie traditionnelle soudée',
      'Jointoiement étanche façades'
    ],
    results: [
      '40m² habitables supplémentaires',
      'Extension parfaitement intégrée',
      'Isolation thermique optimale',
      'Garantie décennale sur la structure'
    ],
    testimonial: {
      text: 'Notre extension a été réalisée dans les règles de l\'art. L\'équipe GD Construction a su gérer toutes les contraintes techniques avec professionnalisme.',
      author: 'M. Dubois',
      rating: 5
    }
  }
};

// Génération des métadonnées dynamiques
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const realisation = realisationsData[slug];
  
  if (!realisation) {
    return {
      title: 'Réalisation non trouvée | GD Construction',
    };
  }

  return {
    title: `${realisation.title} | Réalisations GD Construction`,
    description: realisation.description,
    keywords: [
      ...realisation.tags,
      realisation.location.split(' ')[0], // ville
      'GD Construction',
      'chantier',
      'réalisation',
      realisation.category
    ],
    openGraph: {
      title: realisation.title,
      description: realisation.description,
      type: 'article',
      publishedTime: realisation.date,
      authors: ['GD Construction'],
      tags: realisation.tags,
    },
  };
}

// Génération des routes statiques
export async function generateStaticParams() {
  return Object.keys(realisationsData).map((slug) => ({
    slug,
  }));
}

export default async function RealisationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const realisation = realisationsData[slug];

  if (!realisation) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  return (
    <Container>
      <div className="px-4 py-16">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Accueil</Link>
            <span>•</span>
            <Link href="/realisations" className="hover:text-primary">Réalisations</Link>
            <span>•</span>
            <span className="text-gray-400">{realisation.title}</span>
          </nav>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                {realisation.category}
              </span>
              {realisation.tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              {realisation.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 max-w-4xl">
              {realisation.description}
            </p>

            {/* Métadonnées */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-50 p-6 rounded-2xl">
              <div>
                <div className="text-sm text-gray-500 mb-1">Date de réalisation</div>
                <div className="font-semibold">{formatDate(realisation.date)}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Localisation</div>
                <div className="font-semibold">{realisation.location}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Surface / Durée</div>
                <div className="font-semibold">{realisation.surface} • {realisation.duration}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Budget</div>
                <div className="font-semibold">{realisation.budget}</div>
              </div>
            </div>
          </div>

          {/* Galerie d'images */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Galerie Photos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {realisation.images.map((image, index) => (
                <div key={index} className="bg-gradient-to-br from-building-100 to-building-200 rounded-xl overflow-hidden h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-3xl mb-2">📷</div>
                    <div className="text-sm">{image.caption || image.alt}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Défis et Solutions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">🎯 Défis Rencontrés</h2>
                <ul className="space-y-3">
                  {realisation.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">✅ Solutions Apportées</h2>
                <ul className="space-y-3">
                  {realisation.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Matériaux et Techniques */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">🧱 Matériaux Utilisés</h2>
                <ul className="space-y-2">
                  {realisation.materials.map((material, index) => (
                    <li key={index} className="text-gray-700">
                      <span className="text-primary mr-2">▸</span>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">⚙️ Techniques Employées</h2>
                <ul className="space-y-2">
                  {realisation.techniques.map((technique, index) => (
                    <li key={index} className="text-gray-700">
                      <span className="text-primary mr-2">▸</span>
                      {technique}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Résultats */}
          <div className="mt-12 bg-building-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">🏆 Résultats Obtenus</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {realisation.results.map((result, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-700 font-medium">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Témoignage client */}
          {realisation.testimonial && (
            <div className="mt-12 bg-white border border-primary/20 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">💬 Témoignage Client</h2>
              <blockquote className="text-gray-700 text-lg italic mb-4 text-center">
                "{realisation.testimonial.text}"
              </blockquote>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {renderStars(realisation.testimonial.rating)}
                </div>
                <cite className="text-gray-600 font-medium">
                  — {realisation.testimonial.author}
                </cite>
              </div>
            </div>
          )}

          {/* Navigation et CTA */}
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
            <Link 
              href="/realisations"
              className="text-primary hover:text-secondary font-medium"
            >
              ← Retour aux réalisations
            </Link>
            
            <div className="flex gap-4">
              <a
                href="tel:0695918103"
                className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary transition-colors"
              >
                📞 06 95 91 81 03
              </a>
              <Link
                href="/contact"
                className="border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Votre Projet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}