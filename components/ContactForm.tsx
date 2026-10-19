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
      <div role="status" className="border-l-4 border-signal bg-chaux p-6">
        <h3 className="display-title text-2xl text-ardoise">
          Votre demande est partie
        </h3>
        <p className="mt-3 mb-4 text-ardoise/80">
          Nous vous rappelons sous 48 heures ouvrées. Pour une urgence, appelez
          directement le 06 95 91 81 03.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="font-semibold text-ardoise underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  const field =
    'w-full rounded-xl border border-ardoise/20 bg-white px-4 py-3 text-ardoise placeholder:text-ardoise/45 ' +
    'focus:border-ardoise focus:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ardoise';
  const label = 'mb-2 block text-sm font-semibold text-ardoise';

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Piège à robots : un humain ne remplit pas un champ masqué. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      <div>
        <label className={label} htmlFor="nom">Nom <span aria-hidden className="text-ardoise/60">*</span></label>
        <input className={field} id="nom" name="nom" type="text" required autoComplete="name" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label} htmlFor="email">E-mail <span aria-hidden className="text-ardoise/60">*</span></label>
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
        <label className={label} htmlFor="projet">Votre projet <span aria-hidden className="text-ardoise/60">*</span></label>
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
        <p role="alert" className="rounded-xl border border-red-700/30 bg-red-50 px-4 py-3 text-sm text-red-800">
          L&apos;envoi a échoué. Réessayez, ou appelez le 06 95 91 81 03.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex w-full items-center justify-center rounded-full bg-signal px-7 py-4 font-semibold text-ardoise transition-[transform,filter] duration-150 hover:brightness-105 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ardoise disabled:opacity-60 motion-reduce:transition-none"
      >
        {status === 'sending' ? 'Envoi…' : 'Demander un devis gratuit'}
      </button>

      <p className="text-xs text-ardoise/70">
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
