const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	output: {
		filename: "js/[name]_bounder.js",
		assetModuleFilename: "images/[name][ext]", // images/test.png
	},
	mode: "development",
	devtool: "inline-source-map",
	plugins: [
		new MiniCssExtractPlugin({
			// 默认生成main.css
			filename: "style/index.css", // 生成的文件放在dest/style目录下，文件名为hash值
		}),
	],
	devServer: {
		static: "../dist",
	},
};
