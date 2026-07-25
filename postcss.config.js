module.exports = {
  plugins: {
    // Tailwind 4 : le plugin PostCSS est un paquet dedie, et le prefixage
    // vendeur est gere en interne (Lightning CSS), d'ou la disparition
    // d'autoprefixer.
    "@tailwindcss/postcss": {},
  },
}
