/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        1: '.2rem',
        2: '.4rem',
        3: '.6rem;',
        4: '.8rem',
        5: '1rem',
        6: '1.2rem',
        7: '1.4rem',
        8: '1.6rem',
        9: '1.8rem',
        10: '2rem',
        11: '2.2rem',
        12: '2.4rem',
        13: '2.6rem',
        14: '2.8rem',
        15: '3rem',
        16: '3.2rem',
        17: '3.4rem',
        18: '3.6rem',
        19: '3.8rem',
        20: '4rem',
        21: '4.2rem',
        22: '4.4rem',
        23: '4.6rem',
        24: '4.8rem',
        25: '5rem',
        26: '5.2rem',
        27: '5.4rem',
        28: '5.6rem',
        29: '5.8rem',
        30: '6rem',
        31: '6.2rem',
        32: '6.4rem',
        33: '6.6rem',
        34: '6.8rem',
        35: '7rem',
        36: '7.2rem',
        37: '7.4rem',
        38: '7.6rem',
        39: '7.8rem',
        40: '8rem',
        41: '8.2rem',
        42: '8.4rem',
        43: '8.6rem',
        44: '8.8rem',
        45: '9rem',
        46: '9.2rem',
        47: '9.4rem',
        48: '9.6rem',
        49: '9.8rem',
        50: '10rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwind-scrollbar'), require('flowbite/plugin')]
}
