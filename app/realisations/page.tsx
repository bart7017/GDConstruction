import { Container } from "@components/Container";
import { RealisationsGrid } from "@components/RealisationsGrid";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nos Réalisations en Seine-et-Marne',
  description: 'Découvrez nos dernières réalisations de maçonnerie, rénovation, plomberie et électricité à Pamfou et Seine-et-Marne. Portfolio de travaux de qualité avec photos avant/après.',
  keywords: ['réalisations GD Construction', 'chantiers Pamfou', 'portfolio maçonnerie', 'travaux Seine-et-Marne', 'avant après rénovation', 'photos chantier'],
  alternates: {
    canonical: 'https://www.gdconstruction.net/realisations',
  },
  openGraph: {
    title: 'Nos Réalisations | GD Construction Portfolio',
    description: 'Portfolio de nos réalisations en maçonnerie et rénovation à Pamfou.',
    type: 'website',
  },
};


export default function Realisations() {
  return (
    <Container>
      <RealisationsGrid />
      
      {/* Stats section */}
      <div className="max-w-4xl mx-auto py-16 border-t border-gray-200">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-gray-600">Chantiers réalisés</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10</div>
            <div className="text-gray-600">Années d'entreprise</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">Clients satisfaits</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50km</div>
            <div className="text-gray-600">Zone d'intervention</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-building-800 text-white py-16 rounded-2xl mx-4 mb-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Votre Projet Mérite la Même Attention
          </h2>
          <p className="text-building-200 mb-8 text-lg">
            Chaque chantier est unique. Confiez-nous votre projet et rejoignez 
            nos clients satisfaits en Seine-et-Marne, Essonne et Val-de-Marne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0695918103"
              className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-secondary transition-colors"
            >
              📞 06 95 91 81 03
            </a>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-building-800 transition-colors"
            >
              Demander un Devis
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

