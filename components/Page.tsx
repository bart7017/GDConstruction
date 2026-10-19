import clsx from "clsx";
import Image from "next/image";

// Blocs de mise en page communs à toutes les pages (voir design/direction.md).

/** En-tête des pages intérieures : grand titre aligné à gauche, intro, actions, photo facultative. */
export const PageHeader = ({
  kicker,
  title,
  intro,
  image,
  imageAlt = "",
  children,
}: {
  kicker?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}) => (
  <header className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:pt-20">
    {kicker && <p className="text-ardoise/70">{kicker}</p>}
    <h1 className="display-title mt-4 max-w-5xl text-[2.4rem] sm:text-6xl lg:text-7xl">{title}</h1>
    {intro && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-ardoise/80">{intro}</div>}
    {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
    {image && (
      <div className="relative mt-12 aspect-[4/3] overflow-hidden [&_img]:reveal-zoom rounded-3xl sm:aspect-[21/9]">
        <Image src={image} alt={imageAlt} fill preload fetchPriority="high" sizes="(min-width: 1280px) 1248px, 100vw" className="reveal-zoom object-cover" />
      </div>
    )}
  </header>
);

/** Section standard : titre display, intro, contenu. `tone="dark"` pour une bande ardoise. */
export const Section = ({
  id,
  title,
  intro,
  tone = "light",
  className,
  children,
}: {
  id?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "light" | "dark" | "white";
  className?: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className={clsx(
      tone === "dark" && "bg-ardoise text-chaux",
      tone === "white" && "bg-white",
      "scroll-mt-20",
    )}
  >
    <div className={clsx("mx-auto max-w-7xl px-4 py-16 sm:py-24", className)}>
      {title && <h2 className="display-title reveal max-w-4xl text-3xl sm:text-5xl">{title}</h2>}
      {intro && (
        <div className={clsx("reveal mt-5 max-w-2xl text-lg leading-relaxed", tone === "dark" ? "text-chaux/80" : "text-ardoise/80")}>{intro}</div>
      )}
      <div className={clsx(title || intro ? "mt-12" : undefined)}>{children}</div>
    </div>
  </section>
);

/** Liste à puces carrées jaune chantier. */
export const Points = ({ items, className }: { items: React.ReactNode[]; className?: string }) => (
  <ul className={clsx("grid gap-2.5", className)}>
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-signal" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

/** Grille de blocs séparés par un filet, sans cartes : titre, texte, contenu. */
export const Blocks = ({
  items,
  cols = 2,
  tone = "light",
}: {
  items: { title: React.ReactNode; text?: React.ReactNode; children?: React.ReactNode }[];
  cols?: 2 | 3 | 4;
  tone?: "light" | "dark";
}) => (
  <div
    className={clsx(
      "grid gap-x-10 gap-y-12",
      cols === 2 && "md:grid-cols-2",
      cols === 3 && "md:grid-cols-3",
      cols === 4 && "sm:grid-cols-2 lg:grid-cols-4",
    )}
  >
    {items.map((item, i) => (
      <div key={i} className={clsx("reveal border-t pt-6", tone === "dark" ? "border-chaux/20" : "border-ardoise/15")}>
        <h3 className="font-display text-xl font-bold [font-stretch:115%] sm:text-2xl">{item.title}</h3>
        {item.text && <p className={clsx("mt-3 leading-relaxed", tone === "dark" ? "text-chaux/75" : "text-ardoise/75")}>{item.text}</p>}
        {item.children && <div className={clsx("mt-5", tone === "dark" ? "text-chaux/85" : "text-ardoise/85")}>{item.children}</div>}
      </div>
    ))}
  </div>
);

/** Galerie de photos d'illustration (jamais présentées comme des réalisations). */
export const Gallery = ({ photos }: { photos: { src: string; alt: string; caption: string }[] }) => (
  <div className={clsx("grid gap-4", photos.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3")}>
    {photos.map((photo) => (
      <figure key={photo.src} className="reveal">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl [&_img]:reveal-zoom">
          <Image src={photo.src} alt={photo.alt} fill sizes={photos.length === 2 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw"} className="object-cover" />
        </div>
        <figcaption className="mt-3 text-sm text-ardoise/70">{photo.caption}</figcaption>
      </figure>
    ))}
  </div>
);
