/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Mindset', 'helvetica', 'arial', 'sans-serif'],
        body: ['Franklin Gothic Book', 'helvetica', 'arial', 'sans-serif'],
        button: ['Franklin Gothic Md', 'helvetica', 'arial', 'sans-serif'],
        secondary: ['Colby', 'helvetica', 'arial', 'sans-serif']
      },
      colors: {
        primary: 'var(--color-primary)',
        bg: 'var(--color-bg)',
        'sky-blue': 'var(--color-sky-blue)',
        'gradient-white': 'rgba(var(--color-white) 0%)'
      },
      transitionTimingFunction: {
        announcement: 'cubic-bezier(0.46, 0.01, 0.32, 1)'
      },
      gap: {
        15: '1.5rem'
      },
      animation: {
        marquee: 'slide 100s infinite linear'
      },
      backgroundImage: {
        'marquee-gradient-left':
          'linear-gradient(to left, rgba(255, 255, 255, 0) 0%, var(--color-primary) 100%)',
        'marquee-gradient-right':
          'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, var(--color-primary) 100%)'
      },
      screens: {
        xs: '374px',
        // => @media (max-width: 374px) ** USE FOR EXTRA SMALL SCREENS { ... }
        sm: '600px',
        // => @media (min-width: 600px) { ... }

        md: '750px',
        // => @media (min-width: 750px) { ... }

        lg: '1025px',
        // => @media (min-width: 1025px) { ... }

        xl: '1376px'
        // => @media (min-width: 1376px) { ... }
      },
      fontSize: {
        1: ['1.9rem', '1'],
        2: ['2.4rem', '2.8rem'],
        3: ['3.6rem', '1'],
        4: ['4.8rem', '1'],
        6: ['6rem', '1'],
        8: ['8rem', '1'],
        9: ['9rem', '8rem'],
        11: ['11rem', '1'],
        13: ['13rem', '1']
      }
    }
  },
  plugins: []
}
