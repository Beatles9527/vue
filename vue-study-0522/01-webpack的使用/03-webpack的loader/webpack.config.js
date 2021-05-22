const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/bundle.js'),
    filename: 'main.js',
  },
}