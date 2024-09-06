/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include React component files
    './pages/**/*.{js,jsx,ts,tsx}', // Include Next.js pages
    './components/**/*.{js,jsx,ts,tsx}', // Include components directory if any
    './app/**/*.{js,jsx,ts,tsx}', // If you're using the `app` directory in Next.js
    './public/**/*.html', // Include any HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
