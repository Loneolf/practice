const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    clean: true,
    filename: '[name]_bounder.js',
  },
  // devtool: 'cheap-module-source-map',
  mode: 'development', // development / production
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      inject: 'body', 
    }),
    new MiniCssExtractPlugin({ 
      filename: 'index.css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
};
