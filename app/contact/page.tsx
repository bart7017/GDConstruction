import { Container } from "@components/Container";
import { ContactForm } from "@components/ContactForm";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact et Devis Gratuit à Pamfou (77830)',
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

const formulaireActif = Boolean(process.env.NEXT_PUBLIC_FORMSPREE_ID);

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
            
            {formulaireActif ? (
              <>
                <ContactForm />
                <div className="border-t mt-6 pt-6 text-center">
                  <p className="text-sm text-gray-600 mb-3">
                    Vous préférez expliquer de vive voix ?
                  </p>
                  <a
                    href="tel:0695918103"
                    className="inline-flex items-center justify-center border border-primary text-primary py-2.5 px-6 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="mr-2">📞</span>
                    06 95 91 81 03
                  </a>
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    Formulaire momentanément indisponible
                  </h3>
                  <p className="text-yellow-700">
                    Pour une réponse immédiate, contactez-nous directement par téléphone.
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href="tel:0695918103"
                    className="inline-flex items-center justify-center w-full bg-primary text-white py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
                  >
                    <span className="mr-2">📞</span>
                    06 95 91 81 03
                  </a>
                  <p className="text-sm text-gray-600 mt-2">Devis gratuit par téléphone</p>
                </div>
              </div>
            )}

            <div className="bg-green-50 p-4 rounded-lg mt-6">
              <div className="flex items-center text-green-800">
                <span className="text-green-600 mr-2">✓</span>
                <span className="font-medium">Disponible 6j/7 • Devis gratuit • Déplacement gratuit dans un rayon de 50km</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}