const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
		index: "./index.js",
		app: "./app.js",
	},
    output: {
		path: path.resolve(__dirname, "./dist"),
		clean: true,
        filename: "[name]_bounder.js",
	},
    devtool: "cheap-module-source-map",
    // false: 不开启source-map, 
    // eval: 每个module会封装到eval里包裹起来执行，并且会在末尾追加注释，可以定位到JS Babel编译后代码
    // source-map: 生成一个SourceMap文件，可以定位到JS编译前的代码（源代码文件）
    // hidden-source-map：和source-map一样，但不会在bundle末尾追加注释，无法定位源代码和JS编译后代码位置
    // inline-source-map：生成一个DataUrl形式的SourceMap文件，不会单独打包一个map文件，可以定位到源代码
    // eval-source-map：每个module会通过eval（）来执行，并生成一个DataUrl形式的SourceMap，可以定位到源代码
    // cheap-source-map：生成一个没有列信息（column-mappings）的SourceMaps文件，可以定位到JS Babel编译后代码
    // cheap-module-source-map：生成一个没有列信息（column-mappings）的SourceMaps文件，同时loader的sourcemap也被简化为只包含对应行的。可以定位到源代码
    mode: 'development', // development / production
    plugins: [
		new HTMLWebpackPlugin({
			filename: "index.html", // 生成的文件名称
			inject: "body", // script标签放在哪个标签里面，默认放在head标签中
		}),
	],
    module: {
        rules: [
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
        ]
    }
}