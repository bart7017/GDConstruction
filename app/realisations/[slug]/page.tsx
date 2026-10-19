import { Container } from "@components/Container";
import { Metadata } from 'next';
import Link from 'next/link';
import { Blocks, PageHeader, Points, Section } from "@components/Page";
import Image from 'next/image';
import { servicesBySlug } from '@constants/services';
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
  surface: string;
  duration: string;
  tags: string[];
  images: { url: string; alt: string; caption?: string }[];
  /** Métier dont l'image d'illustration sert de couverture. */
  service: string;
  challenges: string[];
  solutions: string[];
  materials: string[];
  techniques: string[];
  results: string[];
}

// Base de données des réalisations (en production, cela viendrait d'un CMS)
const realisationsData: Record<RealisationSlug, Realisation> = {
  'renovation-cuisine-pamfou-2024': {
    id: 'renovation-cuisine-pamfou-2024',
    service: 'renovation-interieure',
    title: 'Rénovation complète cuisine - Pamfou',
    description: 'Transformation totale d\'une cuisine des années 80 en espace moderne et fonctionnel avec îlot central et électroménager intégré.',
    category: 'Rénovation intérieure',
    date: '2024-12-01',
    location: 'Pamfou (77830)',
    surface: '20m²',
    duration: '3 semaines',
    tags: ['rénovation', 'cuisine', 'carrelage', 'plomberie', 'électricité'],
    images: [],
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
      'Raccordements plomberie cuivre et PER',
      'Installation électrique aux normes NF C 15-100',
      'Ragréage autolissant du sol',
      'Pose carrelage en chevrons',
      'Menuiserie sur mesure'
    ],
    results: [
      'Gain de 40% d\'espace de rangement',
      'Consommation électrique réduite de 30%',
      'Éclairage LED optimisé',
      'Finitions haut de gamme durables'
    ]
  },
  
  'extension-maison-melun-2024': {
    id: 'extension-maison-melun-2024',
    service: 'maconnerie-generale',
    title: 'Extension maison individuelle - Melun',
    description: 'Création d\'une extension de 40m² avec fondations béton, murs en parpaing et charpente traditionnelle pour agrandir l\'espace de vie.',
    category: 'Maçonnerie générale',
    date: '2024-11-15',
    location: 'Melun (77000)',
    surface: '40m²',
    duration: '6 semaines',
    tags: ['extension', 'maçonnerie', 'fondations', 'charpente', 'couverture'],
    images: [],
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
    ]
  },

  'salle-bain-fontainebleau-2024': {
    id: 'salle-bain-fontainebleau-2024',
    service: 'carrelage-sols',
    title: 'Salle de bain avec douche italienne - Fontainebleau',
    description: 'Rénovation complète avec douche italienne, carrelage haut de gamme et éclairage LED intégré.',
    category: 'Plomberie & Carrelage',
    date: '2024-10-20',
    location: 'Fontainebleau (77300)',
    surface: '8m²',
    duration: '2 semaines',
    tags: ['rénovation', 'salle de bain', 'douche italienne', 'carrelage', 'plomberie'],
    images: [],
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
      'Raccordements PER et multicouche',
      'Chape sèche pour mise à niveau',
      'Étanchéité liquide sous carrelage',
      'Pose carrelage au mortier-colle',
      'Installation VMC hygroréglable'
    ],
    results: [
      'Espace optimisé avec rangements intégrés',
      'Douche italienne de plain-pied',
      'Éclairage LED basse consommation',
      'Finitions haut de gamme durables'
    ]
  },

  'toiture-nemours-2024': {
    id: 'toiture-nemours-2024',
    service: 'couverture',
    title: 'Réfection toiture complète - Nemours',
    description: 'Remplacement total de la couverture avec isolation renforcée, zinguerie et gouttières neuves.',
    category: 'Couverture',
    date: '2024-09-10',
    location: 'Nemours (77140)',
    surface: '150m²',
    duration: '4 semaines',
    tags: ['toiture', 'couverture', 'isolation', 'zinguerie', 'charpente'],
    images: [],
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
    ]
  },

  'escalier-beton-provins-2024': {
    id: 'escalier-beton-provins-2024',
    service: 'maconnerie-generale',
    title: 'Escalier béton design - Provins',
    description: 'Création d\'un escalier béton extérieur avec garde-corps métallique et éclairage LED intégré.',
    category: 'Maçonnerie générale',
    date: '2024-08-25',
    location: 'Provins (77160)',
    surface: '15m²',
    duration: '10 jours',
    tags: ['escalier', 'béton', 'garde-corps', 'éclairage', 'extérieur'],
    images: [],
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
    ]
  },

  'pompe-chaleur-dammarie-2024': {
    id: 'pompe-chaleur-dammarie-2024',
    service: 'pompe-chaleur-climatisation',
    title: 'Installation pompe à chaleur 16kW - Dammarie',
    description: 'Installation PAC air-eau avec plancher chauffant et production eau chaude sanitaire pour économies d\'énergie.',
    category: 'Pompe à chaleur',
    date: '2024-07-30',
    location: 'Dammarie-lès-Lys (77190)',
    surface: '120m²',
    duration: '1 semaine',
    tags: ['pompe à chaleur', 'chauffage', 'plancher chauffant', 'économie énergie', 'écologie'],
    images: [],
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
      'Production ECS économique intégrée'
    ]
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
      title: 'Réalisation non trouvée',
    };
  }

  return {
    // Le template du layout ajoute déjà « | GD Construction ».
    title: realisation.title,
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

  return (
    <Container>
      <nav aria-label="Fil d'Ariane" className="mx-auto max-w-7xl px-4 pt-8 text-sm text-ardoise/70">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-ardoise">Accueil</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/realisations" className="hover:text-ardoise">Réalisations</Link></li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-ardoise">{realisation.title}</li>
        </ol>
      </nav>

      <PageHeader kicker={realisation.category} title={realisation.title} intro={realisation.description} />

      <div className="mx-auto max-w-7xl px-4">
        <ul className="flex flex-wrap gap-2" aria-label="Mots-clés">
          {realisation.tags.map(tag => (
            <li key={tag} className="rounded-full px-3 py-1 text-sm text-ardoise/75 ring-1 ring-ardoise/15">{tag}</li>
          ))}
        </ul>
        {/* Pas encore de photo du chantier : image du métier, signalée comme illustration. */}
        <figure className="relative mt-10 aspect-[4/3] overflow-hidden [&_img]:reveal-zoom rounded-3xl sm:aspect-[21/9]">
          <Image src={servicesBySlug[realisation.service].image} alt="" fill priority sizes="(min-width: 1280px) 1248px, 100vw" className="object-cover" />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-ardoise/80 px-3 py-1 text-xs text-chaux">Photo d&apos;illustration</figcaption>
        </figure>
        <dl className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { label: "Date de réalisation", value: formatDate(realisation.date) },
            { label: "Localisation", value: realisation.location },
            { label: "Surface / Durée", value: `${realisation.surface}, ${realisation.duration}` },
          ].map((item) => (
            <div key={item.label} className="border-t border-ardoise/15 pt-4">
              <dt className="text-sm text-ardoise/70">{item.label}</dt>
              <dd className="mt-1 font-display text-xl font-bold [font-stretch:115%]">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Galerie masquée tant qu'aucune photo du chantier n'a été fournie :
          un cadre vide est un signal de qualité pire que pas de section. */}
      {realisation.images.length > 0 && (
        <Section title="Galerie photos">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {realisation.images.map((image, index) => (
              <div key={index} className="flex aspect-[4/3] items-end rounded-2xl bg-ardoise/5 p-5 text-sm text-ardoise/70">
                {image.caption || image.alt}
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <Blocks
          items={[
            { title: "Défis rencontrés", children: <Points items={realisation.challenges} /> },
            { title: "Solutions apportées", children: <Points items={realisation.solutions} /> },
            { title: "Matériaux utilisés", children: <Points items={realisation.materials} /> },
            { title: "Techniques employées", children: <Points items={realisation.techniques} /> },
          ]}
        />
      </Section>

      <Section tone="dark" title="Résultats obtenus">
        <Points items={realisation.results} className="gap-4 text-lg text-chaux/85 md:grid-cols-2" />
      </Section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <Link
          href="/realisations"
          className="font-semibold text-ardoise underline decoration-signal decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ardoise"
        >
          Retour aux réalisations
        </Link>
      </div>
    </Container>
  );
}
