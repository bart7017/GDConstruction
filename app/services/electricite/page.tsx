import { Container } from "@components/Container";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Électricien à Pamfou | Électricité Seine-et-Marne',
  description: 'Électricien professionnel à Pamfou (77830). Installation électrique, tableau, domotique, dépannage. Mise aux normes NF C 15-100. Devis gratuit GD Construction.',
  keywords: ['électricien Pamfou', 'électricité Seine-et-Marne', 'installation électrique 77830', 'tableau électrique', 'mise aux normes', 'domotique', 'dépannage électrique'],
  openGraph: {
    title: 'Électricité | GD Construction Pamfou',
    description: 'Électricien professionnel à Pamfou. Installation, dépannage, mise aux normes.',
    url: 'https://gd-construction.fr/services/electricite',
  },
  alternates: {
    canonical: 'https://gd-construction.fr/services/electricite',
  },
};

const services = [
  {
    title: "Tableaux Électriques",
    icon: "⚡",
    description: "Installation et mise aux normes de tableaux électriques",
    details: [
      "Tableau divisionnaire complet",
      "Disjoncteurs et différentiels", 
      "Parafoudre et délesteur",
      "Mise aux normes NF C 15-100",
      "Extension de tableau existant",
      "Télé-report et supervision"
    ]
  },
  {
    title: "Installation Complète",
    icon: "🔌",
    description: "Électricité générale pour neuf et rénovation",
    details: [
      "Prises de courant 16A et 32A",
      "Interrupteurs et va-et-vient",
      "Éclairage LED et traditionnel",
      "Circuits spécialisés (four, lave-vaisselle)",
      "Prises TV, téléphone, internet",
      "Gaines et chemins de câbles"
    ]
  },
  {
    title: "Éclairage & Domotique",
    icon: "💡",
    description: "Solutions d'éclairage modernes et connectées",
    details: [
      "Éclairage LED haute efficacité",
      "Variateurs et télécommandes",
      "Spots encastrés et suspensions",
      "Éclairage extérieur et sécurité",
      "Domotique et maison connectée",
      "Programmation et scénarios"
    ]
  },
  {
    title: "Chauffage Électrique",
    icon: "🔥",
    description: "Installation de systèmes de chauffage électriques",
    details: [
      "Radiateurs à inertie et chaleur douce",
      "Plancher chauffant électrique",
      "Pompe à chaleur air/air",
      "Programmation et régulation",
      "Sonde de température",
      "Fil pilote et gestionnaire d'énergie"
    ]
  },
  {
    title: "Dépannage & SAV",
    icon: "🔧",
    description: "Intervention rapide et diagnostic",
    details: [
      "Panne électrique totale ou partielle",
      "Disjoncteur qui saute",
      "Recherche de défaut",
      "Remplacement appareillage",
      "Court-circuit et surtension",
      "Maintenance préventive"
    ]
  },
  {
    title: "Sécurité & Normes",
    icon: "🛡️",
    description: "Conformité et mise en sécurité",
    details: [
      "Diagnostic électrique obligatoire",
      "Mise en sécurité installation",
      "Liaison équipotentielle",
      "Protection différentielle",
      "Attestation Consuel",
      "Contrôle avant mise en service"
    ]
  }
];

const normes = [
  {
    norme: "NF C 15-100",
    description: "Norme française pour installations électriques basse tension",
    points: [
      "Protection des personnes et des biens",
      "Nombre minimal de prises par pièce", 
      "Circuits spécialisés obligatoires",
      "Protection différentielle 30mA",
      "Liaison équipotentielle salle de bain"
    ]
  },
  {
    norme: "RT 2012/RE 2020", 
    description: "Réglementation thermique et environnementale",
    points: [
      "Performance énergétique du bâtiment",
      "Éclairage LED basse consommation",
      "Programmation du chauffage",
      "Gestion automatisée de l'énergie",
      "Indicateurs de consommation"
    ]
  }
];

export default function Electricite() {
  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-4xl">⚡</span>
            <span className="text-primary font-semibold">Électricité</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Électricien Professionnel à Pamfou
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            GD Construction maîtrise tous les aspects de l'électricité en Seine-et-Marne. 
            Installation complète, mise aux normes, domotique : nos électriciens qualifiés 
            garantissent votre sécurité et votre confort électrique.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <span className="text-5xl">{service.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-3">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-center text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-primary font-bold text-sm">•</span>
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Normes et réglementations */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-8 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-3">📋</span>
            <div>
              <h2 className="text-3xl font-bold text-yellow-800">Conformité et Réglementations</h2>
              <p className="text-yellow-600 text-lg">Respect scrupuleux des normes en vigueur</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {normes.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">{item.norme}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-yellow-600 font-bold text-sm">•</span>
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Types de logements */}
        <div className="bg-gradient-to-r from-building-50 to-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Nous Intervenons sur Tous Types de Logements
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { type: "Maisons individuelles", icon: "🏠", desc: "Neuf et rénovation complète" },
              { type: "Appartements", icon: "🏢", desc: "Studio, F2 à F6" },
              { type: "Locaux commerciaux", icon: "🏪", desc: "Bureaux, magasins, ateliers" },
              { type: "Locaux industriels", icon: "🏭", desc: "Hangars, entrepôts, usines" }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md">
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-semibold text-lg mb-2 text-primary">{item.type}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tarifs électricité */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Tarifs Électricité Indicatifs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Installations Courantes :</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span>Prise de courant 16A</span>
                  <span className="font-semibold">25-40€</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Interrupteur simple</span>
                  <span className="font-semibold">20-35€</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Point lumineux</span>
                  <span className="font-semibold">35-60€</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Circuit spécialisé 32A</span>
                  <span className="font-semibold">80-150€</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Tableau électrique complet</span>
                  <span className="font-semibold">800-1500€</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Services Spéciaux :</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span>Diagnostic électrique</span>
                  <span className="font-semibold">120-180€</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Mise aux normes partielle</span>
                  <span className="font-semibold">500-1200€</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Dépannage urgence</span>
                  <span className="font-semibold">120-250€</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Installation domotique</span>
                  <span className="font-semibold">300-800€</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Chauffage électrique</span>
                  <span className="font-semibold">150-400€</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            * Prix TTC installation comprise, déplacement gratuit dans un rayon de 30km
          </p>
        </div>

        {/* Matériel professionnel */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Matériel Professionnel de Qualité
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Nos Marques :</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Appareillage :</strong> Legrand, Schneider Electric, Hager</p>
                <p className="text-gray-700"><strong>Éclairage :</strong> Philips, Osram, Ledvance</p>
                <p className="text-gray-700"><strong>Câblage :</strong> Nexans, Prysmian</p>
                <p className="text-gray-700"><strong>Protection :</strong> ABB, Merlin Gerin</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Nos Garanties :</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Matériel certifié CE et NF</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Installation garantie 2 ans</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Assurance décennale</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>SAV et maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Projet Électrique à Pamfou ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Devis gratuit • Aux normes • Intervention rapide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Demander un devis
            </Link>
            <a 
              href="tel:0695918103"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              06 95 91 81 03
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}