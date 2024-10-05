/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'break1': '1194px',
        'break2': '1384px',
        'break3': '960px',
        'break4': '696px',
        'break5': '407px',
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

