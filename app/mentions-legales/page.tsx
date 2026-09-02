import { Container } from "@components/Container";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | GD Construction Pamfou',
  description: 'Mentions légales, politique de confidentialité et conditions d\'utilisation du site GD Construction.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://www.gdconstruction.net/mentions-legales',
  },
};

export default function MentionsLegales() {
  return (
    <Container>
      <div className="px-4 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Mentions Légales</h1>
        
        {/* Éditeur du site */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Éditeur du site</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p><strong>Raison sociale :</strong> GD Construction</p>
            <p><strong>Adresse :</strong> 77830 Pamfou, Seine-et-Marne</p>
            <p><strong>Téléphone :</strong> 06 95 91 81 03</p>
            <p><strong>SIRET :</strong> 503 834 426 00028</p>
            <p><strong>SIREN :</strong> 503 834 426</p>
            <p><strong>Responsable de publication :</strong> Grégory DA COSTA</p>
          </div>
        </section>

        {/* Assurance professionnelle */}
        {/* Le nom de l'assureur et la zone couverte sont volontairement absents :
            ils n'ont pas encore été relevés sur l'attestation, et un changement de
            compagnie est prévu. Les ajouter est une mention obligatoire au sens de
            l'article L241-1 du code des assurances (assureur + zone géographique). */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Assurance Professionnelle</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p>
              GD Construction est titulaire d'une <strong>assurance responsabilité
              civile décennale</strong> couvrant l'ensemble de ses interventions.
            </p>
            <p className="mt-3 text-sm text-gray-600">
              L'attestation d'assurance est jointe à chaque devis et peut vous être
              transmise sur simple demande au 06 95 91 81 03.
            </p>
          </div>
        </section>

        {/* Hébergement */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hébergement</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p><strong>Hébergeur :</strong> Vercel Inc.</p>
            <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p><strong>Site :</strong> <a href="https://vercel.com" className="text-primary underline">vercel.com</a></p>
            <p className="mt-3 text-sm text-gray-600">
              Les transferts de données hors Union européenne sont encadrés par les
              clauses contractuelles types de la Commission européenne.
            </p>
          </div>
        </section>

        {/* Protection des données personnelles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Protection des Données Personnelles (RGPD)</h2>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Collecte des données</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p className="mb-3">
              Ce site ne comporte aucun formulaire et ne collecte <strong>aucune donnée
              personnelle</strong> lors de votre navigation.
            </p>
            <p>
              Les seules données que nous traitons sont celles que vous nous communiquez
              spontanément lorsque vous nous appelez : nom, numéro de téléphone et
              description de votre projet.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Finalité du traitement</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p>Ces données sont utilisées uniquement pour :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
              <li>Répondre à vos demandes de devis</li>
              <li>Vous contacter concernant nos services</li>
              <li>Assurer le suivi de votre projet</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Base légale</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p>
              Le traitement repose sur l'exécution de mesures précontractuelles prises à
              votre demande (article 6.1.b du RGPD) : l'établissement d'un devis et le
              suivi de votre projet.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Durée de conservation</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p>Vos données sont conservées pendant une durée de 3 ans maximum à compter de notre dernier contact, puis supprimées automatiquement.</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Vos droits</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p className="mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong>Droit d'effacement :</strong> supprimer vos données</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
              <li><strong>Droit à la limitation :</strong> geler l'utilisation de vos données</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Pour exercer ces droits, contactez-nous par téléphone au 06 95 91 81 03.
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Vous disposez également du droit d'introduire une réclamation auprès de la
              CNIL, autorité de contrôle française :{' '}
              <a
                href="https://www.cnil.fr/fr/plaintes"
                className="text-primary underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                cnil.fr/fr/plaintes
              </a>
              .
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Politique des Cookies</h2>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Cookies utilisés</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p className="mb-3">
              Ce site <strong>ne dépose aucun cookie</strong>. Il enregistre uniquement,
              dans le stockage local de votre navigateur, la réponse que vous donnez au
              bandeau d'information (clé <code>cookie-consent</code>), afin de ne pas
              vous le réafficher à chaque visite.
            </p>
            <p className="text-sm text-gray-600">
              Aucun traceur de mesure d'audience, de publicité ou de réseau social n'est
              utilisé. Cette donnée reste sur votre appareil et ne nous est jamais transmise.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Gestion des cookies</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p>
              Vous pouvez à tout moment effacer cette préférence en vidant les données de
              site de votre navigateur, ou configurer celui-ci pour bloquer le stockage
              local. Le site reste pleinement fonctionnel dans les deux cas.
            </p>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Propriété Intellectuelle</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p>L'ensemble de ce site (structure, textes, images, logos) est protégé par le droit d'auteur. Toute reproduction totale ou partielle est interdite sans autorisation préalable.</p>
          </div>
        </section>

        {/* Responsabilité */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation de Responsabilité</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p>Les informations présentes sur ce site sont données à titre indicatif. GD Construction ne peut être tenu responsable des erreurs ou omissions, ni des conséquences de leur utilisation.</p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
            <p className="mb-3">Pour toute question concernant ces mentions légales ou l'utilisation de vos données :</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0695918103"
                className="bg-primary text-white px-6 py-2 rounded-lg text-center hover:bg-secondary transition-colors"
              >
                📞 06 95 91 81 03
              </a>
              <a
                href="/contact"
                className="border border-primary text-primary px-6 py-2 rounded-lg text-center hover:bg-primary hover:text-white transition-colors"
              >
                Formulaire de contact
              </a>
            </div>
          </div>
        </section>

        <div className="text-sm text-gray-500 text-center pt-8 border-t border-gray-200">
          {/* Date figée : `new Date()` affichait la date du dernier déploiement,
              ce qui laissait croire à une révision du texte à chaque mise en ligne. */}
          <p>Dernière mise à jour : 02/09/2026</p>
        </div>
      </div>
    </Container>
  );
}