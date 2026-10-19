import clsx from "clsx";

// Cote d'architecte : un trait de mesure qui porte une vraie information (rayon, nombre de métiers, délai).
export const Cote = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={clsx("flex h-3 items-center gap-3 border-x border-current text-sm", className)}>
    <span className="h-px flex-1 bg-current" aria-hidden />
    <span className="whitespace-nowrap">{children}</span>
    <span className="h-px flex-1 bg-current" aria-hidden />
  </div>
);
