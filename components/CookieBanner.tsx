'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // localStorage n'existe pas au rendu serveur : l'etat initial doit valoir
      // false pour que l'hydratation corresponde, et la vraie valeur ne peut
      // etre lue qu'ici. Le double rendu est inherent a ce pattern.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  const button =
    'rounded-full px-5 py-2.5 text-sm font-semibold transition-transform active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise';

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl bg-chaux p-4 text-ardoise shadow-[0_20px_50px_-20px_rgb(34_48_58/0.5)] ring-1 ring-ardoise/10 sm:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-ardoise/85">
          Ce site ne dépose aucun cookie et ne collecte aucune donnée personnelle.
          Seule votre réponse à ce bandeau est mémorisée par votre navigateur.{' '}
          <Link href="/mentions-legales" className="font-semibold text-ardoise underline underline-offset-2">
            En savoir plus
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button onClick={declineCookies} className={`${button} ring-1 ring-ardoise/30`}>
            Refuser
          </button>
          <button onClick={acceptCookies} className={`${button} bg-ardoise text-chaux`}>
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};
