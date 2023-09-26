const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    // 使用对象的方式定义入口，而不是'./src/index.js'这样的字符串，可配置更多内容
    main: {
      // 将多个文件打包合成一个文件
      import: ['./src/app1.js', './src/common.js'],
      // 声明依赖
      dependOn: 'lodash',
      // 输出到page1文件夹下
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
      template: './index.html', // html模板
      // title: 页面的title，在html模板中可以使用 <title><%= htmlWebpackPlugin.options.title %></title> ejs语法可以接收到title的值
      title: '页面1', 
      inject: 'body', // 生成的JS标签注入到body标签里
      // 注入chunk main和lodash这两个, entry入口的key值
      chunks: [ 'main', 'lodash' ],
      // 生成的文件为index.html, 在page1文件夹下
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
    // chunk输出文件夹
    path: path.resolve(__dirname, './dist'),
    clean: true,
    // chuank输出文件名，在入口配置fileName后该配置就不生效了
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
