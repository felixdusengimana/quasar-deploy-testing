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
      },
      boxShadow: {
        'form': '0px 0px 1.67244px rgba(0, 0, 0, 0.12), 0px 16.7244px 16.7244px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
    },
  },
  plugins: [],
  prefix: 'tw-'
}
