// 文件名必须为webpack.config.js，webpack自动读取
// 在node.js中运行，所以必须用commentJS导入导出
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 该loader仅在webpack5下可使用
const CssMinimizerWebpakPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bounder.js',
        path: path.resolve(__dirname, './dist'),
        // __dirname相当于找到当前文件夹的绝对路径， './dist'从当前文件夹的绝对路径找到相对路径dist
        clean: true, 
        // 生成的文件目录清除冗余的文件，不清除plugins生成的文件
        assetModuleFilename: 'images/[name]_[contenthash][ext]' // images/test.png
        // 可以指定输出路径和文件名称，
        // name:文件本身的名称，contenthash:生成的hash值, ext:文件原本的类型
    },
    mode: 'development', 
    // development:开发模式, production:生产模式
    devtool: 'inline-source-map',
    // 异常时， 显示源文件代码具体位置，而非打包后文件异常位置
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html', // 以该文件为模板生成HTML
            filename: 'app.html', // 生成的文件名称
            inject: 'body', // script标签放在哪个标签里面，默认放在head标签中
        }),
        new MiniCssExtractPlugin({ // 默认生成main.css
            filename: 'style/[contenthash].css' // 生成的文件放在dest/style目录下，文件名为hash值
        }),
    ],
    devServer: {
        static: './dist'
        // 使用指令 npx webpack-dev-server启动，在本地启动8080的服务端口
        // 本质是将输出后的bounder.js文件放在内存中，删除本地的bounder.js文件并不会影响开发调试
    },
    module: {
        rules: [
            {
                test: /\.png$/, // 用正则匹配以png为结尾的资源
                type: 'asset/resource',
                // asset/resource, 打包资源文件，输出对应文件
                generator: {
                    filename: 'images/[name]_[contenthash][ext]'
                }
                // 优先级高于output中的assetModuleFilename
            },
            {
                test: /\.svg$/, // 用正则匹配以svg为结尾的资源
                type: 'asset/inline',
                // asset/inline, 将资源打包成data URL base64格式的数据
            },
            {
                test: /\.txt$/, // 用正则匹配以txt为结尾的资源
                type: 'asset/source',
                // asset/source, 打包出资源的源代码
            },
            {
                test: /\.jpg$/, // 用正则匹配以jpg为结尾的资源
                type: 'asset',
                // asset 自动根据文件大小生成资源或者base64的url，默认值为8K 4*1024
                parser:{
                    dataUrlCondition:{
                        maxSize: 4 * 1024 * 1024
                    }
                }
            }, 
            {
                test: /\.(css|scss)$/,
                // use: ['style-loader', 'css-loader', 'less-loader'],
                // use: ['style-loader', 'css-loader', 'sass-loader']
                // use 支持链式调用，如果是数组，从后往前执行，依次将产物给前一个loader去执行
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    optimization: {
        minimizer:[
            new CssMinimizerWebpakPlugin()
            // 仅在production模式下生效
        ]
    }
}

// 使用npx webpack 增加--watch去编译文件，实时检测文件改动