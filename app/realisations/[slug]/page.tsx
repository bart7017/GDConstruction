import { Container } from "@components/Container";
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { realisationSlugs, RealisationSlug } from '@constants/realisations';

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
const realisationsData: Record<RealisationSlug, Realisation> = {
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
  },

  'salle-bain-fontainebleau-2024': {
    id: 'salle-bain-fontainebleau-2024',
    title: 'Salle de bain avec douche italienne - Fontainebleau',
    description: 'Rénovation complète avec douche italienne, carrelage haut de gamme et éclairage LED intégré.',
    category: 'Plomberie & Carrelage',
    date: '2024-10-20',
    location: 'Fontainebleau (77300)',
    client: 'Mme Legrand',
    surface: '8m²',
    duration: '2 semaines',
    budget: '8 000 - 12 000€',
    tags: ['rénovation', 'salle de bain', 'douche italienne', 'carrelage', 'plomberie'],
    images: [
      { url: '/images/sdb-fontainebleau-avant.webp', alt: 'Salle de bain avant', caption: 'État initial de la salle de bain' },
      { url: '/images/sdb-fontainebleau-demo.webp', alt: 'Démolition', caption: 'Démolition et préparation' },
      { url: '/images/sdb-fontainebleau-carrelage.webp', alt: 'Pose carrelage', caption: 'Carrelage mural et sol' },
      { url: '/images/sdb-fontainebleau-finale.webp', alt: 'Salle de bain terminée', caption: 'Résultat final avec douche italienne' }
    ],
    challenges: [
      'Évacuation existante mal positionnée',
      'Étanchéité renforcée pour douche à l\'italienne',
      'Optimisation de l\'espace restreint',
      'Intégration éclairage dans faux-plafond'
    ],
    solutions: [
      'Reprise complète des évacuations',
      'Système d\'étanchéité liquide multicouches',
      'Mobilier suspendu pour gagner de l\'espace',
      'Spots LED encastrés avec variateur'
    ],
    materials: [
      'Carrelage grès cérame grand format 60x60',
      'Faïence mosaïque effet pierre naturelle',
      'Receveur de douche extra-plat Geberit',
      'Robinetterie thermostatique Hansgrohe',
      'Meuble vasque suspendu avec tiroirs'
    ],
    techniques: [
      'Chape sèche pour mise à niveau',
      'Étanchéité liquide sous carrelage',
      'Pose carrelage au mortier-colle',
      'Raccordements PER et multicouche',
      'Installation VMC hygroréglable'
    ],
    results: [
      'Espace optimisé avec rangements intégrés',
      'Douche italienne de plain-pied',
      'Éclairage LED basse consommation',
      'Finitions haut de gamme durables'
    ],
    testimonial: {
      text: 'Ma salle de bain a été totalement transformée. L\'équipe a su créer un espace moderne dans un volume restreint. Le résultat dépasse mes attentes.',
      author: 'Mme Legrand',
      rating: 5
    }
  },

  'toiture-nemours-2024': {
    id: 'toiture-nemours-2024',
    title: 'Réfection toiture complète - Nemours',
    description: 'Remplacement total de la couverture avec isolation renforcée, zinguerie et gouttières neuves.',
    category: 'Couverture',
    date: '2024-09-10',
    location: 'Nemours (77140)',
    client: 'M. et Mme Rousseau',
    surface: '150m²',
    duration: '4 semaines',
    budget: '25 000 - 35 000€',
    tags: ['toiture', 'couverture', 'isolation', 'zinguerie', 'charpente'],
    images: [
      { url: '/images/toiture-nemours-avant.webp', alt: 'Toiture avant travaux', caption: 'État initial de la toiture' },
      { url: '/images/toiture-nemours-demo.webp', alt: 'Dépose couverture', caption: 'Dépose de l\'ancienne couverture' },
      { url: '/images/toiture-nemours-isolation.webp', alt: 'Isolation combles', caption: 'Isolation renforcée 300mm' },
      { url: '/images/toiture-nemours-tuiles.webp', alt: 'Pose tuiles', caption: 'Pose nouvelle couverture' },
      { url: '/images/toiture-nemours-finale.webp', alt: 'Toiture terminée', caption: 'Toiture achevée avec zinguerie' }
    ],
    challenges: [
      'Charpente ancienne nécessitant des renforts',
      'Isolation thermique aux normes RT2012',
      'Évacuation eaux pluviales à revoir',
      'Travaux en hauteur par temps variable'
    ],
    solutions: [
      'Renforcement charpente avec connecteurs métalliques',
      'Isolation laine de verre 300mm entre chevrons',
      'Système de collecte avec descentes renforcées',
      'Planning adapté aux conditions météo'
    ],
    materials: [
      'Tuiles mécaniques Terreal Tradition rouge',
      'Isolation laine de verre 300mm λ=0.032',
      'Écran de sous-toiture HPV',
      'Zinguerie zinc naturel traditionnelle',
      'Gouttières PVC section 150mm'
    ],
    techniques: [
      'Dépose tuiles et liteaux existants',
      'Renforcement ponctuel de charpente',
      'Pose écran HPV et contre-lattage',
      'Soudure zinc à l\'étain traditionnel',
      'Fixation renforcée zones exposées'
    ],
    results: [
      'Isolation thermique conforme RT2012',
      'Étanchéité parfaite garantie 10 ans',
      'Évacuation eaux pluviales optimisée',
      'Aspect esthétique valorisant le bien'
    ],
    testimonial: {
      text: 'Excellente prestation de A à Z. Notre toiture était en mauvais état, maintenant elle est comme neuve et bien isolée. Equipe très professionnelle.',
      author: 'M. Rousseau',
      rating: 5
    }
  },

  'escalier-beton-provins-2024': {
    id: 'escalier-beton-provins-2024',
    title: 'Escalier béton design - Provins',
    description: 'Création d\'un escalier béton extérieur avec garde-corps métallique et éclairage LED intégré.',
    category: 'Maçonnerie générale',
    date: '2024-08-25',
    location: 'Provins (77160)',
    client: 'M. Lambert',
    surface: '15m²',
    duration: '10 jours',
    budget: '6 000 - 8 000€',
    tags: ['escalier', 'béton', 'garde-corps', 'éclairage', 'extérieur'],
    images: [
      { url: '/images/escalier-provins-terrain.webp', alt: 'Terrain avant', caption: 'Préparation du terrain' },
      { url: '/images/escalier-provins-coffrage.webp', alt: 'Coffrage escalier', caption: 'Coffrage béton sur mesure' },
      { url: '/images/escalier-provins-coulage.webp', alt: 'Coulage béton', caption: 'Coulage béton structurel' },
      { url: '/images/escalier-provins-gardecorps.webp', alt: 'Garde-corps', caption: 'Installation garde-corps' },
      { url: '/images/escalier-provins-finale.webp', alt: 'Escalier terminé', caption: 'Escalier achevé avec éclairage' }
    ],
    challenges: [
      'Terrain en dénivelé important',
      'Escalier suspendu sans point d\'appui central',
      'Intégration éclairage dans le béton',
      'Garde-corps aux normes sécurité'
    ],
    solutions: [
      'Fondations profondes avec ancrage renforcé',
      'Ferraillage dimensionné pour la portée libre',
      'Gaines électriques noyées dans le coffrage',
      'Garde-corps métallique sur platines scellées'
    ],
    materials: [
      'Béton dosé à 350 kg/m³ avec adjuvant',
      'Ferraillage HA 12 et HA 16',
      'Garde-corps acier galvanisé thermolaqué',
      'Spots LED 12V encastrés',
      'Finition béton poli'
    ],
    techniques: [
      'Terrassement précis au laser',
      'Coffrage bois avec contreplaqué filmé',
      'Coulage en une seule fois',
      'Talochage mécanique pour finition',
      'Scellement chimique garde-corps'
    ],
    results: [
      'Escalier design intégré au paysage',
      'Structure durable garantie 10 ans',
      'Éclairage automatique crépusculaire',
      'Sécurité optimale avec garde-corps'
    ],
    testimonial: {
      text: 'Cet escalier a complètement transformé l\'accès à ma terrasse. Le design est moderne et la réalisation parfaite. Très satisfait du résultat.',
      author: 'M. Lambert',
      rating: 5
    }
  },

  'pompe-chaleur-dammarie-2024': {
    id: 'pompe-chaleur-dammarie-2024',
    title: 'Installation pompe à chaleur 16kW - Dammarie',
    description: 'Installation PAC air-eau avec plancher chauffant et production eau chaude sanitaire pour économies d\'énergie.',
    category: 'Pompe à chaleur',
    date: '2024-07-30',
    location: 'Dammarie-lès-Lys (77190)',
    client: 'Famille Moreau',
    surface: '120m²',
    duration: '1 semaine',
    budget: '18 000 - 25 000€',
    tags: ['pompe à chaleur', 'chauffage', 'plancher chauffant', 'économie énergie', 'écologie'],
    images: [
      { url: '/images/pac-dammarie-avant.webp', alt: 'Installation avant', caption: 'Ancienne installation fioul' },
      { url: '/images/pac-dammarie-unite-ext.webp', alt: 'Unité extérieure', caption: 'Installation unité extérieure' },
      { url: '/images/pac-dammarie-technique.webp', alt: 'Local technique', caption: 'Module hydraulique intérieur' },
      { url: '/images/pac-dammarie-plancher.webp', alt: 'Plancher chauffant', caption: 'Réseau plancher chauffant' },
      { url: '/images/pac-dammarie-regulation.webp', alt: 'Régulation', caption: 'Système de régulation connecté' }
    ],
    challenges: [
      'Remplacement installation fioul existante',
      'Adaptation réseau hydraulique plancher chauffant',
      'Dimensionnement pour maison 120m²',
      'Intégration esthétique unité extérieure'
    ],
    solutions: [
      'Dépose cuve fioul et neutralisation',
      'Reprise hydraulique avec collecteurs zones',
      'PAC 16kW air-eau haute performance',
      'Positionnement discret avec écran végétal'
    ],
    materials: [
      'Pompe à chaleur Daikin Altherma 16kW',
      'Ballon tampon 500L avec ECS intégrée',
      'Collecteurs laiton 8 circuits',
      'Régulation connectée avec sonde extérieure',
      'Isolation phonique unité extérieure'
    ],
    techniques: [
      'Raccordement électrique triphasé',
      'Liaisons frigorifiques cuivre isolées',
      'Mise en service avec contrôle étanchéité',
      'Programmation régulation zones',
      'Tests performance selon NF'
    ],
    results: [
      'Économies énergétiques de 60% vs fioul',
      'Confort thermique optimal toute l\'année',
      'Production ECS économique intégrée',
      'Installation éligible MaPrimeRénov\''
    ],
    testimonial: {
      text: 'Notre nouvelle pompe à chaleur nous fait économiser considérablement sur nos factures. L\'installation s\'est parfaitement déroulée et le confort est au rendez-vous.',
      author: 'M. et Mme Moreau',
      rating: 5
    }
  }
};

function getRealisation(slug: string): Realisation | undefined {
  return realisationsData[slug as RealisationSlug];
}

// Génération des métadonnées dynamiques
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const realisation = getRealisation(slug);

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
    alternates: {
      canonical: `https://www.gdconstruction.net/realisations/${slug}`,
    },
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
  return realisationSlugs.map((slug) => ({
    slug,
  }));
}

export default async function RealisationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const realisation = getRealisation(slug);

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
                <div key={index} className="bg-linear-to-br from-building-100 to-building-200 rounded-xl overflow-hidden h-64 flex items-center justify-center">
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