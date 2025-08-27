import '../styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'GD Construction | Maçonnerie Générale et Rénovation à Pamfou',
    template: '%s | GD Construction'
  },
  description: 'GD Construction, entreprise de maçonnerie générale et rénovation à Pamfou (77830). Spécialistes tous corps d\'état : plomberie, électricité, couverture. Devis gratuit.',
  keywords: ['maçonnerie', 'rénovation', 'Pamfou', 'Seine-et-Marne', 'plomberie', 'électricité', 'couverture', 'tous corps état'],
  authors: [{ name: 'GD Construction' }],
  creator: 'GD Construction',
  publisher: 'GD Construction',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.gdconstruction.net'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.gdconstruction.net',
    title: 'GD Construction | Maçonnerie Générale et Rénovation à Pamfou',
    description: 'Entreprise de maçonnerie générale et rénovation à Pamfou (77830). Spécialistes tous corps d\'état.',
    siteName: 'GD Construction',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GD Construction | Maçonnerie Générale et Rénovation à Pamfou',
    description: 'Entreprise de maçonnerie générale et rénovation à Pamfou (77830). Spécialistes tous corps d\'état.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}