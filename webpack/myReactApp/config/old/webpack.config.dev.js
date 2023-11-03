const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = {
	entry: "./src/main.js",
	output: {
		// path: path.resolve(__dirname, "../dist"),
		path: undefined,
		clean: true,
		filename: "static/js/[name].js",
		chunkFilename: "static/js/[name].chunk.js",
		assetModuleFilename: "static/[name]_[contenthash:10][ext]", // images/test.png
	},
	mode: "development", // development | production
	devtool: "cheap-module-source-map",
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "../public/index.html"), // 以该文件为模板生成HTML
		}),
		new ESLintPlugin({
			context: path.resolve(__dirname, "../src"),
			exclude: "node_modules",
			cache: true,
			cacheLocation: path.resolve(__dirname,"../node_modules/.cache/.eslintcache"),
		}),
		new MiniCssExtractPlugin({
			// 默认生成main.css
			filename: "style/[contenthash].css", // 生成的文件放在dest/style目录下，文件名为hash值
		}),
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
				test: /\.(jp?eg|png|svg|webp|gif)$/, // 用正则匹配以jpg为结尾的资源
				type: "asset",
				// asset 自动根据文件大小生成资源或者base64的url，默认值为8K 4*1024
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024, //
					},
				},
			},
			{
				test: /\.(woff|woff2|ttf|otf|eot|txt)$/,
				type: "asset/resource",
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName:
									"[name]_[local]_[hash:base64:6]",
							},
							importLoaders: 2,
						},
					},
					{
						loader: "postcss-loader",
					},
					"sass-loader",
				],
			},
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
	resolve: {
		extensions: [".jsx", ".js", ".json"], // 自动补全文件扩展名，让jsx可以使用
	},
	optimization: {
		splitChunks: {
			chunks: "all",
			// 缓存组，一般缓存第三方库，从而使用浏览器的缓存机制不用重复加载第三方依赖
			// cacheGroups: {
			// 	vendor: {
			// 		test: /[\\/]node_modules[\\/]/,
			// 		// 将node_modules中的文件打包到dependOn文件中，包中依赖不变的话生成的包名字不变
			// 		name: "dependOn",
			// 		chunks: "all",
			// 	},
			// },
		},
		runtimeChunk: {
			name: (entrypoint) => `runtime~${entrypoint.name}`,
		},
	},
};
