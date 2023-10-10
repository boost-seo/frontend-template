import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        xl: '0',
      },
    },
    screens: {
      xsm: '375px',
      lsm: '425px',
      '3xl': '2000px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        dark: '#030014', // from template

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      fontFamily: {
        default: ['var(--font-default)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'heading-1': ['60px', '72px'],
        'heading-2': ['48px', '58px'],
        'heading-3': ['40px', '48px'],
        'heading-4': ['30px', '38px'],
        'heading-5': ['28px', '40px'],
        'heading-6': ['24px', '30px'],
        'custom-1': ['45px', '55px'],
      },
      maxWidth: {
        30: '7.5rem',
        40: '10rem',
        50: '12.5rem',
      },

      variants: {
        extend: {
          backdropFilter: ['responsive'], // apply this line if you want to apply backdrop-filter responsively
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
} satisfies Config;
