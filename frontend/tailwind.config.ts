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
        primary: {
          DEFAULT: '#FF6B35', // Vibrant coral orange (appetizing, energetic)
          light: '#FF8C61',
          dark: '#E85A2A',
        },
        secondary: {
          DEFAULT: '#4ECDC4', // Fresh turquoise (clean, fresh)
          light: '#7ED9D2',
          dark: '#3DB8AF',
        },
        accent: {
          DEFAULT: '#FFE66D', // Warm yellow (cheerful, inviting)
          hover: '#FFD93D',
          light: '#FFF4A3',
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
