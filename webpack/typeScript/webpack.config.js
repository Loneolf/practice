const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/app.ts",
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
	],
	devServer: {
		client: {
			overlay: false,
		},
		static: path.resolve(__dirname, "./dist"),
		compress: true,
		// 自定义端口号
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		// 自定义解析顺序，优先解析ts
		extensions: [".ts", ".js"],
	},
};
