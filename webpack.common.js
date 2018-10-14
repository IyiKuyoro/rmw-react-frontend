const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const cleanDist = new CleanWebpackPlugin(['dist']);
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/static/index.html',
  filename: './index.html',
  inject: 'body',
});
const copyFiles = new CopyWebpackPlugin([
  { from: './src/static/favicon.ico' },
]);

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '/',
  },
  resolve: { extensions: ['.js', '.jsx', 'css'] },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    cleanDist,
    htmlPlugin,
    copyFiles,
  ],
};
