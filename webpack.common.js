const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cleanDist = new CleanWebpackPlugin(['dist']);

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/static/index.html',
  filename: './index.html',
});

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  resolve: { extensions: ['.js', '.jsx'] },
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
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
