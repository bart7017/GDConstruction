'use client';

import { useState } from 'react';
import Link from 'next/link';

// L'identifiant Formspree est public par conception : il n'ouvre que l'envoi
// vers un formulaire précis. Tant qu'il n'est pas renseigné dans Vercel, la
// page retombe sur le bloc téléphone plutôt que d'afficher un formulaire mort.
const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = 'idle' | 'sending' | 'sent' | 'error';

export const ContactForm = () => {
  const [status, setStatus] = useState<Status>('idle');

  if (!FORM_ID) return null;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(`Formspree a répondu ${response.status}`);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-3xl mb-3">✓</div>
        <h3 className="text-lg font-semibold text-green-900 mb-2">
          Votre demande est partie
        </h3>
        <p className="text-green-800 text-sm mb-4">
          Nous vous rappelons sous 48 heures ouvrées. Pour une urgence, appelez
          directement le 06 95 91 81 03.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm text-green-900 underline"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  const field =
    'w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 ' +
    'focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none';
  const label = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Piège à robots : un humain ne remplit pas un champ masqué. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      <div>
        <label className={label} htmlFor="nom">Nom <span className="text-primary">*</span></label>
        <input className={field} id="nom" name="nom" type="text" required autoComplete="name" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label} htmlFor="email">E-mail <span className="text-primary">*</span></label>
          <input className={field} id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div>
          <label className={label} htmlFor="telephone">Téléphone</label>
          <input className={field} id="telephone" name="telephone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="ville">Ville du chantier</label>
        <input className={field} id="ville" name="ville" type="text" placeholder="Melun, Fontainebleau…" />
      </div>

      <div>
        <label className={label} htmlFor="projet">Votre projet <span className="text-primary">*</span></label>
        <textarea
          className={field}
          id="projet"
          name="projet"
          rows={5}
          required
          placeholder="Type de travaux, surface approximative, délai souhaité…"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          L&apos;envoi a échoué. Réessayez, ou appelez le 06 95 91 81 03.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Envoi…' : 'Demander un devis gratuit'}
      </button>

      <p className="text-xs text-gray-500">
        Vos données servent uniquement à traiter votre demande et sont conservées
        3 ans maximum.{' '}
        <Link href="/mentions-legales" className="underline">
          En savoir plus
        </Link>
        .
      </p>
    </form>
  );
};
