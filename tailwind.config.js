/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'break1': '658px',
        'break2': '888px',
        'break3': '1144px',
        'break4': '1378px',
      },
      spacing: {
        "29": "29%",
        "60": "60%",
      },
      colors: {
        login_background_1: "#ffffff",
        login_background_2: "#f7f7f7",
        login_background_3: "#dfe3ee",
        login_background_4: "#8b9dc3",
        login_background_5: "#3b5998",
      }
    },
  },
  plugins: [],
}

