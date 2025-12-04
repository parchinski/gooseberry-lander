/** @type {import("prettier").Config} */
export default {
  trailingComma: "all",
  printWidth: 100,

  // Astro support
  plugins: ["prettier-plugin-astro"],

  // Ensure Astro files use the Astro parser
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
  ],
};
