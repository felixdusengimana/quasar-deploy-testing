/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'primary-bg-color': '#1e136b',
        'brand-pink-color': '#f31fc5',
        'primary-dark-color': '#06083f',
        'primary-light-color': '#1d136a'
      },
      backgroundImage: {
        'auth-bg-image': "url('src/assets/img/auth-bg.png')"
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
}
