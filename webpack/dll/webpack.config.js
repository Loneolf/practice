const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/app.js",
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
		new webpack.DllReferencePlugin({
			manifest: path.resolve(__dirname, "./dll/manifest.json"),
		}),
		new AddAssetHtmlPlugin({
			filepath: path.resolve(__dirname, "./dll/vendor.js"),
			publicPath: "./",
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
	}
};
