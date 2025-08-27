import { Container } from "@components/Container";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | GD Construction Pamfou',
  description: 'Mentions légales, politique de confidentialité et conditions d\'utilisation du site GD Construction.',
  robots: { index: false, follow: true },
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
            <p><strong>SIRET :</strong> En cours d'obtention</p>
            <p><strong>Responsable de publication :</strong> Gérant de GD Construction</p>
          </div>
        </section>

        {/* Hébergement */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hébergement</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p>Ce site est hébergé par des services d'hébergement web respectant les normes européennes de protection des données.</p>
          </div>
        </section>

        {/* Protection des données personnelles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Protection des Données Personnelles (RGPD)</h2>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Collecte des données</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p className="mb-3">Les données personnelles collectées sur ce site sont :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Nom, prénom (formulaire de contact)</li>
              <li>Adresse e-mail (formulaire de contact)</li>
              <li>Numéro de téléphone (formulaire de contact)</li>
              <li>Message (formulaire de contact)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Finalité du traitement</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p>Vos données personnelles sont collectées uniquement pour :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
              <li>Répondre à vos demandes de devis</li>
              <li>Vous contacter concernant nos services</li>
              <li>Assurer le suivi de votre projet</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Base légale</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p>Le traitement de vos données repose sur votre consentement libre et éclairé lors de l'envoi du formulaire de contact.</p>
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
              <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Pour exercer ces droits, contactez-nous par téléphone au 06 95 91 81 03.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Politique des Cookies</h2>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Cookies utilisés</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p className="mb-3">Ce site utilise uniquement des cookies techniques nécessaires :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>Cookies de préférences :</strong> mémorisation de vos choix (consentement)</li>
              <li><strong>Cookies de fonctionnement :</strong> bon fonctionnement du site</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Nous n'utilisons <strong>aucun cookie</strong> de tracking, publicité ou analytics.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-3">Gestion des cookies</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <p>Vous pouvez à tout moment :</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
              <li>Supprimer les cookies via les paramètres de votre navigateur</li>
              <li>Configurer votre navigateur pour refuser les cookies</li>
            </ul>
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
          <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </Container>
  );
}