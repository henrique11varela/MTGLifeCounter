/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
      success: '#28a745',
      danger: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8',
      light: '#f8f9fa',
      dark: '#343a40',
      "primary-emphasis": '#6ea8fe',
      "secondary-emphasis": '#a7acb1',
      "success-emphasis": '#75b798',
      "danger-emphasis": '#ea868f',
      "warning-emphasis": '#ffda6a',
      "info-emphasis": '#6edff6',
      "dark-emphasis": '#dee2e6',
    },
  },
  darkMode: 'class',
  plugins: []
}

