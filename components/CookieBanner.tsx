'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
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

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700 leading-relaxed">
              🍪 Ce site utilise des cookies essentiels pour son bon fonctionnement. 
              Nous ne collectons aucune donnée personnelle à des fins commerciales. 
              <Link href="/mentions-legales" className="text-primary hover:text-secondary underline ml-1">
                En savoir plus
              </Link>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};