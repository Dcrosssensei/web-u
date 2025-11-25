/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors based on the design
        primary: '#5b4dff', // Purple-ish blue from buttons
        secondary: '#a3a3a3', // Grey for inactive items
        dark: '#1a1a1a', // Background dark
        card: '#2a2a2a', // Card background
      }
    },
  },
  plugins: [],
}
