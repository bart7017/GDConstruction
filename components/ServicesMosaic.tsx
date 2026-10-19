import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { servicesBySlug } from "@constants/services";

// Mosaïque des métiers (choix du 19/10, voir design/direction.md). Avec les 9 métiers,
// la maçonnerie, cœur du métier, occupe la grande case.
export const ServicesMosaic = ({ slugs }: { slugs?: string[] }) => {
  const services = slugs ? slugs.map((s) => servicesBySlug[s]).filter(Boolean) : Object.values(servicesBySlug);
  const featured = services.length > 4;

  return (
    <ul
      className={clsx(
        "grid auto-rows-[150px] grid-cols-2 gap-2.5 sm:auto-rows-[200px] sm:gap-3",
        featured ? "lg:grid-cols-4 lg:auto-rows-[220px]" : "md:grid-cols-3",
      )}
    >
      {services.map((s, i) => {
        const big = featured && i === 0;
        return (
          <li key={s.slug} className={clsx("reveal", big && "col-span-2 row-span-2", !featured && i === 0 && "col-span-2 md:col-span-1")}>
            <Link
              href={`/services/${s.slug}`}
              className="group relative isolate flex h-full items-end overflow-hidden rounded-2xl p-4 text-chaux focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-signal sm:p-5"
            >
              <Image
                src={s.image}
                alt=""
                fill
                sizes={big ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                className="-z-20 object-cover transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06] group-focus-visible:scale-[1.06] motion-reduce:transition-none"
              />
              <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ardoise/95 via-ardoise/35 to-ardoise/0" />
              <span className="min-w-0">
                <span className={clsx("block font-display font-bold leading-tight [font-stretch:118%]", big ? "text-2xl sm:text-4xl" : "text-base sm:text-xl")}>
                  {s.title}
                </span>
                <span className={clsx("mt-1 text-sm text-chaux/85", big ? "block" : "hidden sm:block")}>{s.description}</span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
