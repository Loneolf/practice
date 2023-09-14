const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

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
      template: './index.html',
      filename: 'index.html', // 生成的文件名称
      inject: 'body', // script标签放在哪个标签里面，默认放在head标签中
    }),
    new BundleAnalyzerPlugin(),
  ],
  resolve: {
    // 路径别名，@代表'./src'，引入'./src/util/math',可以简化为'@/util/math'
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    // 同名文件，配置加载顺序
    extensions: [".json", ".js"],
  },
  externalsType: "script",
  externals: {
    // lodash: "_"
    lodash: [
      'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js',
      '_'
    ]
  },
  devServer: {
    client: {
      overlay: false,
    },
    static: path.resolve(__dirname, './dist'),
    compress: true,
    // 自定义端口号
    port: 3000,
  },
  module: {
    rules: [
      // {
      //   test: /\.json$/,
      //   type: "json",
      //   parser: {
      //     parse: json.parse,
      //   },
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules中的库
        use: {
          loader: 'babel-loader', // 加载loader
          options: {
            presets: ['@babel/preset-env'], // 配置预设
            plugins: [['@babel/plugin-transform-runtime']],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
