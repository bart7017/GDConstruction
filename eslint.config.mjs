import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

// Flat config : requis par ESLint 9, et `next lint` n'existe plus depuis Next 16.
// Le script npm appelle donc directement `eslint`.
const config = [
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**", "next-env.d.ts"],
  },
  ...coreWebVitals,
  ...typescript,
  {
    rules: {
      // Tout le contenu du site est en francais : les apostrophes dans le texte
      // JSX sont legitimes et cette regle ne produirait que du bruit.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default config;
