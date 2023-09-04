const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpakPlugin = require("css-minimizer-webpack-plugin");
const Terser = require("terser-webpack-plugin");

module.exports = {
	entry: {
		index: "./src/index.js",
		lodashDeepLog: "./src/lodashLog.js",
	},
	output: {
		filename: "js/[name]_[contenthash]_bounder.js",
		assetModuleFilename: "images/[name]_[contenthash][ext]", // images/test.png
		publicPath: "http://localhost:5501/webpack/multiple-env/dist/",
	},
	mode: "production",
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style/[contenthash].css", // 生成的文件放在dest/style目录下，文件名为hash值
		}),
	],
	optimization: {
		minimizer: [new CssMinimizerWebpakPlugin(), new Terser()],
	},
};
