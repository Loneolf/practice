const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
	entry: {
		app: "./src/app.js",
		polyfill: "./src/polyfills.js",
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		clean: true,
		filename: "[name]_bounder.js",
	},
	devtool: "cheap-module-source-map",
	mode: "development", // development / production
	plugins: [
		new HTMLWebpackPlugin({
			filename: "index.html",
			inject: "body",
		}),
		new webpack.ProvidePlugin({
			// 不用引入就可以全局使用_ 从而使用lodash的方法
			_: "lodash",
			// 全局使用lodash的join方法
			join: ["lodash", "join"],
		}),
	],
	module: {
		rules: [
			{
				// 将this 指向window
				test: require.resolve("./src/app.js"), // Node.js 函数, 文件的绝对路径
				// use: ["imports-loader?wrapper=window"],
				// test: /\.js$/,
				use: [{
					loader: 'imports-loader',
					options: {
						type: 'commonjs', // module|commonjs
						wrapper: 'window'
					},
				}]
			},
			{
				// global.js未导出方法，可以使用改配置导出globals中的方法，可以用于一些第三方未导出的依赖包
				test: require.resolve("./src/globals.js"),
				// 使用字符串到处global.js 中的file变量，helper对象的parse方法
				// use: "exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse",
				// 使用对象方式配置导出变量与方法
				use: [{
					loader: 'exports-loader',
					options: {
						type: 'commonjs', // module|commonjs
						exports: [
							'file', 
							'multiple helpers.parse parse',
						]
					},
				}]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							[
								"@babel/preset-env",
								{
									targets: ["last 1 version", "> 1%"],
									useBuiltIns: "usage",
									corejs: 3,
								},
							],
						],
					},
				},
			},
		],
	},
	devServer: {
		client: {
			overlay: false,
		},
		static: path.resolve(__dirname, "./dist"),
		compress: true,
		// 自定义端口号
		port: 3000,
	},
};
