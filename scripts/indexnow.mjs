// Notifie IndexNow (Bing, Copilot, Yandex, Seznam, Naver — pas Google) des URLs
// du site. À lancer *après* un déploiement : on soumet ce que le sitemap en
// ligne annonce, donc pinguer avant que Vercel n'ait publié enverrait les
// moteurs sur l'ancienne liste.
//
//   npm run indexnow            toutes les URLs du sitemap
//   npm run indexnow -- <url>…  seulement celles-ci
//
// La clé est publique par conception : le protocole vérifie la propriété du
// domaine en récupérant https://<host>/<clé>.txt, qui doit contenir la clé.
// Elle vit donc dans `public/`, et les deux doivent rester identiques.

const KEY = '2c00ba9547df35bf030bb1a3eca02b0d';
const HOST = 'www.gdconstruction.net';
const ORIGIN = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

async function urlsFromSitemap() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`);
  if (!res.ok) {
    throw new Error(`sitemap.xml a répondu ${res.status}`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (urls.length === 0) {
    throw new Error('aucune <loc> trouvée dans le sitemap');
  }
  return urls;
}

async function main() {
  const explicit = process.argv.slice(2);
  const urlList = explicit.length > 0 ? explicit : await urlsFromSitemap();

  const foreign = urlList.filter((u) => !u.startsWith(`${ORIGIN}/`) && u !== ORIGIN);
  if (foreign.length > 0) {
    throw new Error(`URLs hors du domaine ${HOST} : ${foreign.join(', ')}`);
  }

  // La clé doit être servie en ligne, sinon IndexNow rejette la soumission.
  const keyRes = await fetch(`${ORIGIN}/${KEY}.txt`);
  const keyBody = keyRes.ok ? (await keyRes.text()).trim() : null;
  if (keyBody !== KEY) {
    throw new Error(
      `${ORIGIN}/${KEY}.txt doit renvoyer la clé (reçu : ${keyRes.status}` +
        `${keyBody === null ? '' : `, corps « ${keyBody} »`}). Déploie d'abord.`
    );
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${ORIGIN}/${KEY}.txt`,
      urlList,
    }),
  });

  // 200 = accepté, 202 = accepté mais clé pas encore revalidée : les deux sont
  // des succès côté protocole.
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`IndexNow a répondu ${res.status} : ${await res.text()}`);
  }

  console.log(`${urlList.length} URL(s) soumises à IndexNow (HTTP ${res.status})`);
  for (const url of urlList) {
    console.log(`  ${url}`);
  }
}

main().catch((err) => {
  console.error(`Échec IndexNow : ${err.message}`);
  process.exitCode = 1;
});
