# Direction design — refonte 2026

Niveau visé : **ultra premium** (demande du 2026-10-19).

## Décisions prises
- **Palette minérale** (2026-10-19) : tokens `--color-ardoise`, `--color-chaux`, `--color-gres`, `--color-signal` dans `styles/globals.css`.
  - `signal` (jaune chantier) réservé aux boutons d'action et au trait laser.
  - `gres` décoratif uniquement (contraste insuffisant pour du texte sur `chaux`).
- **Images** : vraies photos de chantier fournies par GD Construction. Jamais d'images IA présentées comme des réalisations. En attendant, images de métier existantes de `public/images`.

- **Direction : A + C, avec la photo de B en hero** (2026-10-19). Présentation : https://claude.ai/artifact/WfPRA694VTAqfpKiWXGV4T ; rendu de référence : section « Choix retenu » de `/maquettes`.
  - A : titres en Archivo élargie (`wdth` 125, graisse 800), texte en Inter ; trait laser `signal` qui balaie une fois sous le titre au chargement ; cotes d'architecte qui portent de vraies infos (50 km, 9 métiers, devis gratuit ; jamais de promesse absente du site).
  - B : hero photo plein écran, dégradé `ardoise` vers transparent, boutons en bas à droite.
  - C : ~~liste des métiers avec photo qui suit la souris~~ remplacée le 19/10 par la **mosaïque photo** (`components/ServicesMosaic.tsx`, maçonnerie en grande case ; 3 cases pour « Nos autres services ») ; avant/après au clavier (`input type=range`) dès que de vraies paires de photos existent ; boutons qui s'enfoncent à l'appui (scale 0.97) ; menu mobile en tiroir par le bas ; `prefers-reduced-motion` respecté.
- **Photo du hero** : Unsplash `i6V6diaf71A` par Solømen (https://unsplash.com/@solomen), licence Unsplash (usage commercial OK, crédit non obligatoire), fichier `public/images/hero-maconnerie-parpaings.webp`. Photo d'ambiance : jamais présentée comme une réalisation de GD Construction. À remplacer par une vraie photo de chantier dès qu'il y en a une.

## Photos
- Règles (19/10) : **aucune personne identifiable** (mains, dos ou silhouettes lointaines seulement) ; photos de banque toujours présentées comme illustrations, jamais comme des chantiers de GD Construction ; galerie des réalisations réservée aux vraies photos de Grégory.
- Les 15 images d'origine (`public/images/*.webp` hors liste ci-dessous) : provenance et licence inconnues (historique du dépôt muet). Les remplacer par des Unsplash au fil de l'eau.
- Photos Unsplash (licence Unsplash : usage commercial, crédit non obligatoire), téléchargements déclarés via l'API :

| Fichier | Photographe | Source |
|---|---|---|
| `hero-maconnerie-parpaings.webp` | Solømen | https://unsplash.com/photos/i6V6diaf71A |
| `couverture-tuiles.webp` | David Cashbaugh | https://unsplash.com/photos/QxFmvKlsxas |
| `couverture-velux.webp` | John Kinnander | https://unsplash.com/photos/Xax5c84vb0U |
| `pac-jardin.webp` | alpha innotec | https://unsplash.com/photos/4VCm8l6wLQY |
| `pac-facade.webp` | alpha innotec | https://unsplash.com/photos/TDtycnfiDa8 |
| `pac-unite.webp` | Sergio Martins | https://unsplash.com/photos/ocFQ9L4w0Tk |
| `peinture-rouleau.webp` | Theme Photos | https://unsplash.com/photos/Cl-OpYWFFm0 |
| `peinture-mur-blanc.webp` | Andrew Itaga | https://unsplash.com/photos/rMVjOX8nm2U |
| `peinture-peintre.webp` | Ali Mkumbwa | https://unsplash.com/photos/1iho4gvI4-g |
| `electricite-prise.webp` | Michael Kahn | https://unsplash.com/photos/39Npb2siceI |
| `electricite-prise-brique.webp` | David Cruz Naira | https://unsplash.com/photos/Gcy-oxihUPQ |
| `renovation-cuisine-chantier.webp` | immo RENOVATION | https://unsplash.com/photos/UqNEbyRQ660 |
| `renovation-salle-de-bain-douche.webp` | Alex Tyson | https://unsplash.com/photos/V-lDT7pTtz4 |
| `renovation-salle-de-bain.webp` | Alex Tyson | https://unsplash.com/photos/HoLDkpTD4LU |
| `facade-echafaudage-maison.webp` | Gennifer Miller | https://unsplash.com/photos/Mb_r0CIDFh8 |
| `facade-echafaudage-brique.webp` | Artists Eyes | https://unsplash.com/photos/wrE2MS2VR9I |
| `carrelage-mortier.webp` | Wesley Pacífico | https://unsplash.com/photos/fkGbIVNIBzQ |
| `couverture-maisons.webp` | Jack Barton | https://unsplash.com/photos/DXWoUTH3swA |
| `carrelage-joints.webp` | Raymond Petrik | https://unsplash.com/photos/_sCavvK5Gbg |

## Options écartées
- Scroll Gallery (Magic) : bloque le défilement, mauvais sur mobile.
- Rotation 3D du logo au défilement (hero actuel) : fatigue, aucun sens.
- Liste des métiers avec photo qui suit la souris : n'a pas plu (19/10).
- Panneaux qui s'ouvrent et défilement horizontal pour les métiers : écartés au profit de la mosaïque (19/10).

- **Titre du hero** : « Maçonnerie et rénovation, du gros œuvre aux finitions » (validé le 19/10).
- **Animations** (19/10, demande « par ci par là ») : apparition au défilement en CSS natif (`reveal`, `reveal-zoom`), entrée du titre du hero (`hero-in`) + laser. Composite seulement (opacity, transform), rien avec `prefers-reduced-motion`.
- **Contenus** (19/10) : pas de certification ni label non prouvé (seule la décennale) ; 24h/24, 7j/7 et devis sous 48 h confirmés ; Grégory 40 ans, 24 ans de métier, patron depuis 2014.
