/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2A47',
          mid: '#1a3a5c',
          deep: '#081a2e',
        },
        teal: {
          DEFAULT: '#0D7C66',
          soft: '#e8f5f2',
          mid: '#b2ddd6',
        },
        accent: {
          DEFAULT: '#1B9C7E',
          ink: '#0a4d3a',
        },
        amber: {
          DEFAULT: '#b45309',
          soft: '#fef3c7',
        },
        ink: {
          DEFAULT: '#111827',
          muted: '#4b5563',
          faint: '#9ca3af',
        },
        paper: {
          DEFAULT: '#fbfaf6',
          tint: '#f4f1e9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
