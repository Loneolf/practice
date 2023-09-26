const path = require("path");
module.exports = {
	entry: {
		app: "./src/app.js",
	},
	// experiments: {
	// 	outputModule: true
	// },
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "qing_util.js",
		clean: true,
		library: {
			name: "qing_util",
			// type取值
			// window: 导出的方法挂载在window上，qing_util是全局的
			// commonjs: 编译后在node环境下使用
			// module: 可以使用ES6方式导入，实验性的属性，需要配置experiments，并设置outputModule为true
			// umd: 支持commonJS 与 JS标签引入，
			type: "umd",
		},
		globalObject:'globalThis', // 解决commonJS环境 self问题
	},
	mode: "production", // development / production
	// devtool: "cheap-module-source-map",
};
