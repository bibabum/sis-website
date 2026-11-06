// Every colour is a CSS variable defined in app/globals.css (:root).
// Components use only these tokens -- no raw hex values.
/** @param {string} name */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand navy -- primary colour: headings, dark sections, footer.
        navy: {
          DEFAULT: token('navy'),
          deep: token('navy-deep'),
          ink: token('navy-ink'),
        },
        // Muted brass -- accent only (lines, big numbers, eyebrows, link underlines).
        brass: {
          DEFAULT: token('brass'),
          deep: token('brass-deep'),
          light: token('brass-light'),
        },
        ivory: {
          DEFAULT: token('ivory'),
          deep: token('ivory-deep'),
        },
        ink: token('ink'),
        muted: token('muted'),
        'on-navy': token('on-navy'),
        'on-navy-muted': token('on-navy-muted'),
        line: token('line'),
        'line-navy': token('line-navy'),
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.8125rem', { lineHeight: '1.2rem', letterSpacing: '0.08em' }],
        body: ['1.0625rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      maxWidth: {
        content: '76rem',
        prose: '40rem',
      },
    },
  },
  plugins: [],
};
