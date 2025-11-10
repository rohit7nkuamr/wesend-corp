import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Clean, minimal food-inspired colors
        primary: {
          DEFAULT: '#1F2937', // Dark gray (professional, clean)
          light: '#374151',
          dark: '#111827',
        },
        secondary: {
          DEFAULT: '#10B981', // Fresh green (vegetables, freshness)
          light: '#34D399',
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#F59E0B', // Warm amber (appetizing)
          hover: '#D97706',
          light: '#FCD34D',
        },
        // Subtle food-inspired accent colors
        food: {
          pulse: '#FEF3C7', // Very light amber (pulses background)
          veggie: '#D1FAE5', // Very light green (vegetables background)
          frozen: '#DBEAFE', // Very light blue (frozen background)
          samosa: '#FED7AA', // Very light orange (samosas background)
        },
        neutral: {
          50: '#F9F9F9',
          100: '#EAEAEA',
          200: '#D5D5D5',
          300: '#B0B0B0',
          400: '#8B8B8B',
          500: '#666666',
          600: '#4D4D4D',
          700: '#333333',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
