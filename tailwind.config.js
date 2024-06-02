/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ensure the prefix includes the hyphen
  prefix: 'tw-',  // Corrected to include the hyphen

  // Tailwind css utilities are rendered on demand, meaning only used classes generated at build time, reducing risk of overriding global styles
  mode: 'jit',

  // Tailwind css applies to all files under ./src
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // All JS/JSX/TS/TSX files under src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
