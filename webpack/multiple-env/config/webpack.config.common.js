const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		// // 多入口文件
		index: "./src/index.js",
		lodashDeepLog: "./src/lodashLog.js",
	},
	output: {
		path: path.resolve(__dirname, "../dist"),
		clean: true,
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./index.html", // 以该文件为模板生成HTML
			filename: "app.html", // 生成的文件名称
			inject: "body", // script标签放在哪个标签里面，默认放在head标签中
		}),
	],
	module: {
		rules: [
			{
				test: /\.png$/, // 用正则匹配以png为结尾的资源
				type: "asset/resource",
				generator: {
					filename: "images/[name]_[contenthash][ext]",
				},
			},
			{
				test: /\.svg$/, // 用正则匹配以svg为结尾的资源
				type: "asset/inline",
			},
			{
				test: /\.txt$/, // 用正则匹配以txt为结尾的资源
				type: "asset/source",
			},
			{
				test: /\.jpg$/, // 用正则匹配以jpg为结尾的资源
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 4 * 1024 * 20, // 160k
					},
				},
			},
			{
				test: /\.(css|scss)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(woff|woff2|ttf|otf|eot)$/,
				type: "asset/resource",
			},
			{
				test: /\.js$/,
				exclude: /node_modules/, // 排除node_modules中的库
				use: {
					loader: "babel-loader", // 加载loader
					options: {
						presets: ["@babel/preset-env"], // 配置预设
						plugins: [["@babel/plugin-transform-runtime"]],
					},
				},
			},
		],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					// 将node_modules中的文件打包到verdors文件中，包中依赖不变的话生成的包名字不变
					name: "dependOn",
					chunks: "all",
				},
			},
		},
	},
};
