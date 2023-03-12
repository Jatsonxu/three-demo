const path = require('path')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {DefinePlugin} = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
console.log(__dirname)
module.exports = {
    // 入口
    entry: "./src/main.js",
    // 出口
    output: {
        // 这里需要绝对路径
        // __dirname:当前文件路径,so config 文件最好放在根目录~
        path: path.resolve(__dirname, "./build"),
        // 打包后的文件名
        filename: "js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // loader 加载顺序, 从下往上
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            },
            // 瞧一瞧,看一看,官方文档
            // https://webpack.js.org/guides/asset-modules/#root
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: "asset", //最常用|limit
                // 生成选项
                generator: {
                    filename: "img/[name]_[hash:6][ext]",
                },
                parser: {
                    // 数据 URL 的条件
                    dataUrlCondition: {
                        maxSize: 120 * 1024, // maxSize以下打包成 DataURI
                    }
                }
            },

            {
                test: /\.(eot|otf|ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: "font/[name]_[hash:6].[ext]"
                }
            }

        ]
    },
    plugins: [
        // 一个一个的插件对象
        // 注入
        // 根据 hook 生命周期执行
        // 插件在这里没有顺序, 根据Hook内部机制调用的
        new CleanWebpackPlugin(), // build 前清理打包过的文件
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "ThreeJS 2023"
        }),
        new DefinePlugin({
            BASE_URL: JSON.stringify("./"),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "public", //从哪里复制
                    to: './',// 复制到那里去
                    globOptions: {
                        // 需要忽略哪些文件
                        ignore: [
                            "**/index.html"
                        ]
                    }
                }
            ]
        })
    ]
}