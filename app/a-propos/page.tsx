import { Container } from "@components/Container";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos | GD Construction - Grégory DA COSTA, 23 ans d\'expérience',
  description: 'Découvrez l\'histoire de GD Construction et son fondateur Grégory DA COSTA. 23 ans d\'expérience en maçonnerie, formé chez les Compagnons de France. Entreprise familiale à Pamfou.',
  keywords: ['Grégory DA COSTA', 'maçon Pamfou', 'Compagnons de France', 'entreprise familiale', 'expérience maçonnerie', 'artisan Seine-et-Marne'],
};

export default function APropos() {
  return (
    <Container>
      <div className="px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            L'Histoire de <span className="text-primary">GD Construction</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une passion familiale transmise de père en fils, 23 années d'expérience au service de votre habitat
          </p>
        </div>

        {/* Histoire du fondateur */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Grégory DA COSTA
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Fondateur et dirigeant de GD Construction</strong>, Grégory DA COSTA a baigné dans l'univers du bâtiment dès son plus jeune âge. 
                  Enfant, il accompagnait déjà son père, artisan maçon, sur les chantiers, développant ainsi une passion précoce pour les métiers de la construction.
                </p>
                <p>
                  À 16 ans, il intègre l'École des Compagnons de France, prestigieuse institution de formation où il obtient son BEP en alternance. 
                  Cette formation d'excellence lui apporte non seulement les compétences techniques, mais aussi les valeurs du compagnonnage : 
                  rigueur, perfectionnement continu et transmission du savoir-faire.
                </p>
                <p>
                  Aujourd'hui âgé de 39 ans, Grégory cumule <strong>23 années d'expérience</strong> dans tous les corps d'état du bâtiment. 
                  Son expertise couvre la maçonnerie générale, la plomberie, l'électricité, la couverture et bien plus encore.
                </p>
              </div>
            </div>
            <div className="bg-quaternary p-8 rounded-2xl border border-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-primary">Son Parcours</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">👶</div>
                  <div>
                    <p className="font-medium">Enfance</p>
                    <p className="text-sm text-gray-600">Initiation sur les chantiers avec son père maçon</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">16</div>
                  <div>
                    <p className="font-medium">Formation d'excellence</p>
                    <p className="text-sm text-gray-600">École des Compagnons de France - BEP en alternance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">23</div>
                  <div>
                    <p className="font-medium">Expérience professionnelle</p>
                    <p className="text-sm text-gray-600">23 ans d'expertise tous corps d'état</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">🏢</div>
                  <div>
                    <p className="font-medium">2014 - Création GD Construction</p>
                    <p className="text-sm text-gray-600">10 ans d'entreprise familiale à Pamfou</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Valeurs et philosophie */}
        <div className="bg-building-800 text-white py-16 rounded-2xl mb-16">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Nos Valeurs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-semibold mb-3">Savoir-Faire Traditionnel</h3>
                <p className="text-building-200">
                  Formation aux techniques traditionnelles chez les Compagnons, 
                  combinée aux méthodes modernes pour un résultat d'exception.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">👨‍👦</div>
                <h3 className="text-xl font-semibold mb-3">Esprit Familial</h3>
                <p className="text-building-200">
                  Une entreprise à taille humaine où chaque projet est traité 
                  avec l'attention et le soin d'un proche.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-building-200">
                  23 ans d'expérience pour des réalisations de qualité, 
                  respectant les délais et votre budget.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* L'entreprise aujourd'hui */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            GD Construction Aujourd'hui
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-semibold mb-4 text-primary">10 Ans d'Activité</h3>
              <p className="text-gray-600 leading-relaxed">
                Depuis 2014, GD Construction accompagne les particuliers et professionnels 
                de Pamfou et ses environs dans leurs projets de construction et rénovation. 
                Une décennie de confiance et de satisfactions clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Expertise Complète</h3>
              <p className="text-gray-600 leading-relaxed">
                Maçonnerie, plomberie, électricité, couverture, climatisation... 
                GD Construction maîtrise tous les corps d'état pour vous offrir 
                un service complet et coordonné.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-quaternary border border-primary/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Qualifications & Assurances
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-semibold text-gray-800">Formation Compagnons</h3>
              <p className="text-sm text-gray-600">BEP obtenu en alternance</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="font-semibold text-gray-800">SIRET en cours</h3>
              <p className="text-sm text-gray-600">Entreprise légalement déclarée</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-gray-800">Assurance Décennale</h3>
              <p className="text-sm text-gray-600">Protection complète de vos travaux</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Confiez votre projet à un expert
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Bénéficiez de 23 années d'expérience et du savoir-faire des Compagnons de France 
            pour concrétiser vos projets de construction et rénovation.
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
              Demander un Devis
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}