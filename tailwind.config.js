/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "on-primary": "#ffffff",
              "on-tertiary-fixed-variant": "#30476a",
              "primary": "#00346f",
              "on-tertiary-container": "#a7bee7",
              "on-error": "#ffffff",
              "on-surface-variant": "#424751",
              "outline": "#737783",
              "background": "#f8f9fa",
              "error-container": "#ffdad6",
              "on-secondary-fixed-variant": "#6b3b00",
              "on-surface": "#191c1d",
              "secondary-fixed": "#ffdcc0",
              "tertiary-container": "#364d70",
              "surface-tint": "#255dad",
              "tertiary": "#1e3658",
              "surface-bright": "#f8f9fa",
              "surface": "#f8f9fa",
              "secondary": "#e69138",
              "on-tertiary": "#ffffff",
              "surface-variant": "#e1e3e4",
              "inverse-surface": "#2e3132",
              "surface-dim": "#d9dadb",
              "secondary-fixed-dim": "#ffb875",
              "secondary-container": "#fea54a",
              "primary-fixed-dim": "#abc7ff",
              "inverse-primary": "#abc7ff",
              "on-primary-container": "#9bbdff",
              "surface-container-high": "#e7e8e9",
              "on-error-container": "#93000a",
              "on-secondary-fixed": "#2d1600",
              "surface-container-low": "#f3f4f5",
              "outline-variant": "#c2c6d3",
              "surface-container": "#edeeef",
              "tertiary-fixed": "#d5e3ff",
              "primary-container": "#004a99",
              "surface-container-highest": "#e1e3e4",
              "on-tertiary-fixed": "#001b3c",
              "on-background": "#191c1d",
              "on-primary-fixed-variant": "#00458f",
              "tertiary-fixed-dim": "#b0c7f1",
              "on-secondary-container": "#6e3d00",
              "error": "#ba1a1a",
              "primary-fixed": "#d7e2ff",
              "on-primary-fixed": "#001b3f",
              "surface-container-lowest": "#ffffff",
              "on-secondary": "#ffffff",
              "inverse-on-surface": "#f0f1f2"
          },
          "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
          },
          "fontFamily": {
              "headline": ["Manrope", "sans-serif"],
              "body": ["Inter", "sans-serif"],
              "label": ["Inter", "sans-serif"]
          }
      },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
