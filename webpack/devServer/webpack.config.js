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
    mode: 'development', // development / production
    plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
			filename: "index.html", // 生成的文件名称
			inject: "body", // script标签放在哪个标签里面，默认放在head标签中
		}),
	],
	devServer: {
		hot: true,
		liveReload: false,
		static: path.resolve(__dirname, "./dist"),
		// 设置是否在服务器端进行代码压缩，以减少传输过程中的数据大小
    	// Accept-Encoding: gzip，说明服务器到客户端传输的过程中，文件是被压缩的,浏览器默认有解压缩功能，该功能现在默认开启
		compress: true,
		// 自定义端口号
		port: 3000,
		// 添加响应头
		headers: {
			"X-Access-Token": "adfasdfa",
		},
		proxy: { // 配置代理
			// "/api": "http://localhost:9000", // 直接代理
			"/api": { // 使用对象，可以重写路径
				target: "http://localhost:9000",
                // 重写路径
                pathRewrite: {
                    "^/api":"/test",
                },
                // 确保请求主机名是target中的主机名
                changeOrigin: true
			}
		},
		// https: true, // 是否开启https
		// http2: true,  // 开启http2，可以使用https访问
		// historyApiFallback: true // 异常时，回到历史中正确的页面，可以使用rewrites自定义页面
		historyApiFallback: {
            rewrites: [
                {from: /.*/, to: '/error.html'}
            ]
        },
		host: '0.0.0.0' //开启服务器主机，同局域网内的同事也能访问
	},
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
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
        ]
    },
	// optimization: {
    //     runtimeChunk: 'single'
    // }
}