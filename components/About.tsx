import { ButtonLink } from "./Button";
import { Blocks, Points, Section } from "./Page";

export const About = () => (
  <Section
    id="about"
    tone="white"
    title="Une entreprise familiale, un savoir-faire transmis"
    intro="Grégory DA COSTA a grandi sur les chantiers aux côtés de son père, artisan maçon. Il a créé GD Construction en 2014 pour vous offrir une expertise complète dans tous les corps d'état."
  >
    <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
      <div className="grid gap-6 text-lg leading-relaxed text-ardoise/85">
        <p>
          À 16 ans, il intègre l&apos;École des <strong className="text-ardoise">Compagnons de France</strong>{" "}et obtient son
          BEP en alternance. Cette formation forge sa technique et ses valeurs d&apos;artisan : rigueur, perfectionnement et
          respect des traditions.
        </p>
        <p>
          GD Construction intervient à Pamfou et dans un rayon de 50 km : Seine-et-Marne, Essonne, Val-de-Marne et
          départements limitrophes.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/a-propos" variant="line">Découvrir notre histoire</ButtonLink>
        </div>
      </div>
      <div className="grid content-start gap-8 sm:grid-cols-2 lg:grid-cols-1">
        <div className="border-t border-ardoise/15 pt-6">
          <p className="display-title text-5xl text-ardoise">2014</p>
          <p className="mt-2 text-ardoise/75">Création de GD Construction</p>
        </div>
        <div className="border-t border-ardoise/15 pt-6">
          <p className="display-title text-5xl text-ardoise">24 ans</p>
          <p className="mt-2 text-ardoise/75">de métier, depuis ses 16 ans : alternance, salarié, puis patron</p>
        </div>
      </div>
    </div>

    <div className="mt-20">
      <Blocks
        cols={3}
        items={[
          { title: "Excellence", text: "Chaque projet réalisé avec le plus grand soin." },
          { title: "Proximité", text: "Une relation de confiance avec nos clients." },
          { title: "Savoir-faire", text: "Formation Compagnons et transmission familiale." },
        ]}
      />
    </div>

    <div className="mt-16 border-t border-ardoise/15 pt-8 text-ardoise/80">
      <Points
        className="sm:grid-cols-3"
        items={["Formation École des Compagnons de France", "SIRET 503 834 426 00028", "Assurance décennale"]}
      />
    </div>
  </Section>
);
