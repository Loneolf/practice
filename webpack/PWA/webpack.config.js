const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require("workbox-webpack-plugin");

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
  mode: 'development', // development / production
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      inject: 'body', 
    }),
    new WorkboxPlugin.GenerateSW({
      // 快速启动 ServiceWorkers
      clientsClaim: true,
      // 不允许遗留旧的ServiceWorkers
      skipWaiting: true,
    }),
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
    port: 3000,
  },
};
