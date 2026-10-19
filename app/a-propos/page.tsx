import { Container } from "@components/Container";
import { ButtonLink } from "@components/Button";
import { Blocks, PageHeader, Section } from "@components/Page";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grégory DA COSTA, Artisan Maçon à Pamfou',
  description: 'Découvrez l\'histoire de GD Construction et son fondateur Grégory DA COSTA. 24 ans d\'expérience en maçonnerie, formé chez les Compagnons de France. Entreprise familiale à Pamfou.',
  keywords: ['Grégory DA COSTA', 'maçon Pamfou', 'Compagnons de France', 'entreprise familiale', 'expérience maçonnerie', 'artisan Seine-et-Marne'],
  alternates: {
    canonical: 'https://www.gdconstruction.net/a-propos',
  },
};

// Le parcours est une vraie chronologie : l'ordre compte.
const parcours = [
  { when: "Enfance", title: "Enfance", text: "Sur les chantiers avec son père, artisan maçon, depuis tout petit" },
  { when: "16 ans", title: "Formation d'excellence", text: "École des Compagnons de France - BEP en alternance" },
  { when: "Après l'alternance", title: "Salarié du bâtiment", text: "Employé sur les chantiers, tous corps d'état" },
  { when: "2014", title: "2014 - Création GD Construction", text: "Patron de sa propre entreprise à Pamfou" },
];

export default function APropos() {
  return (
    <Container>
      <PageHeader
        kicker="À propos"
        title="L'histoire de GD Construction"
        intro="Une passion familiale transmise de père en fils, 24 années d'expérience au service de votre habitat"
      />

      <Section title="Grégory DA COSTA">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div className="grid max-w-2xl gap-5 text-lg leading-relaxed text-ardoise/85">
            <p>
              <strong className="text-ardoise">Fondateur et dirigeant de GD Construction</strong>, Grégory DA COSTA a baigné dans l&apos;univers du bâtiment dès son plus jeune âge.
              Enfant, il accompagnait déjà son père, artisan maçon, sur les chantiers, développant ainsi une passion précoce pour les métiers de la construction.
            </p>
            <p>
              À 16 ans, il intègre l&apos;École des Compagnons de France, prestigieuse institution de formation où il obtient son BEP en alternance.
              Cette formation d&apos;excellence lui apporte non seulement les compétences techniques, mais aussi les valeurs du compagnonnage :
              rigueur, perfectionnement continu et transmission du savoir-faire.
            </p>
            <p>
              Aujourd&apos;hui âgé de 40 ans, Grégory cumule <strong className="text-ardoise">24 années d&apos;expérience</strong> dans tous les corps d&apos;état du bâtiment.
              Son expertise couvre la maçonnerie générale, la plomberie, l&apos;électricité, la couverture et bien plus encore.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold [font-stretch:115%] sm:text-2xl">Son parcours</h3>
            <ol className="mt-6 border-l border-ardoise/20">
              {parcours.map((step) => (
                <li key={step.title} className="relative pb-8 pl-8 last:pb-0">
                  <span aria-hidden className="absolute -left-[5px] top-2 size-2.5 bg-signal" />
                  {step.when !== step.title && <p className="text-sm text-ardoise/70">{step.when}</p>}
                  <p className="mt-1 font-semibold">{step.title}</p>
                  <p className="mt-1 text-ardoise/75">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section tone="dark" title="Nos valeurs">
        <Blocks
          tone="dark"
          cols={3}
          items={[
            {
              title: "Savoir-faire traditionnel",
              text: "Formation aux techniques traditionnelles chez les Compagnons, combinée aux méthodes modernes pour un résultat d'exception.",
            },
            {
              title: "Esprit familial",
              text: "Une entreprise à taille humaine où chaque projet est traité avec l'attention et le soin d'un proche.",
            },
            {
              title: "Excellence",
              text: "24 ans d'expérience pour des réalisations de qualité, respectant les délais et votre budget.",
            },
          ]}
        />
      </Section>

      <Section title="GD Construction aujourd'hui">
        <Blocks
          items={[
            {
              title: "Depuis 2014",
              text: "Depuis 2014, GD Construction accompagne les particuliers et professionnels de Pamfou et ses environs dans leurs projets de construction et rénovation.",
            },
            {
              title: "Expertise complète",
              text: "Maçonnerie, plomberie, électricité, couverture, climatisation... GD Construction maîtrise tous les corps d'état pour vous offrir un service complet et coordonné.",
            },
          ]}
        />
      </Section>

      <Section tone="white" title="Qualifications et assurances">
        <Blocks
          cols={3}
          items={[
            { title: "Formation Compagnons", text: "BEP obtenu en alternance" },
            { title: "Entreprise déclarée", text: "SIRET 503 834 426 00028" },
            { title: "Assurance décennale", text: "Protection complète de vos travaux" },
          ]}
        />
      </Section>

      <Section
        title="Confiez votre projet à un expert"
        intro="Bénéficiez de 24 années d'expérience et du savoir-faire des Compagnons de France pour concrétiser vos projets de construction et rénovation."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="tel:+33695918103" variant="signal">06 95 91 81 03</ButtonLink>
          <ButtonLink href="/contact" variant="line">Demander un devis</ButtonLink>
        </div>
      </Section>
    </Container>
  );
}
