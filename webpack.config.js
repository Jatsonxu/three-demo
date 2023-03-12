const path = require('path')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {DefinePlugin} = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
    mode: "development",
    devtool: "source-map",
    // 入口
    entry: "./src/main.js",
    // 出口
    output: {
        // 这里需要绝对路径
        // __dirname:当前文件路径,so config 文件最好放在根目录~
        path: path.resolve(__dirname, "./dist"),
        // 打包后的文件名
        filename: "js/build.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
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
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: "asset",
                generator: {
                    filename: "img/[name]_[hash:6][ext]",
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 120 * 1024,
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // template: "./public/index.html",
            title: "webpack+vue"
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