/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'liga': {
          primary: '#0F172A',    // Slate 900
          secondary: '#1E293B',  // Slate 800
          accent: '#38BDF8',     // Sky 400
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
}