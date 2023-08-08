// 文件名必须为webpack.config.js，webpack自动读取
// 在node.js中运行，所以必须用commentJS导入导出
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bounder.js',
        path: path.resolve(__dirname, './dist'),
        // __dirname相当于找到当前文件夹的绝对路径， './dist'从当前文件夹的绝对路径找到相对路径dist
        clean: true, 
        // 生成的文件目录清除冗余的文件，不清除plugins生成的文件
    },
    mode: 'development', 
    // development:开发模式
    devtool: 'inline-source-map',
    // 异常时， 显示源文件代码具体位置，而非打包后文件异常位置
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html', // 以该文件为模板生成HTML
            filename: 'app.html', // 生成的文件名称
            inject: 'body', // script标签放在哪个标签里面，默认放在head标签中
        })
    ],
    devServer: {
        static: './dist'
        // 使用指令 npx webpack-dev-server启动，在本地启动8080的服务端口
        // 本质是将输出后的bounder.js文件放在内存中，删除本地的bounder.js文件并不会影响开发调试
    }
}

// 使用npx webpack 增加--watch去编译文件，实时检测文件改动