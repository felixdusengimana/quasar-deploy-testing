/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg-image': "url('src/assets/img/auth-bg.png')"
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
}
