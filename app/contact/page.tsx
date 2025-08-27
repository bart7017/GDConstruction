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

          {/* Formulaire de contact */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">
              Demande de devis gratuit
            </h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  Ville *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Type de travaux *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="maconnerie">Maçonnerie générale</option>
                  <option value="renovation-interieure">Rénovation intérieure</option>
                  <option value="renovation-exterieure">Rénovation extérieure</option>
                  <option value="plomberie">Plomberie</option>
                  <option value="electricite">Électricité</option>
                  <option value="couverture">Couverture</option>
                  <option value="carrelage">Carrelage</option>
                  <option value="peinture">Peinture</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Description du projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Décrivez votre projet en détail..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors font-semibold"
              >
                Envoyer ma demande de devis
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              * Champs obligatoires. Réponse sous 24h maximum.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}