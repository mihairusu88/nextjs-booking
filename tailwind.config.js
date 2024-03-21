/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c026d3',
        secondary: '#0000ff',
        accent: '#007700',
        neutral: '#1a0a0f',
        'base-100': '#26262b',
        info: '#00e0ff',
        success: '#00ffbc',
        warning: '#b44600',
        error: '#ff5175',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#c026d3',
          secondary: '#0000ff',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#c026d3',
          secondary: '#0000ff',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
