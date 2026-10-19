import { Container } from "@components/Container";
import { ButtonLink } from "@components/Button";
import { ContactForm } from "@components/ContactForm";
import { PageHeader, Points } from "@components/Page";
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

const coordonnees = [
  { title: "Adresse", body: <>77830 Pamfou<br />Seine-et-Marne</> },
  {
    title: "Téléphone",
    body: (
      <a href="tel:+33695918103" className="font-semibold text-ardoise underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise">
        06 95 91 81 03
      </a>
    ),
  },
  { title: "Horaires", body: <>Lundi - Vendredi : 8h - 18h<br />Samedi : 8h - 12h<br />Urgences : 7j/7</> },
  { title: "Zone d'intervention", body: <>Pamfou et communes environnantes<br />Rayon de 50 km</> },
];

export default function Contact() {
  return (
    <Container>
      <PageHeader
        kicker="Contact"
        title="Contactez GD Construction"
        intro="Votre spécialiste en maçonnerie générale et rénovation à Pamfou"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 lg:grid-cols-[1fr_1.4fr]">
        <section aria-labelledby="coordonnees">
          <h2 id="coordonnees" className="display-title text-3xl sm:text-4xl">Nos coordonnées</h2>
          <dl className="mt-8 grid gap-6">
            {coordonnees.map((item) => (
              <div key={item.title} className="border-t border-ardoise/15 pt-5">
                <dt className="font-display text-lg font-bold [font-stretch:115%]">{item.title}</dt>
                <dd className="mt-2 leading-relaxed text-ardoise/80">{item.body}</dd>
              </div>
            ))}
          </dl>
          <Points
            className="mt-8 border-t border-ardoise/15 pt-6 text-ardoise/85"
            items={["Disponible 6j/7", "Devis gratuit", "Déplacement gratuit dans un rayon de 50km"]}
          />
        </section>

        <section aria-labelledby="devis" className="self-start rounded-3xl bg-white p-6 ring-1 ring-ardoise/10 sm:p-10">
          <h2 id="devis" className="display-title text-3xl sm:text-4xl">Demande de devis gratuit</h2>
          <div className="mt-8">
            {formulaireActif ? (
              <>
                <ContactForm />
                <div className="mt-8 border-t border-ardoise/15 pt-6">
                  <p className="text-ardoise/75">Vous préférez expliquer de vive voix ?</p>
                  <ButtonLink href="tel:+33695918103" variant="line" className="mt-3">06 95 91 81 03</ButtonLink>
                </div>
              </>
            ) : (
              <div className="grid gap-6">
                <div className="border-l-4 border-signal bg-chaux p-6">
                  <h3 className="font-semibold text-ardoise">Formulaire momentanément indisponible</h3>
                  <p className="mt-2 text-ardoise/80">Pour une réponse immédiate, contactez-nous directement par téléphone.</p>
                </div>
                <div>
                  <ButtonLink href="tel:+33695918103" variant="signal" className="w-full text-lg">06 95 91 81 03</ButtonLink>
                  <p className="mt-2 text-center text-sm text-ardoise/70">Devis gratuit par téléphone</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Container>
  );
}
