import { Container } from "@components/Container";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez GD Construction à Pamfou (77830) pour tous vos travaux de maçonnerie et rénovation. Devis gratuit au 06 95 91 81 03.',
  keywords: ['contact GD Construction', 'devis maçonnerie Pamfou', 'téléphone maçon 77830', 'rendez-vous rénovation'],
  openGraph: {
    title: 'Contact | GD Construction',
    description: 'Contactez GD Construction pour tous vos travaux de maçonnerie et rénovation à Pamfou.',
    url: 'https://www.gdconstruction.net/contact',
  },
  alternates: {
    canonical: 'https://www.gdconstruction.net/contact',
  },
};

export default function Contact() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez GD Construction
          </h1>
          <p className="text-xl text-gray-600">
            Votre spécialiste en maçonnerie générale et rénovation à Pamfou
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Informations de contact */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">
              Nos coordonnées
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 text-primary mr-3 mt-1">📍</div>
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-gray-600">
                    77830 Pamfou<br />
                    Seine-et-Marne
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 text-primary mr-3 mt-1">📞</div>
                <div>
                  <h3 className="font-semibold">Téléphone</h3>
                  <p className="text-gray-600">
                    <a href="tel:0695918103" className="hover:text-primary">
                      06 95 91 81 03
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 text-primary mr-3 mt-1">🕒</div>
                <div>
                  <h3 className="font-semibold">Horaires</h3>
                  <p className="text-gray-600">
                    Lundi - Vendredi : 8h - 18h<br />
                    Samedi : 8h - 12h<br />
                    Urgences : 7j/7
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 text-primary mr-3 mt-1">📍</div>
                <div>
                  <h3 className="font-semibold">Zone d'intervention</h3>
                  <p className="text-gray-600">
                    Pamfou et communes environnantes<br />
                    Rayon de 50 km
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact direct */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">
              Demande de devis gratuit
            </h2>
            
            {/* Message informatif */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <div className="flex items-center">
                <div className="text-yellow-600 text-2xl mr-3">📞</div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    Formulaire temporairement indisponible
                  </h3>
                  <p className="text-yellow-700 mb-3">
                    Pour une réponse immédiate, contactez-nous directement par téléphone.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact rapide */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Appelez-nous maintenant
                </h3>
                <a 
                  href="tel:0695918103"
                  className="inline-flex items-center justify-center w-full bg-primary text-white py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
                >
                  <span className="mr-2">📞</span>
                  06 95 91 81 03
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Devis gratuit par téléphone
                </p>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Informations à préparer pour votre appel :
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Type de travaux souhaités</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Localisation du chantier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Description du projet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Délai souhaité</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center text-green-800">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="font-medium">Disponible 6j/7 • Devis gratuit • Déplacement gratuit dans un rayon de 50km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}