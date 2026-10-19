import { Container } from "@components/Container";
import { ButtonLink } from "@components/Button";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales, politique de confidentialité et conditions d\'utilisation du site GD Construction.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://www.gdconstruction.net/mentions-legales',
  },
};

// Le texte suit l'état réel du site : tant que Formspree n'est pas configuré,
// il n'y a pas de formulaire, donc pas de collecte à déclarer.
const formulaireActif = Boolean(process.env.NEXT_PUBLIC_FORMSPREE_ID);

export default function MentionsLegales() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-14 sm:pt-20">
        <h1 className="display-title mb-14 text-[2.4rem] sm:text-6xl">Mentions légales</h1>
        
        {/* Éditeur du site */}
        <section className="mb-14 border-t border-ardoise/15 pt-8">
          <h2 className="display-title mb-5 text-2xl sm:text-3xl">Éditeur du site</h2>
          <div className="max-w-[68ch] leading-relaxed text-ardoise/85">
            <p><strong>Raison sociale :</strong> GD Construction</p>
            <p><strong>Adresse :</strong> 77830 Pamfou, Seine-et-Marne</p>
            <p><strong>Téléphone :</strong> 06 95 91 81 03</p>
            <p><strong>SIRET :</strong> 503 834 426 00028</p>
            <p><strong>SIREN :</strong> 503 834 426</p>
            <p><strong>Responsable de publication :</strong> Grégory DA COSTA</p>
          </div>
        </section>

        {/* Assurance professionnelle */}
        {/* Le nom de l'assureur et la zone couverte sont volontairement absents :
            ils n'ont pas encore été relevés sur l'attestation, et un changement de
            compagnie est prévu. Les ajouter est une mention obligatoire au sens de
            l'article L241-1 du code des assurances (assureur + zone géographique). */}
        <section className="mb-14 border-t border-ardoise/15 pt-8">
          <h2 className="display-title mb-5 text-2xl sm:text-3xl">Assurance Professionnelle</h2>
          <div className="max-w-[68ch] leading-relaxed text-ardoise/85">
            <p>
              GD Construction est titulaire d'une <strong>assurance responsabilité
              civile décennale</strong> couvrant l'ensemble de ses interventions.
            </p>
            <p className="mt-3 text-sm text-ardoise/75">
              L'attestation d'assurance peut vous être transmise sur simple demande au
              06 95 91 81 03.
            </p>
          </div>
        </section>

        {/* Hébergement */}
        <section className="mb-14 border-t border-ardoise/15 pt-8">
          <h2 className="display-title mb-5 text-2xl sm:text-3xl">Hébergement</h2>
          <div className="max-w-[68ch] leading-relaxed text-ardoise/85">
            <p><strong>Hébergeur :</strong> Vercel Inc.</p>
            <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p><strong>Site :</strong> <a href="https://vercel.com" className="font-semibold text-ardoise underline underline-offset-2">vercel.com</a></p>
            <p className="mt-3 text-sm text-ardoise/75">
              Les transferts de données hors Union européenne sont encadrés par les
              clauses contractuelles types de la Commission européenne.
            </p>
          </div>
        </section>

        {/* Protection des données personnelles */}
        <section className="mb-14 border-t border-ardoise/15 pt-8">
          <h2 className="display-title mb-5 text-2xl sm:text-3xl">Protection des Données Personnelles (RGPD)</h2>
          
          <h3 className="mb-2 mt-8 font-display text-lg font-bold [font-stretch:115%]">Collecte des données</h3>
          <div className="max-w-[68ch] leading-relaxed text-ardoise/85">
            {formulaireActif ? (
              <>
                <p className="mb-3">
                  Le formulaire de contact collecte les données suivantes :
                </p>
                <ul className="list-disc list-inside space-y-1 text-ardoise/85 mb-3">
                  <li>Nom (obligatoire)</li>
                  <li>Adresse e-mail (obligatoire)</li>
                  <li>Numéro de téléphone (facultatif)</li>
                  <li>Ville du chantier (facultatif)</li>
                  <li>Description du projet (obligatoire)</li>
                </ul>
                <p className="mb-3">
                  S'y ajoutent les informations que vous nous communiquez spontanément
                  lorsque vous nous appelez.
                </p>
                <p className="text-sm text-ardoise/75">
                  L'acheminement du formulaire est assuré par notre sous-traitant
                  Formspree Inc. (États-Unis), qui transmet le message par courriel sans
                  le conserver durablement. Ce transfert hors Union européenne est encadré
                  par les clauses contractuelles types de la Commission européenne.
                </p>
              </>
            ) : (
              <>
                <p className="mb-3">
                  Ce site ne comporte aucun formulaire et ne collecte <strong>aucune donnée
                  personnelle</strong> lors de votre navigation.
                </p>
                <p>
                  Les seules données que nous traitons sont celles que vous nous communiquez
                  spontanément lorsque vous nous appelez : nom, numéro de téléphone et
                  description de votre projet.
                </p>
              </>
            )}
          </div>

          <h3 className="mb-2 mt-8 font-display text-lg font-bold [font-stretch:115%]">Finalité du traitement</h3>
          <div className="max-w-[68ch] leading-relaxed text-ardoise/85">
            <p>Ces données sont utilisées uniquement pour :</p>
            <ul className="list-disc list-inside space-y-1 text-ardoise/85 mt-2">
              <li>Répondre à vos demandes de devis</li>
              <li>Vous contacter concernant nos services</li>
              <li>Assurer le suivi de votre projet</li>
            </ul>
          </div>

          <h3 className="mb-2 mt-8 font-display text-lg font-bold [font-stretch:115%]">Base légale</h3>
          <div className="max-w-[68ch] leading-relaxed text-ardoise/85">
            <p>
              Le traitement repose sur l'exécution de mesures précontractuelles prises à
              votre demande (article 6.1.b du RGPD) : l'établissement d'un devis et le
              suivi de votre projet.
            </p>
          </div>

          <h3 className="mb-2 mt-8 font-display text-lg font-bold [font-stretch:115%]">Durée de conservation</h3>
          <div className="max-w-[68ch] leading-relaxed text-ardoise/85">
            <p>Vos données sont conservées pendant une durée de 3 ans maximum à compter de notre dernier contact, puis supprimées automatiquement.</p>
          </div>

          <h3 className="mb-2 mt-8 font-display text-lg font-bold [font-stretch:115%]">Vos droits</h3>
          <div className="max-w-[68ch] leading-relaxed text-ardoise/85">
            <p className="mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-1 text-ardoise/85">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong>Droit d'effacement :</strong> supprimer vos données</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
              <li><strong>Droit à la limitation :</strong> geler l'utilisation de vos données</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
            </ul>
            <p className="mt-3 text-sm text-ardoise/75">
              Pour exercer ces droits, contactez-nous par téléphone au 06 95 91 81 03.
            </p>
            <p className="mt-3 text-sm text-ardoise/75">
              Vous disposez également du droit d'introduire une réclamation auprès de la
              CNIL, autorité de contrôle française :{' '}
              <a
                href="https://www.cnil.fr/fr/plaintes"
                className="font-semibold text-ardoise underline underline-offset-2"
                rel="noopener noreferrer"
                target="_blank"
              >
                cnil.fr/fr/plaintes
              </a>
              .
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-14 border-t border-ardoise/15 pt-8">
          <h2 className="display-title mb-5 text-2xl sm:text-3xl">Politique des Cookies</h2>
          
          <h3 className="mb-2 mt-8 font-display text-lg font-bold [font-stretch:115%]">Cookies utilisés</h3>
          <div className="max-w-[68ch] leading-relaxed text-ardoise/85">
            <p className="mb-3">
              Ce site <strong>ne dépose aucun cookie</strong>. Il enregistre uniquement,
              dans le stockage local de votre navigateur, la réponse que vous donnez au
              bandeau d'information (clé <code>cookie-consent</code>), afin de ne pas
              vous le réafficher à chaque visite.
            </p>
            <p className="text-sm text-ardoise/75 mb-3">
              Aucun traceur publicitaire ni bouton de réseau social n'est utilisé. Cette
              préférence reste sur votre appareil et ne nous est jamais transmise.
            </p>
            <p className="text-sm text-ardoise/75">
              La fréquentation du site est mesurée par Vercel Analytics, sans cookie et
              sans identifiant permettant de vous reconnaître d'une visite à l'autre.
              Aucune donnée personnelle n'est produite par cette mesure, qui ne requiert
              donc pas votre consentement.
            </p>
          </div>

          <h3 className="mb-2 mt-8 font-display text-lg font-bold [font-stretch:115%]">Gestion des cookies</h3>
          <div className="max-w-[68ch] leading-relaxed text-ardoise/85">
            <p>
              Vous pouvez à tout moment effacer cette préférence en vidant les données de
              site de votre navigateur, ou configurer celui-ci pour bloquer le stockage
              local. Le site reste pleinement fonctionnel dans les deux cas.
            </p>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section className="mb-14 border-t border-ardoise/15 pt-8">
          <h2 className="display-title mb-5 text-2xl sm:text-3xl">Propriété Intellectuelle</h2>
          <div className="max-w-[68ch] leading-relaxed text-ardoise/85">
            <p>L'ensemble de ce site (structure, textes, images, logos) est protégé par le droit d'auteur. Toute reproduction totale ou partielle est interdite sans autorisation préalable.</p>
          </div>
        </section>

        {/* Responsabilité */}
        <section className="mb-14 border-t border-ardoise/15 pt-8">
          <h2 className="display-title mb-5 text-2xl sm:text-3xl">Limitation de Responsabilité</h2>
          <div className="max-w-[68ch] leading-relaxed text-ardoise/85">
            <p>Les informations présentes sur ce site sont données à titre indicatif. GD Construction ne peut être tenu responsable des erreurs ou omissions, ni des conséquences de leur utilisation.</p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-14 border-t border-ardoise/15 pt-8">
          <h2 className="display-title mb-5 text-2xl sm:text-3xl">Contact</h2>
          <div className="max-w-[68ch] leading-relaxed text-ardoise/85">
            <p className="mb-5">Pour toute question concernant ces mentions légales ou l'utilisation de vos données :</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="tel:+33695918103" variant="signal">06 95 91 81 03</ButtonLink>
              <ButtonLink href="/contact" variant="line">Formulaire de contact</ButtonLink>
            </div>
          </div>
        </section>

        <div className="border-t border-ardoise/15 pt-8 text-sm text-ardoise/70">
          {/* Date figée : `new Date()` affichait la date du dernier déploiement,
              ce qui laissait croire à une révision du texte à chaque mise en ligne. */}
          <p>Dernière mise à jour : 02/09/2026</p>
        </div>
      </div>
    </Container>
  );
}