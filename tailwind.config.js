/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    colors: {
      primary: '#34E89E',
      'primary-darkest': '#18D185',
      secondary: '#0F3443',
      'secondary-lightest': '#18546D',
      'grey-light': '#f2f2f2',
      grey: '#666666',
      dark: '#111111',
      white: '#fffff',
      black: '#000000'
    },
    fontSize: {
      48: '48px',
      38: '38px',
      24: '24px',
      18: '18px',
      15: '15px'
    }
  },
  plugins: []
}
