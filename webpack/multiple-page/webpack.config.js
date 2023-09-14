const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: {
      // 将多个文件打包合成一个文件
      import: ['./src/app1.js', './src/common.js'],
      dependOn: 'lodash',
      filename: 'page1/[name].js'
    },
    main2: {
      import: ['./src/app2.js', './src/common.js'],
      dependOn: 'lodash',
      filename: 'page2/[name].js'
    },
    // 第三方库依赖
    lodash: {
      import: 'lodash',
      filename: 'common/[name].js'
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      title: '页面1',
      inject: 'body',
      chunks: [ 'main', 'lodash' ],
      filename: 'page1/index.html'
    }),
    new HTMLWebpackPlugin({
      template: './index.html',
      title: '页面2',
      inject: 'body',
      chunks: [ 'main2', 'lodash'],
      filename: 'page2/index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    clean: true,
    filename: '[name]_bounder.js',
  },
  devtool: 'cheap-module-source-map',
  mode: 'development', // development / production
  devServer: {
    client: {
      overlay: false,
    },
    static: path.resolve(__dirname, './dist'),
    compress: true,
    // 自定义端口号
    port: 3000,
  },
};
