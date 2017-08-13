const path = require('path');

module.exports = {
  entry: './src/inde1x.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
