const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [   // ---因为webpack只能是被es5的代码，所以需要使用rules添加webpack编译时，对所编译文件设置对应的编译规范
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png|svg|jpeg)$/,
                use: {
                    loader: 'url-loader', //将图片转化为base64输出在html上
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new htmlWebpackPlugin()
    ]
}

if(isDev){
    config.devtool = '#cheap-module-eval-source-map' //方便调试
    config.devServer = {
        port: '8000',
        host: '0.0.0.0',
        overlay: {
            errors: true,
        },
        hot: true //启动热加载，与HotModuleReplacementPlugin和NoEmitOnErrorsPlugin配合使用
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config