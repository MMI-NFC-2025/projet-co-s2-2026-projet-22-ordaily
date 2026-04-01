// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nebula-blue-1': 'var(--color-nebula-blue-1)',
        'nebula-blue-2': 'var(--color-nebula-blue-2)',
        'ember-orange-1': 'var(--color-ember-orange-1)',
        'ember-orange-2': 'var(--color-ember-orange-2)',
        'void-black': 'var(--color-void-black)',
        'pure-white': 'var(--color-pure-white)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(90deg, var(--color-nebula-blue-1), var(--color-nebula-blue-2))',
        'gradient-orange': 'linear-gradient(90deg, var(--color-ember-orange-1), var(--color-ember-orange-2))',
      },
      fontFamily: {
        manrope: ['Manrope', 'cursive'],
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'cursive'],
      },
    },
  },
  plugins: [],
}