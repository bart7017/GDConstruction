import { Container } from "@components/Container";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pompe à Chaleur & Climatisation | GD Construction Pamfou',
  description: 'Installation de pompes à chaleur air-air, air-eau et systèmes de climatisation à Pamfou. Solutions énergétiques performantes et économiques. Devis gratuit.',
  keywords: ['pompe à chaleur Pamfou', 'climatisation Pamfou', 'chauffage économique', 'installation climatiseur', 'pompe chaleur air eau', 'Seine-et-Marne'],
};

export default function PompeAChaleurClimatisation() {
  return (
    <Container>
      <div className="px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Pompe à Chaleur & <span className="text-primary">Climatisation</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Solutions énergétiques modernes et économiques pour votre confort thermique toute l'année. 
            Installation professionnelle de pompes à chaleur et systèmes de climatisation à Pamfou et Seine-et-Marne.
          </p>
        </div>

        {/* Services Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nos Solutions de Chauffage et Climatisation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Pompes à Chaleur Air-Air</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Installation de splits et multi-splits</li>
                <li>• Chauffage et rafraîchissement réversible</li>
                <li>• Économies d'énergie jusqu'à 70%</li>
                <li>• Contrôle intelligent et programmation</li>
                <li>• Maintenance et entretien annuel</li>
                <li>• Marques premium (Daikin, Mitsubishi, Panasonic)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Pompes à Chaleur Air-Eau</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Remplacement de chaudière fioul/gaz</li>
                <li>• Production d'eau chaude sanitaire</li>
                <li>• Compatible plancher chauffant et radiateurs</li>
                <li>• Éligible aux aides d'État (MaPrimeRénov')</li>
                <li>• Installation certifiée RGE</li>
                <li>• Garantie constructeur étendue</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Climatisation Résidentielle</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Climatiseurs mono et multi-zones</li>
                <li>• Unités murales design et silencieuses</li>
                <li>• Climatisation gainable (discret)</li>
                <li>• Filtration et purification de l'air</li>
                <li>• Télécommande et contrôle Wi-Fi</li>
                <li>• Consommation énergétique optimisée (A+++)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Services Associés</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Étude thermique personnalisée</li>
                <li>• Raccordement électrique aux normes</li>
                <li>• Évacuation des condensats</li>
                <li>• Mise en service et réglages</li>
                <li>• Formation à l'utilisation</li>
                <li>• Contrat de maintenance préventive</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Avantages Section */}
        <div className="bg-building-800 text-white py-16 rounded-2xl mb-16">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Pourquoi Choisir nos Solutions Énergétiques ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-2">Économies Garanties</h3>
                <p className="text-building-200">Réduction de 40 à 70% sur vos factures de chauffage et climatisation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">Écologique</h3>
                <p className="text-building-200">Solutions respectueuses de l'environnement, énergie renouvelable</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-2">Confort Optimal</h3>
                <p className="text-building-200">Température idéale toute l'année, diffusion homogène</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Notre Processus d'Installation
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Étude et Devis Gratuit</h3>
                <p className="text-gray-600">Visite technique, calcul des besoins, étude thermique et proposition personnalisée</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Planification des Travaux</h3>
                <p className="text-gray-600">Organisation du chantier, commande du matériel, coordination des équipes</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Installation Professionnelle</h3>
                <p className="text-gray-600">Pose des unités, raccordements, mise en service par techniciens certifiés</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mise en Service et Formation</h3>
                <p className="text-gray-600">Tests de fonctionnement, réglages optimaux, formation à l'utilisation</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-quaternary border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Besoin d'une Installation de Pompe à Chaleur ou Climatisation ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nos experts vous conseillent gratuitement pour choisir la solution la plus adaptée à votre logement et votre budget. 
            Éligibilité aux aides d'État vérifiée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0695918103"
              className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-secondary transition-colors"
            >
              📞 06 95 91 81 03
            </a>
            <a
              href="/contact"
              className="border border-primary text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Devis Gratuit
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            📍 Zone d'intervention : Pamfou et 50km • Installation certifiée RGE • Aides d'État possibles
          </p>
        </div>
      </div>
    </Container>
  );
}