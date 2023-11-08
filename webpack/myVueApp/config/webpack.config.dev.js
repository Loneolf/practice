// const path = require("path");


module.exports = {
	entry: "./src/main.js",
	output: {
		path: undefined,
		filename: "js/[name].js",
		chunkFilename: "js/[name].chunk.js",
		assetModuleFilename: "[name]_[hash:10].[ext]", // images/test.png
	},
	mode: "development",
	devtool: "cheap-module-source-map",
	plugins: [
		
	],
	devServer: {
		client: {
			overlay: false,
		},
		compress: true,
		// 自定义端口号
		port: 3000,
		open: true,
		hot: true,
		historyApiFallback: true,
		// proxy: { // 配置代理
		// 	// "/api": "http://localhost:9000", // 直接代理
		// 	"/api": { // 使用对象，可以重写路径
		// 		target: "http://localhost:9000",
        //         // 重写路径
        //         pathRewrite: {
        //             "^/api":"/test",
        //         },
        //         // 确保请求主机名是target中的主机名
        //         changeOrigin: true
		// 	}
		// },
	},
};
