import React from "react";
import Link from "next/link";

export const About = () => {
  return (
    <div
      id="about"
      className="px-4 bg-white py-20 md:py-32 relative overflow-hidden"
    >
      {/* Effets de fond subtils */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-linear-to-br from-primary/10 to-secondary/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-linear-to-tl from-building-100/60 to-transparent blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            À Propos de <span className="text-primary">GD Construction</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une entreprise familiale fondée sur la transmission du savoir-faire et l'excellence artisanale
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu principal */}
          <div className="space-y-6">
            <div className="bg-linear-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-primary text-3xl mr-3">👨‍🔧</span>
                Grégory DA COSTA
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Fondateur et dirigeant</strong> de GD Construction, Grégory a grandi sur les chantiers 
                aux côtés de son père artisan maçon. Cette immersion précoce lui a transmis la passion 
                du bâtiment et l'amour du travail bien fait.
              </p>
              <p className="text-gray-700 leading-relaxed">
                À 16 ans, il intègre l'École des <strong>Compagnons de France</strong> où il obtient son BEP 
                en alternance. Cette formation d'excellence forge son expertise technique et ses valeurs 
                d'artisan : rigueur, perfectionnement et respect des traditions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                <div className="text-primary text-2xl mb-3">🏢</div>
                <h4 className="font-semibold text-gray-800 mb-2">10 Ans d'Entreprise</h4>
                <p className="text-sm text-gray-600">Créée en 2014, GD Construction accompagne vos projets avec fiabilité</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                <div className="text-primary text-2xl mb-3">⚡</div>
                <h4 className="font-semibold text-gray-800 mb-2">23 Ans d'Expérience</h4>
                <p className="text-sm text-gray-600">Une expertise reconnue dans tous les corps d'état du bâtiment</p>
              </div>
            </div>
          </div>

          {/* Section valeurs et expertise */}
          <div className="space-y-8">
            <div className="bg-building-800 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Nos Valeurs</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h4 className="font-semibold mb-1">Excellence</h4>
                    <p className="text-building-200 text-sm">Chaque projet réalisé avec le plus grand soin</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🤝</div>
                  <div>
                    <h4 className="font-semibold mb-1">Proximité</h4>
                    <p className="text-building-200 text-sm">Une relation de confiance avec nos clients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">🛠️</div>
                  <div>
                    <h4 className="font-semibold mb-1">Savoir-faire</h4>
                    <p className="text-building-200 text-sm">Formation Compagnons et transmission familiale</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Zone d'intervention */}
            <div className="bg-quaternary border border-primary/20 p-6 rounded-xl text-center">
              <h4 className="font-semibold text-gray-800 mb-3">📍 Zone d'Intervention</h4>
              <p className="text-gray-700 mb-2">
                <strong>Pamfou et 50km aux alentours</strong>
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Seine-et-Marne • Essonne • Val-de-Marne
              </p>
              <p className="text-xs text-gray-500">
                Départements limitrophes • Interventions rapides • Devis gratuit
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/a-propos"
                className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-secondary transition-colors mb-4"
              >
                Découvrir notre histoire complète
              </Link>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="tel:0695918103"
                  className="text-primary hover:text-secondary transition-colors text-sm font-medium"
                >
                  📞 06 95 91 81 03
                </a>
                <span className="text-gray-400">•</span>
                <Link
                  href="/contact"
                  className="text-primary hover:text-secondary transition-colors text-sm font-medium"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications en bas */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="font-semibold text-gray-800">Formation Compagnons</h4>
              <p className="text-sm text-gray-600">École des Compagnons de France</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🏛️</div>
              <h4 className="font-semibold text-gray-800">Entreprise Déclarée</h4>
              <p className="text-sm text-gray-600">SIRET en cours d'obtention</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="font-semibold text-gray-800">Assurance Décennale</h4>
              <p className="text-sm text-gray-600">Protection complète garantie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};