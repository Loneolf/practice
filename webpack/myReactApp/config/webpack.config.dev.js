const path = require("path");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = {
	entry: "./src/main.js",
	output: {
		path: undefined,
		clean: true,
		filename: "static/js/[name].js",
		chunkFilename: "static/js/[name].chunk.js",
		assetModuleFilename: "static/[name]_[contenthash:10][ext]", // images/test.png
	},
	mode: "development", // development | production
	devtool: "cheap-module-source-map",
	plugins: [
		new ReactRefreshWebpackPlugin()
	],
	devServer: {
		client: {
			overlay: false,
		},
		// static: path.resolve(__dirname, "../dist"),
		compress: true,
		// 自定义端口号
		port: 3000,
		open: true,
		hot: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				// exclude: /node_modules/, // 排除node_modules中的库
				include: path.resolve(__dirname, "../src"),
				loader: "babel-loader",
				options: {
					cacheDirectory: true,
					cacheCompression: false,
					plugins: [
						"react-refresh/babel", // 激活js的HMR
					],
				},
			},
		],
	},
};
