const path = require("path");
module.exports = {
	entry: {
		app: "./src/app.js",
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "qing_util.js",
		clean: true,
		library: {
			name: "qing_util",
			type: "commonjs",
		},
		globalObject: "globalThis", // 解决commonJS环境 self问题
	},
	mode: "production", // development / production
	externals: {
		// xlsx: 'xlsx'
		xlsx: {
			commonjs: "xlsx",
			commonjs2: "xlsx",
		},
		fs: {
			commonjs: "fs",
			commonjs2: "fs",
		},
	},
};
