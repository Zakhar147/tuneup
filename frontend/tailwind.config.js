/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        30: "30px",
      },
      rotate: {
        56: '56deg',
        '-56': '-56deg',
        73: '73deg',
        '-73': '-73deg',
        68: '68deg',
        '-68': '-68deg'
      },
      opacity: {
        8: '0.08', // 8%
        56: '0.56',
        80: '0.8'
      },
      blur: {
        2: '2px',
      },
      colors: {
        accent: "#E95420",
        hoverBg: "rgba(249, 115, 22, 0.1)",
        light: {
          bgColor: "#F9F6F3",
          container: "#FFFFFF",
          textMain: "#000000",
          textSecond: "#555555",
          formBg: "#FFFFFF",
          chrodsBg: "#F5C4AE",
          inputBorder: "#CCCCCC",
        },
        dark: {
          bgColor: "#0D0D0D",
          container: "#111111",
          textMain: "#FFFFFF",
          textSecond: "#AAAAAA",
          formBg: "#111111",
          chrodsBg: "#2D0202",
          inputBorder: "#3D3D3D",
        }
      },
      screens: {
        'max-md': { 'raw': '(max-width: 768px)' },
        'max-sm': { "raw": '(max-width: 576px)' },
      }
    },
  },
  plugins: [],
}

