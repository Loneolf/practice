const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    clean: true,
    filename: '[name]_bounder.js',
  },
  devtool: 'cheap-module-source-map',
  mode: 'production', // development / production
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      title: 'homeApp' 
    }),
    new ModuleFederationPlugin({
      name: 'home',
      filename: 'remoteHome.js',
      exposes: {
        './List': './src/List.js'
      },
      remotes: {
        nav: 'nav@http://localhost:3003/remoteNav.js'
      },
      shared: {},
    })
  ],
  devServer: {
    // 改动不仅在内存，也写到硬盘上
    devMiddleware: {
      writeToDisk: true,
    },
    client: {
      overlay: false,
    },
    static: path.resolve(__dirname, './dist'),
    compress: true,
    // 自定义端口号
    port: 3002,
  },
};
