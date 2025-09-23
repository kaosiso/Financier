/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-25': '#f2f2f2', // Define your custom color here
        'chart': '0 4px 6px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        'ibm-plex-serif': ['"IBM Plex Serif"', 'serif'],
      }, backgroundImage: {
        'bank-gradient': 'linear-gradient(to right, #60a5fa, #2563eb)',
        // blue → purple, adjust to your taste
      },
      boxShadow: {
        creditCard: '0 4px 20px rgba(0, 0, 0, 0.15)',
        // soft shadow, tweak values as needed
      },

    },
  },
  plugins: [],
}

