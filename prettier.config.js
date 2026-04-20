// prettier.config.js
module.exports = {
  // Configuración de formato (ajusta a tu gusto)
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 80,

  // EL PLUGIN CLAVE:
  // Este plugin ordena automáticamente las clases de Tailwind
  plugins: ["prettier-plugin-tailwindcss"],

  // OPCIONAL: Si usas clases de Tailwind en variables de JS/TS
  // o dentro de otros atributos (ej. "classnames"), actívalo:
  // tailwindAttributes: ['className', 'class'],
  // tailwindFunctions: ['clsx', 'twMerge', 'twJoin'],
};
