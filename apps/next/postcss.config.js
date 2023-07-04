const join = require('path').join
module.exports = {
  plugins: {
    tailwindcss: {
      'config': join(__dirname, 'tailwind.config.js')
    },
    autoprefixer: {},
  },
}
