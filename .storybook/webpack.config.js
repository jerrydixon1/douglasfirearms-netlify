const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@base': path.resolve(__dirname, '../src/components/base'),
      '@img': path.resolve(__dirname, '../src/img'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@templates': path.resolve(__dirname, '../src/templates'),
    },
    extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif', '.jpeg'],
  }
};