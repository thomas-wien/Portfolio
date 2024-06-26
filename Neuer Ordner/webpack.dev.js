const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    proxy: {
      '/': {
        target: 'http://localhost', // Ensure your PHP server is running on localhost
        changeOrigin: true
      }
    }
  }
});
