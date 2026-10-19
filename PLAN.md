# PLAN — GD Construction

## Objectif
Refondre tout le design du site en ultra premium, en gardant le contenu, le SEO et les pages actuelles.

## EN COURS
Phase 4 terminée sauf la PR (commit + push à valider par Sébastien). Phase 3 close : toutes les pages, photos, méthodes revérifiées. Questions ouvertes : attestations désamiantage et fluides frigorigènes (artifact validations, point 6) Unsplash par métier (quota API 50/h atteint, reprendre après réinitialisation).

## Phase 1 — Direction design
- [x] Propositions frontend-design / Magic / apple-emil présentées
- [x] Palette choisie : minérale
- [x] Source des images choisie : vraies photos
- [x] Maquettes comparatives (`app/maquettes`, noindex, à supprimer en fin de refonte)
- [x] Présentation au format Artifact (règle globale CLAUDE.md)
- [x] Choix de la direction : A + C, photo Unsplash en hero
- [x] `design/direction.md` complété
**Critère de fin** : direction validée par Sébastien et enregistrée dans `design/direction.md`.

## Phase 2 — Fondations
- [x] Créer la branche `feat/refonte-design`
- [x] Polices (next/font) et tokens finaux dans `globals.css` (+ utilitaire `display-title`)
- [x] Navbar, menu mobile en tiroir (glisser vers le bas / Échap pour fermer), footer, bandeau cookies
- [x] Boutons (`ButtonLink` : signal / line / line-light) et `Cote`
**Critère de fin** : build OK, captures Playwright 375 / 1440 validées.

## Phase 3 — Pages, section par section
- [x] Accueil (hero photo + laser, titre réduit sous 640 px)
- [x] Section « Nos métiers » : mosaïque photo (choix du 19/10)
- [x] Supprimer l'ancien `Button` par défaut une fois Hero et CTA refaits
- [x] Services (index + 9 pages métier, via agents)
- [x] Photos Unsplash : 18 photos (en-têtes + galeries), sans personne identifiable, crédits dans design/direction.md
- [x] Remplacer les photos faibles ou hors sujet (demande du 19/10) : couverture (charpente-toiture), PAC (chauffage-tuyaux = chaudière), peinture (peinture-preparation, pièce vide), électricité (electricite-ampoule, ampoules de café), rénovation intérieure (plafond-ossature)
- [x] Réalisations (couvertures « Photo d'illustration », galerie masquée tant que vide)
- [x] À propos, Contact, Mentions légales
- [x] Animations : apparition au défilement (CSS scroll-driven), zoom des photos, entrée du titre du hero
- [x] Appliquer les validations de contenu (RGE et labels retirés, décennale gardée, 24h/24 confirmé, 40 ans / 24 ans de métier)
- [x] « 150+ chantiers réalisés » : gardé (19/10)
**Critère de fin** : chaque page validée en 375 / 1440, contraste et clavier vérifiés.

## Phase 4 — Contrôle avant livraison (accord du 19/10 : enchaîner directement après les photos)
- [x] review-animations (2 corrections : zoom mosaïque 300 ms, fondu conservé en mouvement réduit) ; animation-performance : transform/opacity uniquement
- [x] Lighthouse mobile (local, mêmes conditions) : accessibilité 100 (avant 94-96), SEO 100, bonnes pratiques 96 (seule erreur : script Vercel Analytics absent en local), perf 88-96 contre 97 avant. Écart dû au hero photo (LCP image au lieu de texte) ; LCP réel mesuré 0,1 s. Gains faits : preload + fetchPriority, framer-motion retiré (tiroir en CSS).
- [x] Suppression de `app/maquettes` + composants morts (SubHero, CTA, CardPattern, GridPattern, CustomLink, DesktopNav, MobileNav, features, ancien Button, motifs bg-grid, dépendance mini-svg-data-uri)
- [ ] Supprimer les Artifacts du projet (liste dans À NE PAS OUBLIER), après accord de Sébastien
**Critère de fin** : build et lint OK, scores vérifiés, PR prête.

## Phase 5 — Hébergement : modèle ABC Guêpes
- [ ] DNS de gdconstruction.net déplacé chez Cloudflare (actuellement Dyna-NS) avec proxy devant Vercel
- [ ] Désactiver l'obfuscation d'e-mail Cloudflare (404 `/cdn-cgi/l/email-protection`)
- [ ] robots.txt ouvert aux crawlers IA
**Critère de fin** : site servi via Cloudflare, aucun 404 nouveau, Search Console OK.

## INTERCALÉ
- [x] Serveur de dev sur le port 3005 (3000 pris par un autre projet)
- [x] Règle globale étendue : toutes les questions et validations en Artifact (exemples du 19/10)
- [x] Règle globale : présenter les choix en Artifact (format des modèles) et supprimer les Artifacts en fin de projet

## À NE PAS OUBLIER
- Fichiers d'origine non utilisés, laissés en place : public/banner.png, public/images/landing.png, public/images/testimonials/*.png (avatars des faux avis). À supprimer après vérification qu'aucun lien externe ne les vise.
- Serveur de dev : port 3005 uniquement. Le port 3000 = autre projet (SBinnovate), ne jamais y toucher.
- Artifacts créés pour le projet (à supprimer en fin de projet) : https://claude.ai/artifact/WfPRA694VTAqfpKiWXGV4T, https://claude.ai/artifact/SZCPiwmLM6Cty6vbwRBHWH, https://claude.ai/artifact/YPQxsT22axhui7jBpAyr51
- Réalisations = vrais chantiers (confirmé 19/10), photos toujours attendues de Grégory.
- Photo du hero = Unsplash (ambiance) ; la remplacer par une vraie photo de chantier dès que possible.
- Demander à Grégory des photos de chantiers, dont des paires avant/après : c'est le facteur n°1 du rendu premium (et ça débloque la fiche Google Business).
- La branche actuelle `feat/formulaire-contact` a un commit non mergé ; faire la refonte sur une nouvelle branche.
- CLAUDE.md : section « Outils IA » ajoutée, pas encore commitée.

## Journal
- 2026-10-19 : lancement de la refonte, maquettes A/B/C.
- 2026-10-19 : photos Unsplash sans personne identifiable ; méthodes remises dans l'ordre (peinture : protéger puis préparer, etc.) ; phase 4 (animations, nettoyage, Lighthouse).
- 2026-10-19 : direction A + C + photo Unsplash en hero ; phase 2 faite. Lien « À propos » corrigé (/#about → /a-propos). « Devis sous 48 h » retiré des cotes (promesse absente du site).
