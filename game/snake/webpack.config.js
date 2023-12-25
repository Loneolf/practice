const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
	return {
		entry: {
			app: "./src/app.ts",
		},
		output: {
			path: path.resolve(__dirname, "./dist"),
			clean: true,
			filename: "[name]_bounder.js",
			// 不使用箭头函数和const
			environment: {
				arrowFunction: false,
				const: false,
			},
		},
		devtool: "cheap-module-source-map",
		mode: env.production ? "production" : "development", // development / production
		plugins: [
			new HTMLWebpackPlugin({
				inject: "body",
				template: "./index.html",
			}),
		],
		devServer: {
			client: {
				overlay: false,
			},
			static: path.resolve(__dirname, "./dist"),
			compress: true,
			port: 3000,
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: [
						{
							loader: "babel-loader",
							options: {
								presets: [
									[
										"@babel/preset-env",
										{
											targets: ["last 1 version", "> 1%"],
											// targets:{
											// 	"chrome":"58",
											// 	"ie":"11"
											// },
											useBuiltIns: "usage",
											corejs: 3,
										},
									],
								],
							},
						},
						"ts-loader",
					],
					exclude: /node_modules/,
				},
				{
					test: /\.(css|scss)$/,
					use: [
						"style-loader",
						"css-loader",
						"postcss-loader",
						"sass-loader",
					],
				},
			],
		},
		resolve: {
			extensions: [".ts", ".js"],
			alias: {
				"@": path.resolve(__dirname, "./src"),
				"@u": path.resolve(__dirname, "./src/util"),
			},
		},
	};
};
